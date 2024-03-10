/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Computer.glb 
*/

import React from 'react'
import { useLoaderContext } from '@/contexts/LoaderContext'
import { useGLTF } from '@react-three/drei'
import { useEffect} from 'react'
import { useThree } from '@react-three/fiber'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/Computer.gltf')
  const {setModelLoaded} = useLoaderContext()
  const {scene} = useThree()

  useEffect(() => {
    setModelLoaded(true)
    console.log(scene)
  }, [])

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Box20179.geometry} material={materials._crayfishdiffuse} />
      <mesh geometry={nodes.Box20180.geometry} material={materials['03___Default']} />
      <mesh geometry={nodes.Box20181.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20182.geometry} material={materials._crayfishdiffuse} />
      <mesh geometry={nodes.Box20183.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20184.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20185.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20186.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20187.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20188.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20189.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20190.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20191.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20192.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20195.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20196.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20198.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20199.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20200.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20202.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20203.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20204.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20205.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20207.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20208.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20209.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20211.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20212.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20213.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20215.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20216.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20218.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20220.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20221.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20222.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20224.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20225.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20227.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20228.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20231.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20232.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20233.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20234.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20235.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20236.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20237.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20238.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20239.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20240.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Box20241.geometry} material={materials['02___Default']} />
      <mesh geometry={nodes.Cylinder003.geometry} material={materials._crayfishdiffuse} />
      <mesh geometry={nodes.Box20242.geometry} material={materials._crayfishdiffuse} />
      <mesh geometry={nodes.Object001.geometry} material={materials['02___Default']} />
    </group>
  )
}

useGLTF.preload('/Computer.gltf')
