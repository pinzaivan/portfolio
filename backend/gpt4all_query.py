from gpt4all import GPT4All
import sys
import json
import os

# Ruta al archivo de contexto
context_file = os.path.join(os.path.dirname(__file__), 'docs', 'cv.txt')

# Leer el contexto (sin validaciones ni filtrados)
with open(context_file, 'r', encoding='utf-8') as f:
    context = f.read()

# Carga el modelo
model = GPT4All("orca-mini-3b-gguf2-q4_0.gguf")

# Leer JSON de entrada
input_json = sys.stdin.read()
data = json.loads(input_json)

# Obtener pregunta
question = data.get("prompt", "").strip()

# Concatenar contexto + pregunta
prompt = f"Contexto:\n{context}\n\nPregunta: {question}"

# Generar respuesta
response = model.generate(prompt, max_tokens=256)

print(response)
