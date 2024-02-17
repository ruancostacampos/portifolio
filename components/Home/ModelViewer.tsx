'use client';

import { Suspense, useLayoutEffect, useRef, useState } from "react";
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



   function Scale({ width, height } : any) {
      const state = useThree()
      const [setSize] = useState(() => state.setSize)
      useLayoutEffect(() => {
        setSize(width, height)
        state.set({ setSize: () => null })
        return () => state.set({ setSize })
      }, [setSize, width, height])
      return null
   }

   const handleResize = (e : any) => {
      console.log(e.target.style.width)
   }
  

   return (

      <div className="mt-16 h-96 w-96">
         <Canvas 
            camera={{position: cameraStartPos}} 
            onMouseOver={() => setTriggerAnimation(true)}
            onMouseLeave={() => setTriggerAnimation(false)}
         >
            <Scale width="380" height="380" />
            <ambientLight args={['#ffffff', 1.2]}/>
            <OrbitControls />
            <CameraAnimation animate={triggerAnimation}/>
            <Suspense fallback={null}>
               <Computer position={[0.8,-1,0]}/>
            </Suspense>
         </Canvas>
      </div>
   )
}

export default ModelViewer