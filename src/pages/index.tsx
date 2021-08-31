import React from 'react'
import Layout from '../components/layout'
import {VRCanvas, DefaultXRControllers, Hands} from '@react-three/xr'
import styled from 'styled-components'
import {Scene, RotatingText, VideoObject} from '../contents/scene'
import {Sky, Stars, Text} from '@react-three/drei'

const Home: React.FC = () => {
	return (
		<Layout>
			<VRCanvasWrapper>
				<VRCanvas>
					<VideoObject />
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
