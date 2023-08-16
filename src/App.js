import React, { useState } from "react";

const App = () => {
	const [elements, setElements] = useState([]);

	const handleAddElement = (e) => {
		e.preventDefault();
		setElements((prevElements) => [...prevElements, e.target.value]);
	};

	const handleRemoveElement = (e) => {
		e.preventDefault();
		setElements((prevElements) =>
			prevElements.filter((element) => element !== e.target.textContent)
		);
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Search"
				onChange={handleAddElement}
			/>
			<button onClick={handleAddElement}>Submit search</button>
			<ul>
				{elements.map((element) => (
					<li key={element} onClick={handleRemoveElement}>
						{element}
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;