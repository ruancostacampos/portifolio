import { useThree, } from "@react-three/fiber"
import gsap from "gsap"
import { useState } from "react"

const CameraAnimation = ({animate}) => {
    
    const {camera, scene} = useThree()
    const [allowMouseOutFunc, setAllowMouseOutFunc] = useState(false)
    
    const lookAtModel = () => {
        console.log(scene.children[1]?.rotation.y / 3.03)
        gsap.to(scene.children[1]?.rotation, {y: scene.children[1]?.rotation.y * 3.03, duration: 4, repeat: -1, ease: "linear", overwrite: true})
        //Camera Position x:-0.03 y: 0.45 z:0.49
        //Camera Rotation x:-0.75 y: -0.05 z:-0.04
         //gsap.to(camera.position, {x: -0.03, y: 0.45, z: 0.49, duration: 0.5, ease: 'power2.inOut'})
        //gsap.to(camera.rotation, {x: -0.75, y:-0.05, z: -0.04, duration: 0.5, ease: 'power2.inOut'})
    }

    const backLookAtModel = () => {
        //Camera Position x:-0.16 y: 0.68 z:0.50
        //Camera Rotation x:-0.94 y: -0.19 z:-0.25
       //gsap.to(camera.position, {x: -0.16, y: 0.68, z: 0.50, duration: 0.5})
      // gsap.to(camera.rotation, {x: -0.94, y: -0.19, z: -0.25, duration: 0.5})
      gsap.to(scene.children[1]?.rotation, {y: 0, z: 0, y: 0, duration: 0.3})

    }

    if(animate) {
        
        if(!allowMouseOutFunc){
            setAllowMouseOutFunc(true)
        }

        if(gsap.isTweening(scene.children[1]?.rotation)) return

        
        lookAtModel()
    }

    if(!animate){
        
        gsap.killTweensOf(scene.children[1]?.rotation)
        
       if(!allowMouseOutFunc) return
        
       backLookAtModel()


    }


    return (null)

}

export default CameraAnimation