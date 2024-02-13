'use client';

import { Suspense, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import Computer from '../../public/Scene.jsx';
import {Euler, Vector3 } from "three";
import CameraPositionLogger from '../../helpers/CameraPositionLogger.jsx'
import gsap from 'gsap'
import CameraAnimation from "./CameraAnimation.jsx";
import { useAspect } from "@react-three/drei";

const ModelViewer = () => {

   const cameraStartPos = new Vector3(-0.16, 0.68, 0.5)
   const [triggerAnimation, setTriggerAnimation] = useState(false)

   return (

      <div className="mt-16 h-96 w-96">
         <Canvas 
            camera={{position: cameraStartPos}} 
            onMouseOver={() => setTriggerAnimation(true)}
            onMouseLeave={() => setTriggerAnimation(false)}
         >
            <ambientLight args={['#ffffff', 1.2]}/>
            <OrbitControls />
            <CameraAnimation animate={triggerAnimation}/>
            <CameraPositionLogger event="mousedown" />
            <Suspense fallback={null}>
               <Computer position={[0.8,-1,0]}/>
            </Suspense>
         </Canvas>
      </div>
   )
}

export default ModelViewer