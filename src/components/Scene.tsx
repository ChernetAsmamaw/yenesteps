import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

export default function Scene(){
  const group = useRef<THREE.Group>(null!)
  const globeRef = useRef<THREE.Mesh>(null!)
  
  useFrame((_state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.15
    }
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.1
    }
  })

  return (
    <group ref={group}>
      {/* Main globe */}
      <mesh ref={globeRef} position={[1.2, 0, 0]}>
        <sphereGeometry args={[1.6, 64, 64]} />
        <meshStandardMaterial color={'#22c55e'} metalness={0.2} roughness={0.6} />
      </mesh>

      {/* Land masses - stylized */}
      <mesh position={[1.2, 0, 1.1]} rotation={[0.6, 0, 0]}> 
        <torusGeometry args={[0.8, 0.02, 6, 100]} />
        <meshStandardMaterial color={'#214723'} />
      </mesh>

      {/* Orbiting rings for eco theme */}
      <mesh rotation={[0.7, 0.4, 0]}> 
        <torusGeometry args={[2.2, 0.04, 16, 200]} />
        <meshStandardMaterial color={'#bff5cf'} />
      </mesh>
      <mesh rotation={[0.2, 0.9, 0]}> 
        <torusGeometry args={[1.9, 0.04, 16, 200]} />
        <meshStandardMaterial color={'#10b981'} />
      </mesh>

      {/* Eco icon: leaf-like shape */}
      <mesh position={[-1.2, -0.6, -0.3]} scale={[0.7, 0.7, 0.7]}>
        <icosahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial color={'#22c55e'} />
      </mesh>

      {/* Floating particles */}
      <mesh position={[-0.5, 1.2, 0.8]} scale={[0.3, 0.3, 0.3]}>
        <sphereGeometry args={[0.2, 8, 8]} />
        <meshStandardMaterial color={'#bff5cf'} />
      </mesh>
      
      <mesh position={[0.8, -1.1, 1.2]} scale={[0.2, 0.2, 0.2]}>
        <sphereGeometry args={[0.2, 8, 8]} />
        <meshStandardMaterial color={'#eab308'} />
      </mesh>

      <OrbitControls enableZoom={false} autoRotate={false} enablePan={false} />
    </group>
  )
}
