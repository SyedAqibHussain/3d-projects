const PartSelector = ({ allParts, selectedPart, setSelectedPart }) => (
	<div className='part-selector'>
		{allParts?.map((item, index) => (
			<div onClick={() => setSelectedPart(item)} key={index}>
				<img
					src={require(`./images/parts/${item}.svg`).default}
					alt={`chair-${item}`}
					className={
						selectedPart === item
							? 'chair-part-image selected'
							: 'chair-part-image'
					}
				/>
			</div>
		))}
	</div>
);

export default PartSelector;
