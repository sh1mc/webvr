import React, {useEffect, useRef, useState} from "react"
import {Text, Box, useAspect, Sky, useFBX} from "@react-three/drei"
import {useFrame, useThree} from "@react-three/fiber"
import {Mesh, VideoTexture} from "three"
import * as THREE from "three"
import yaml from "js-yaml"
import fs from "fs"

interface SubtitleData {
	text: string,
	sec: number,
}

const subtitleData: SubtitleData[] = yaml.load(fs.readFileSync("../texts/text.yaml", "utf8")) as SubtitleData[]
const sortedSubtitleData = subtitleData.sort((a, b) => {
	if (a > b) {
		return 1
	} else {
		return -1
	}
})

const Subtitle: React.FC = () => {
	const ref = useRef({} as Mesh)
	useFrame(({clock}) => {
		const time = clock.getElapsedTime()
	})
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

export {Subtitle}
