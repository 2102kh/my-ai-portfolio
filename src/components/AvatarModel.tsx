'use client'

import { OrbitControls, useGLTF, Html } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useEffect, useRef } from 'react'
import * as THREE from 'three'

type AvatarProps = {
  isSpeaking: boolean
  text?: string 
}

const AVATAR_URL = 'https://models.readyplayer.me/6817b8683117d5905dab4cd9.glb'

function Avatar({ isSpeaking, text }: AvatarProps) {
  const { scene, animations } = useGLTF(AVATAR_URL)
  const avatarRef = useRef<THREE.Object3D>(null)
  const mixerRef = useRef<THREE.AnimationMixer | null>(null)

  
  useEffect(() => {
    if (!avatarRef.current || animations.length === 0) return
    mixerRef.current = new THREE.AnimationMixer(avatarRef.current)

    const idleAnim = animations.find((clip) =>
      clip.name.toLowerCase().includes('idle')
    ) || animations[0]

    const action = mixerRef.current.clipAction(idleAnim)
    action.play()
  }, [animations])

  // Munrörelse + animation update
  useFrame((_, delta) => {
    mixerRef.current?.update(delta)
    const headMesh = avatarRef.current?.getObjectByName('Wolf3D_Head') as THREE.Mesh
    const mouthIndex = headMesh?.morphTargetDictionary?.mouthOpen
    if (mouthIndex !== undefined) {
      headMesh.morphTargetInfluences![mouthIndex] = isSpeaking ? 0.4 : 0
    }
  })

  return (
    <primitive object={scene} ref={avatarRef} scale={0.85} position={[0, -1.2, 0]}>
     
      {text && (
        <Html position={[0, 2.2, 0]} center>
          <div style={{
            background: 'white',
            padding: '10px 14px',
            borderRadius: '12px',
            maxWidth: '300px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}>
            <p style={{ margin: 0 }}>{text}</p>
          </div>
        </Html>
      )}
    </primitive>
  )
}

export default function AvatarModel({ isSpeaking, text }: AvatarProps) {
  return (
    <div className="relative w-full h-[700px] bg-white">
      <Canvas camera={{ position: [0, 2, 3], fov: 30 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 5]} />
        <Suspense fallback={null}>
          <Avatar isSpeaking={isSpeaking} text={text} />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  )
}
