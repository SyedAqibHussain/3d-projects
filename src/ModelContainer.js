import React, { useState, useRef, Suspense } from 'react';
import { OrbitControls, Stage, Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import DraggableChair from './draggableChair';
import PartSelector from './partSelector';
import ColorSelector from './colorSelector';

const ModelContainer = () => {
	const ref = useRef();
	const [allColors, setAllColors] = useState([
		'#4A90E2',
		'#525252',
		'#C22727',
		'#42AD87',
		'#C5BE26',
	]);
	const [allParts, setAllParts] = useState([
		'back',
		'base',
		'cushions',
		'legs',
		'supports',
	]);
	const [selectedPart, setSelectedPart] = useState(allParts[0]);
	const [legsColor, setLegsColor] = useState(allColors[0]);
	const [cushionsColor, setCushionsColor] = useState(allColors[0]);
	const [supportsColor, setSupportsColor] = useState(allColors[0]);
	const [backColor, setBackColor] = useState(allColors[0]);
	const [baseColor, setBaseColor] = useState(allColors[0]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [addColor, setAddColor] = useState('#000000');

	const handleColorChange = (selectedPart, color) => {
		switch (selectedPart) {
			case 'legs':
				setLegsColor(color);
				break;
			case 'cushions':
				setCushionsColor(color);
				break;
			case 'supports':
				setSupportsColor(color);
				break;
			case 'back':
				setBackColor(color);
				break;
			case 'base':
				setBaseColor(color);
				break;
			default:
				setBaseColor(color);
				break;
		}
	};

	const handleAddColor = (e) => {
		e.preventDefault();
		console.log('adding this color', addColor);

		// setAllColors
		setAllColors([...allColors, addColor]);
		setIsModalOpen(false);
	};

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	function Loader() {
		return <Html center>{/* <LoadingAnimation /> */}</Html>;
	}

	return (
		<div className='container'>
			<PartSelector
				allParts={allParts}
				selectedPart={selectedPart}
				setSelectedPart={setSelectedPart}
			/>
			<Canvas
				className='chair-canvas'
				shadows
				shadowMap
				dpr={[1, 2]}
				camera={{ fov: 50, position: [0, 3, 5] }}
				frameloop='demand'
				performance={{
					current: 1,
					min: 0.1,
					max: 1,
					debounce: 200,
				}}
			>
				<Suspense fallback={<Loader />}>
					<Stage
						controls={ref}
						preset='rembrandt'
						intensity={1}
						environment='city'
					>
						<DraggableChair
							legsColor={legsColor}
							cushionsColor={cushionsColor}
							supportsColor={supportsColor}
							backColor={backColor}
							baseColor={baseColor}
						/>
					</Stage>
				</Suspense>
				<OrbitControls
					ref={ref}
					autoRotate={true}
					minDistance='5'
					maxDistance='10'
					minPolarAngle={Math.PI / 3}
					maxPolarAngle={Math.PI / 2}
					enableDamping={true}
					dampingFactor='0.1'
					enablePan={false}
				/>
			</Canvas>
			<ColorSelector
				selectedPart={selectedPart}
				handleColorChange={handleColorChange}
				allColors={allColors}
				setAllColors={setAllColors}
				isModalOpen={isModalOpen}
				handleOpenModal={handleOpenModal}
				handleCloseModal={handleCloseModal}
				setAddColor={setAddColor}
				addColor={addColor}
				handleAddColor={handleAddColor}
			/>
		</div>
	);
};

export default ModelContainer;
