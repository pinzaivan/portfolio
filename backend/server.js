const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { spawn } = require("child_process");

const app = express();
app.use(cors());
app.use(express.json());

let context = "";

const cargarContexto = () => {
  try {
    context = fs.readFileSync("./docs/cv.txt", "utf-8");
    console.log("Contexto cargado desde cv.txt");
  } catch (err) {
    console.error("Error cargando el archivo de texto:", err);
  }
};

cargarContexto();

app.post("/ask", async (req, res) => {
  const { question } = req.body;
  const prompt = `Contexto:\n${context}\n\nPregunta: ${question}`;

  try {
    const python = spawn("python", ["./gpt4all_query.py"]);

    let output = "";
    python.stdout.on("data", (data) => {
      output += data.toString();
    });

    python.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
    });

    python.on("close", (code) => {
      if (code === 0) {
        res.json({ answer: output });
      } else {
        res.status(500).json({ error: "Error ejecutando GPT4All" });
      }
    });

    python.stdin.write(JSON.stringify({ prompt }));
    python.stdin.end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error consultando al modelo" });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
