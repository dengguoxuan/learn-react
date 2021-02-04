import React, { useState } from 'react';

// State Hook
function Example() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>
				Click me
			</button>
		</div>
	)
}

export default Example;

// Effect Hook