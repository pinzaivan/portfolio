import React, { useEffect, useRef } from 'react';
import { Viewer } from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

export const CesiumViewer = () => {
  const viewerRef = useRef(null);

  useEffect(() => {
    const viewer = new Viewer(viewerRef.current, {
      shouldAnimate: true,
    });

    return () => {
      if (viewer && !viewer.isDestroyed()) {
        viewer.destroy();
      }
    };
  }, []);

  return (
    <main className="w-full h-screen">
      <h1 className="text-xl text-white p-4 bg-black">CesiumJS</h1>
      <div ref={viewerRef} className="w-full h-[90%]" />
    </main>
  );
};
