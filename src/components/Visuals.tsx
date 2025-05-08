import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

export default function Visuals() {
    const ref1 = useRef<THREE.Mesh>(null)
    const ref2 = useRef<THREE.Mesh>(null)
  
    useFrame((state, delta) => {
      if (ref1.current) ref1.current.rotation.y += delta * 0.1
      if (ref2.current) ref2.current.rotation.x += delta * 0.15
    })
  
    return (
      <>
        <mesh ref={ref1} position={[-2, 0, -3]}>
          <torusGeometry args={[1, 0.2, 16, 100]} />
          <meshStandardMaterial color="#d1d1d9" transparent opacity={0.3} />
        </mesh>
        <mesh ref={ref2} position={[0.5, -1, -2]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#c4c4c4" transparent opacity={0.3} />
        </mesh>
      </>
    )
  }

