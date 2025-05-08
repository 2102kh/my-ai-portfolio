
'use client'

import { OrbitControls, useGLTF, useFBX, Html } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useEffect, useRef } from 'react'
import * as THREE from 'three'
import Visuals from './Visuals'

type AvatarProps = {
  isSpeaking: boolean
  text?: string
}

const AVATAR_URL = 'https://models.readyplayer.me/6817b8683117d5905dab4cd9.glb'

function OfficeRoom() {
  const {scene}  = useGLTF('/models/snake.glb')
  return (
    <primitive
      object={scene}
      scale={1}
      position={[1.7,-1.3, -0.1]}
     
    />
  )
}
function Lampa() {
  const {scene}  = useGLTF('/models/floor_lamp.glb')
  return (
    <primitive
      object={scene}
      scale={0.8}
      position={[-0.2, -0.6, -0.9]}
     
    />
  )
}
function Avatar({ isSpeaking, text }: AvatarProps) {
  const { scene } = useGLTF(AVATAR_URL)


  const idleFbx = useFBX('/animations/StandingIdle.fbx')
  const avatarRef = useRef<THREE.Object3D>(null)
  const mixerRef = useRef<THREE.AnimationMixer | null>(null)

  let mouthTime = 0
  let mouthOpen = false
  function logAllNames(object: THREE.Object3D, depth = 0) {
    console.log(`${' '.repeat(depth * 2)}${object.name}`);
    object.children.forEach(child => logAllNames(child, depth + 1));
  }

  useEffect(() => {
    if (scene) {
      console.log("📦 Hela scenstrukturen:");
      logAllNames(scene);
    }
  }, [scene]);
  useEffect(() => {
    if (!avatarRef.current || !idleFbx.animations.length) return

    const mixer = new THREE.AnimationMixer(avatarRef.current)
    mixerRef.current = mixer

    const idleAction = mixer.clipAction(idleFbx.animations[0])
    idleAction.play()

    return () => {
      mixer.stopAllAction()
    }
  }, [idleFbx.animations])

  useFrame((_, delta) => {
    mixerRef.current?.update(delta)

    const headMesh = avatarRef.current?.getObjectByName('Wolf3D_Head') as THREE.Mesh
    const mouthIndex = headMesh?.morphTargetDictionary?.mouthOpen
    const eyeIndex = headMesh?.morphTargetDictionary?.eyesClosed
    const headBone = scene.getObjectByName('Head')
    const leftArm = scene.getObjectByName('LeftArm')


    // Munrörelse
    if (isSpeaking) {
      mouthTime += delta
      if (mouthTime > 0.5) {
        mouthOpen = !mouthOpen
        mouthTime = 0
      }
    }

    if (mouthIndex !== undefined) {
      headMesh.morphTargetInfluences![mouthIndex] = isSpeaking && mouthOpen ? 0.6 : 0
    }

    // Blinkning
    if (eyeIndex !== undefined && Math.random() < delta * 0.25) {
      headMesh.morphTargetInfluences![eyeIndex] = 1
      setTimeout(() => {
        if (headMesh.morphTargetInfluences) {
          headMesh.morphTargetInfluences[eyeIndex] = 0
        }
      }, 100 + Math.random() * 100)
    }

    // Manuell rörelse
    if (isSpeaking) {
      if (headBone) {
        if (headBone) {
          headBone.rotation.x = 0.1 * Math.sin(Date.now() * 0.001)
          headBone.rotation.y = 0.1 * Math.sin(Date.now() * 0.0015)
          headBone.rotation.z = 0.05 * Math.sin(Date.now() * 0.0012)
        }
      }
      if (leftArm) {
        //leftArm.rotation.x = 0  * Math.sin(Date.now() * 0.0001)
        //leftArm.rotation.z = -0.3 * Math.sin(Date.now() * 0.0015)
      }

    }
  })

  return (
    <primitive object={scene} ref={avatarRef} scale={0.8} position={[0, -0.7, 0]}>
      {text && (
        <Html position={[0, 2.2, 0]} center>
          <div style={{
            background: 'white',
            padding: '10px 14px',
            borderRadius: '12px',
            maxWidth: '400px',
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
    <div className="flex flex-col gap-4  items-center justify-center w-full h-[400px] lg:h-[600px]">
      <Canvas
        shadows
        camera={{ position: [-1.182, 0.460, 2.807], fov: 30 }}
      >
        <ambientLight intensity={1.9} />
        <directionalLight position={[1, 4, 5]} intensity={0.5} color="white" />
        <Suspense fallback={null}>
           <Visuals/> 
          <OfficeRoom />
          <Lampa />
          <Avatar isSpeaking={isSpeaking} text={text} />
        </Suspense>
      </Canvas>
    </div>
  )
}
