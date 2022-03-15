// YOU CAN ONLY USE HOOKS INSIDE OF FUNCTION COMPONENTS; CANNOT USE THEM IN CLASS COMPONENTS. WHEN YOU UPDATE THE STATE, THE COMPONENT RE-RENDERS.
import React, { useState } from 'react';

function App() {
	// useState TAKES TWO VALUES: A DEFAULT STATE AND THE UPDATE/SET FUNCTION. count IS THE DEFAULT STATE; setCount IS A FUNCTION THAT UPDATES THE STATE.
	const [count, setCount] = useState(0);

	function decrementCount() {
		// THERE IS A SECOND VERSION OF THE SET FUNCTION WHICH ALLOWS YOU TO PASS IN A FUNCTION THAT TAKES IN THE PREVIOUS STATE VALUE; IN THIS CASE, THE PREVIOUS COUNT.
		setCount((prevCount) => prevCount - 1);
	}

	function incrementCount() {
		// THERE IS A SECOND VERSION OF THE SET FUNCTION WHICH ALLOWS YOU TO PASS IN A FUNCTION THAT TAKES IN THE PREVIOUS STATE VALUE; IN THIS CASE, THE PREVIOUS COUNT.
		setCount((prevCount) => prevCount + 1);
	}

	return (
		<>
			<button onClick={decrementCount}>-</button>
			<span>{count}</span>
			<button onClick={incrementCount}>+</button>
		</>
	);
}

export default App;
