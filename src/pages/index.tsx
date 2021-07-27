import Layout from '../components/layout'
import { VRCanvas, DefaultXRControllers } from '@react-three/xr'
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

const Home = () => {
	return (
		<Layout>
			<Canvas camera={{ position: [0, 0, 1000] }}>
				<ambientLight intensity={0.5} />
				<spotLight
					intensity={0.6}
					position={[30, 30, 50]}
					angle={0.2}
					penumbra={1}
					castShadow
				/>
				<Thing />
			</Canvas>
			<VRCanvas>
				<DefaultXRControllers />
			</VRCanvas>
		</Layout>
	)
}

export default Home

const Thing = () => {
	const ref = useRef({} as Mesh)
	useFrame(({ clock }) => {
		const T = 2.0
		const sec = clock.getElapsedTime() % T
		const fixedSec = sec / T
		const theta = Math.pow(fixedSec, 0.6) * Math.PI * 2
		const delta = Math.pow((fixedSec + 0.5) % 1.0, 0.6) * Math.PI * 2
		ref.current.rotation.y = theta
		ref.current.rotation.x = -delta
	})
	return (
		<mesh
			ref={ref}
			onClick={(e) => console.log('click')}
			onPointerOver={(e) => console.log('hover')}
			onPointerOut={(e) => console.log('unhover')}
		>
			<boxGeometry attach='geometry' args={[600, 600, 600]} />
			<meshNormalMaterial attach='material' />
		</mesh>
	)
}

