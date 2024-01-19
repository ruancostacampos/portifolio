'use client';

import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import Computer from '../../public/Scene.jsx';
import {Euler, Vector3 } from "three";
import CameraPositionLogger from '../../helpers/CameraPositionLogger.jsx'

export default function ModelViewer(){

   const cameraStartPos = new Vector3(0, 0, 0.68)
   
   return (
      <>
      <div className="flex-1 h-full">
         <Canvas camera={{position: cameraStartPos}}>
            <axesHelper args={[5]} />
            <ambientLight args={['#ffffff', 1.2]}/>
            <OrbitControls />
            <CameraPositionLogger event="mousedown" />
            <Suspense fallback={null}>
               <Computer position={[0.8,-1,0]}/>
            </Suspense>
         </Canvas>
      </div>
      </>
   )
}