
'use client'

import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'



const AVATAR_URL = 'https://models.readyplayer.me/6817b8683117d5905dab4cd9.glb'

// RENDERAR MODELLEN
function Avatar() {
  const { scene } = useGLTF(AVATAR_URL)
  const avatarRef = useRef<THREE.Object3D>(null)

 // ROTERAR MODELLEN
useFrame(() => {
if(avatarRef.current) {
    avatarRef.current.rotation.y += 0.005
  }
})
return (
    <primitive
      ref={avatarRef}
      object={scene}
      scale={1.1}
      position={[0, -1.1, 0]}
    />
  )
}


export default function AvatarModel() {
  return (
    <div className="w-full h-[500px] bg-white">
      <Canvas camera={{ position: [0, 1.6, 2.8], fov: 30 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 5]} />
        <Suspense fallback={null}>
          <Avatar />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  )
}
