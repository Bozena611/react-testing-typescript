/*
- Greet-tdd should render the text hello and if a name is passed into the component
- It should render hello followed by the name
*/

import { render, screen } from "@testing-library/react";
import { GreetTdd } from "./GreetTdd";

test('GreetTdd renders correctly', () => {
	render(<GreetTdd />)
	const textElement = screen.getByText('Hello');
	expect(textElement).toBeInTheDocument();
})

test('GreetTdd renders with a name', () => {
	render(<GreetTdd name='Susan' />)
	const textElement= screen.getByText('Hello Susan');
	expect(textElement).toBeInTheDocument();
})