import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat, toLonLat } from 'ol/proj';
import Geolocation from 'ol/Geolocation';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { Style, Circle as CircleStyle, Fill, Stroke } from 'ol/style';
import Overlay from 'ol/Overlay';
import { toStringHDMS } from 'ol/coordinate';
import { CesiumViewer } from './CesiumViewer';

export const Maps = () => {
  const mapRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    const view = new View({
      center: fromLonLat([-74.2973, 4.5709]),
      zoom: 5,
    });

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: view,
    });

    const positionFeature = new Feature();
    positionFeature.setStyle(
      new Style({
        image: new CircleStyle({
          radius: 6,
          fill: new Fill({ color: '#3399CC' }),
          stroke: new Stroke({ color: '#fff', width: 2 }),
        }),
      }),
    );

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [positionFeature],
      }),
    });

    map.addLayer(vectorLayer);

    const overlay = new Overlay({
      element: popupRef.current,
      positioning: 'bottom-center',
      stopEvent: false,
      offset: [0, -10],
    });

    map.addOverlay(overlay);

    const geolocation = new Geolocation({
      tracking: true,
      projection: view.getProjection(),
    });

    geolocation.setTracking(true);

    geolocation.on('change:position', () => {
      const coordinates = geolocation.getPosition();

      if (coordinates) {
        positionFeature.setGeometry(new Point(coordinates));
        overlay.setPosition(coordinates);
        const [lon, lat] = toLonLat(coordinates);
        popupRef.current.innerHTML = `
            <div class="bg-white text-black text-xs p-1 rounded shadow w-20">
            <strong>EPSG:3857  Ubicación:</strong><br/>
             ${toStringHDMS(toLonLat(coordinates))}
            </div>
        `;
        view.setCenter(coordinates);
        view.setZoom(10);
      }
    });

    return () => {
      map.setTarget(null);
    };
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-yellow-500 font-semibold text-2xl mb-4">
        Mapas y escenas 3d
      </h1>

      <h2 className="text-xl">Open Layers</h2>
      <br />
      <section className="p-2 max-w-4xl mx-auto">
        <div ref={mapRef} className="w-full h-[500px] rounded relative"></div>
        <div ref={popupRef} className="absolute z-10"></div>
      </section>
      <p className="bg-black ">
        Esta aplicación en React utiliza la librería OpenLayers para mostrar un
        mapa interactivo con datos de OpenStreetMap. Implementa geolocalización
        en tiempo real que ubica al usuario mediante un marcador personalizado,
        mostrando sus coordenadas en un popup con formato legible. Usa capas
        vectoriales, estilos personalizados y overlays para mejorar la
        experiencia visual e interactiva del usuario en el mapa 2D.
      </p>
      <br />
      <section>
        <CesiumViewer />
        <p className="bg-black">
          Este proyecto en React integra CesiumJS para crear una experiencia de
          visualización 3D de mapas globales. Muestra puntos de interés como
          Bogotá con iconos y etiquetas, y utiliza la API de geolocalización del
          navegador para centrar la cámara en la ubicación del usuario. Incluye
          interacción mediante clicks para mostrar coordenadas precisas en
          pantalla, usando entidades, etiquetas y animaciones propias de Cesium
          para ofrecer una cartografía avanzada y dinámica en 3D.
        </p>
      </section>
    </main>
  );
};
