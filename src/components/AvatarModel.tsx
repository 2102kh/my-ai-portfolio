'use client'

import { OrbitControls, useGLTF, useFBX, Html } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useEffect, useRef } from 'react'
import * as THREE from 'three'

type AvatarProps = {
  isSpeaking: boolean
  text?: string
}

const AVATAR_URL = 'https://models.readyplayer.me/6817b8683117d5905dab4cd9.glb'

function Avatar({ isSpeaking, text }: AvatarProps) {
  const { scene } = useGLTF(AVATAR_URL)

  const idleFbx = useFBX('/animations/StandingIdle.fbx')
  const talkingFbx = useFBX('/animations/Talking2.fbx')
  const speakingFbx = useFBX('/animations/Talking1.fbx')
  const talkingFbx2 = useFBX('/animations/Talking.fbx')

  const avatarRef = useRef<THREE.Object3D>(null)
  const mixerRef = useRef<THREE.AnimationMixer | null>(null)

  useEffect(() => {
    if (
      !avatarRef.current ||
      !idleFbx.animations.length ||
      !talkingFbx.animations.length ||
      !speakingFbx.animations.length ||
      !talkingFbx2.animations.length
    ) return

    const mixer = new THREE.AnimationMixer(avatarRef.current)
    mixerRef.current = mixer

    const idleAction = mixer.clipAction(idleFbx.animations[0])
    idleAction.play()

    return () => {
      mixer.stopAllAction()
    }
  }, [idleFbx.animations, talkingFbx.animations, speakingFbx.animations, talkingFbx2.animations])

  useEffect(() => {
    if (!mixerRef.current) return

    const mixer = mixerRef.current
    const idleAction = mixer.clipAction(idleFbx.animations[0])
    const talkingAction = mixer.clipAction(talkingFbx.animations[0])
    const speakingAction = mixer.clipAction(speakingFbx.animations[0])
    const talkingAction2 = mixer.clipAction(talkingFbx2.animations[0])

    if (isSpeaking) {
      idleAction.fadeOut(0.5)
      talkingAction.reset().fadeIn(0.4).play()
      speakingAction.reset().fadeIn(0.4).play()
      talkingAction2.reset().fadeIn(0.4).play()
    } else {
      talkingAction.fadeOut(0.3).stop()
      speakingAction.fadeOut(0.3).stop()
      talkingAction2.fadeOut(0.3).stop()
      idleAction.reset().fadeIn(0.5).play()
    }
  }, [isSpeaking])

  //Mun och ögon
  let t = 0
let mouthTime = 0
let mouthOpen = false

useFrame((_, delta) => {
  mixerRef.current?.update(delta)
  t += delta
  mouthTime += delta

  const headMesh = avatarRef.current?.getObjectByName('Wolf3D_Head') as THREE.Mesh
  const mouthIndex = headMesh?.morphTargetDictionary?.mouthOpen
  const eyeIndex = headMesh?.morphTargetDictionary?.eyesClosed

  if (isSpeaking && mouthTime > 0.4) {
    mouthOpen = !mouthOpen
    mouthTime = 0
  }

  if (mouthIndex !== undefined) {
    headMesh.morphTargetInfluences![mouthIndex] = isSpeaking && mouthOpen ? 0.5 : 0
  }

  //Blinkar slumpmässigt
  if (eyeIndex !== undefined && Math.random() < delta * 0.25) {
    headMesh.morphTargetInfluences![eyeIndex] = 1
    setTimeout(() => {
      if (headMesh.morphTargetInfluences) {
        headMesh.morphTargetInfluences[eyeIndex] = 0
      }
    }, 100 + Math.random() * 100)
  }


    //Slumpmässig blinkning
    if (eyeIndex !== undefined && Math.random() < delta * 0.25) {
      headMesh.morphTargetInfluences![eyeIndex] = 1
      setTimeout(() => {
        if (headMesh.morphTargetInfluences) {
          headMesh.morphTargetInfluences[eyeIndex] = 0
        }
      }, 100 + Math.random() * 100)
    }
  })

  return (
    <primitive object={scene} ref={avatarRef} scale={0.7} position={[0, -0.3, 0]}>
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
