import React, { useEffect, useRef } from 'react';
import {
  Viewer,
  Cartesian3,
  Color,
  LabelStyle,
  VerticalOrigin,
  Cartesian2,
  ScreenSpaceEventHandler,
  ScreenSpaceEventType,
  Math as CesiumMath,
  Cartographic,
} from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

export const CesiumViewer = () => {
  const viewerRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    const viewer = new Viewer(viewerRef.current, {
      shouldAnimate: true,
    });

    const bogota = Cartesian3.fromDegrees(-74.0721, 4.711);
    viewer.entities.add({
      name: 'Bogotá',
      position: bogota,
      billboard: {
        image: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
        width: 32,
        height: 32,
      },
      label: {
        text: 'Bogotá',
        font: '14px sans-serif',
        fillColor: Color.WHITE,
        style: LabelStyle.FILL_AND_OUTLINE,
        outlineWidth: 2,
        verticalOrigin: VerticalOrigin.TOP,
        pixelOffset: new Cartesian2(0, -40),
      },
    });

    const handler = new ScreenSpaceEventHandler(viewer.scene.canvas);
    handler.setInputAction((movement) => {
      const pickedPosition = viewer.scene.pickPosition(movement.position);
      if (pickedPosition && popupRef.current) {
        const carto = Cartographic.fromCartesian(pickedPosition);
        const lon = CesiumMath.toDegrees(carto.longitude);
        const lat = CesiumMath.toDegrees(carto.latitude);

        const canvasPosition = movement.position;
        popupRef.current.innerHTML = `
          <div class="bg-white text-black text-xs p-2 rounded shadow w-36">
            <strong>Lat:</strong> ${lat.toFixed(5)}<br/>
            <strong>Lon:</strong> ${lon.toFixed(5)}
          </div>
        `;
        popupRef.current.style.left = `${canvasPosition.x + 10}px`;
        popupRef.current.style.top = `${canvasPosition.y + 10}px`;
        popupRef.current.classList.remove('hidden');
      }
    }, ScreenSpaceEventType.LEFT_CLICK);

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userLocation = Cartesian3.fromDegrees(longitude, latitude);

          viewer.entities.add({
            name: 'Tu ubicación',
            position: userLocation,
            billboard: {
              image: 'https://cdn-icons-png.flaticon.com/512/25/25694.png',
              width: 28,
              height: 28,
            },
            label: {
              text: 'Tú estás aquí',
              font: '14px sans-serif',
              fillColor: Color.WHITE,
              style: LabelStyle.FILL_AND_OUTLINE,
              outlineWidth: 2,
              verticalOrigin: VerticalOrigin.TOP,
              pixelOffset: new Cartesian2(0, -40),
            },
          });

          viewer.camera.flyTo({
            destination: Cartesian3.fromDegrees(longitude, latitude, 1000000),
          });
        },
        (error) => {
          console.error('No se pudo obtener la ubicación del usuario:', error);
        },
      );
    }

    return () => {
      handler.destroy();
      if (viewer && !viewer.isDestroyed()) {
        viewer.destroy();
      }
    };
  }, []);

  return (
    <main className="w-full h-screen relative">
      <h1 className="text-xl text-white p-4 bg-black">CesiumJS</h1>
      <div ref={viewerRef} className="w-full h-[90%]" />
      <div
        ref={popupRef}
        className="absolute z-10 hidden"
        style={{ pointerEvents: 'none' }}
      ></div>
    </main>
  );
};
