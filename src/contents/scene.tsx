import React, {useEffect, useRef, useState} from "react"
import {Text, Box, useAspect, Sky, useFBX} from "@react-three/drei"
import {useFrame, useThree} from "@react-three/fiber"
import {Mesh, VideoTexture} from "three"
import * as THREE from "three"

const Scene: React.FC = () => {
	return (
		<Thing />
	)
}

const Thing: React.FC = () => {
	const ref = useRef({} as Mesh)
	useFrame(({clock}) => {
		const T = 2.0
		const sec = clock.getElapsedTime() % T
		const fixedSec = sec / T
		const theta = Math.pow(fixedSec, 0.6) * Math.PI * 2
		const delta = Math.pow((fixedSec + 0.5) % 1.0, 0.6) * Math.PI * 2
		ref.current.rotation.y = theta
		ref.current.rotation.x = -delta
	})
	return (
		<Box ref={ref} scale={[1, 1, 1]} args={[1, 1, 1]} position={[0, 0, -3]}>
			<meshStandardMaterial attach="material" color="white" />
		</Box>
	)
}

const RotatingText: React.FC = () => {
	const ref = useRef({} as Mesh)
	useFrame(({clock}) => {
		const T = 2.0
		const sec = clock.getElapsedTime() % T
		const fixedSec = sec / T
		const theta = fixedSec * Math.PI * 2
		ref.current.position.x = -5 * Math.sin(theta)
	})
	return (
		<Text
			ref={ref}
			color={'#444444'}
			fontSize={12}
			maxWidth={150}
			lineHeight={1}
			letterSpacing={0.02}
			textAlign={'left'}
			font="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap"
			anchorX="center"
			anchorY="middle"
			position={[0, 0, -50]}
		>
			Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
		</Text>
	)
}

const VideoObject: React.FC = () => {
	const [video] = useState(() => {
		const vid = document.createElement("video")
		vid.src = "/a.mp4"
		vid.crossOrigin = "Anonymous"
		vid.loop = true
		return vid
	})
	const play = (() => {
		video.play();
	})
	useEffect(() => {
		document.addEventListener("mousedown", play, {once: true})
	}, [])
	return (
		<mesh scale={[10, 10, 10]} position={[0, 0, 0]}>
			<boxBufferGeometry />
			<meshBasicMaterial side={THREE.DoubleSide}>
				<videoTexture attach="map" args={[video]} />
			</meshBasicMaterial>
		</mesh>
	)
}

export {Scene, RotatingText, VideoObject}
