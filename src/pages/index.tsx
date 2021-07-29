import React from 'react'
import Layout from '../components/layout'
import { VRCanvas, DefaultXRControllers, Hands } from '@react-three/xr'
import styled from 'styled-components'
import { Scene, RotatingText } from '../contents/scene'
import { Stars, Text } from '@react-three/drei'

const Home: React.FC = () => {
	return (
		<Layout>
			<VRCanvasWrapper>
				<VRCanvas>
					<ambientLight intensity={0.5} />
					<pointLight position={[5, 5, 5]} />
					<Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
					<Scene />
					<RotatingText />
					<Hands />
					<DefaultXRControllers />
				</VRCanvas>
			</VRCanvasWrapper>
		</Layout>
	)
}

export default Home

const VRCanvasWrapper = styled.div`
	background: black;
	height: 72vh;
	min-width: 100vh;
`

const CanvasWrapper = styled.div`
	background: black;
	height: 72vh;
	min-width: 100vh;
`
