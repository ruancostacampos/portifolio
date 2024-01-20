import { useThree } from "@react-three/fiber"
import gsap from "gsap"

const CameraAnimation = ({animate}) => {
    
    const {camera} = useThree()

    const lookAtModel = () => {
        gsap.to(camera.position, {x: 0.3, y: 0.11, z: 0.72, duration: 1, ease: 'power2.inOut'})
    }

    const backLookAtModel = () => {
        gsap.to(camera.position, {x: -0.16, y: 0.68, z: 0.5, duration: 1})
    }

    if(animate) {
        lookAtModel()
    }

    if(!animate){
        backLookAtModel()
    }


    return (null)

}

export default CameraAnimation