'use client';

import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import Computer from '../../public/Scene.jsx';
import {Euler, Vector3 } from "three";
import CameraPositionLogger from '../../helpers/CameraPositionLogger.jsx'

export default function ModelViewer(){

   const cameraStartPos = new Vector3(-0.01, 0.27, 0.62)
   
   return (

      <div className="h-96 w-96">
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
   )
}