'use client';

import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {Vector3, WebGL1Renderer } from "three";
import { useLoaderContext } from "@/contexts/LoaderContext";
import CRTMonitor from '../Models/CRTMonitor'

const ModelViewer = () => {

   const cameraStartPos = new Vector3(-0.16, 0.68, 0.5)
   const [triggerAnimation, setTriggerAnimation] = useState(false)
   const [customStyle, setCustomStyle] = useState('')
   const {isModelLoaded}: any = useLoaderContext()



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

   useEffect(() => {
      if(isModelLoaded){
         console.log('Model loaded.')
         setCustomStyle('hidden')
      }
   }, [isModelLoaded])
  
  

   return(
      <div className="relative mt-16">
         <div className={`absolute w-8 h-8 flex justify-center items-center left-1/2 top-0 ${customStyle}`}>Carregando...</div>
         <Canvas 
            gl={canvas => new WebGL1Renderer({ canvas, alpha: true, antialias: true })}
            camera={{position: [0,0,1.5]}}
            onMouseOver={() => setTriggerAnimation(true)}
            onMouseLeave={() => setTriggerAnimation(false)}
         >
            <Scale width="380" height="380" />
            <ambientLight args={['#ffffff', 1.2]} position={[2, 3, 0]}/>
               <Suspense fallback={null}>
                 <CRTMonitor />
               </Suspense>
         </Canvas>
      </div>
   )
}

export default ModelViewer