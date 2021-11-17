import React from 'react';
import Modal from 'react-modal';
import addIcon from './images/add-icon.png';

const ColorSelector = ({
	handleColorChange,
	selectedPart,
	isModalOpen,
	handleOpenModal,
	handleCloseModal,
	allColors,
	addColor,
	setAddColor,
	handleAddColor,
}) => (
	<div className='colorpicker-container'>
		{allColors?.map((item, index) => (
			<div
				key={index}
				className='color-picker'
				onClick={() => handleColorChange(selectedPart, item)}
				style={{
					backgroundColor: item,
				}}
			/>
		))}

		<div className='color-picker add-icon-div' onClick={handleOpenModal}>
			<img src={addIcon} alt='add-icon' />
			{/* <p>+</p> */}
		</div>
		<Modal isOpen={isModalOpen} ariaHideApp={false}>
			<div className='modal-header-div'></div>
			<form className='modal-form-div' onSubmit={(e) => handleAddColor(e)}>
				<div className='form-header-div'>
					<div>
						<label>Click to select color:</label>
						<input
							type='color'
							value={addColor}
							onChange={(e) => setAddColor(e.target.value)}
						/>
					</div>
					<h4 onClick={handleCloseModal}>X</h4>
				</div>
				<button type='submit' className='form-submit-button'>
					Add color
				</button>
			</form>
		</Modal>
	</div>
);

export default ColorSelector;
