/*
- Greet-tdd should render the text hello and if a name is passed into the component
- It should render hello followed by the name
*/

import { render, screen } from "@testing-library/react";
import { GreetTdd } from "./GreetTdd";

describe('GreetTdd', ()=> {
	test('renders correctly', () => {
		render(<GreetTdd />)
		const textElement = screen.getByText(/Hello/); /*change string to regex to pass the change in the test*/
		expect(textElement).toBeInTheDocument();
	})

	describe('Nested', () => {
		test('renders with a name', () => {
			render(<GreetTdd name='Susan' />)
			const textElement= screen.getByText('Hello Susan');
			expect(textElement).toBeInTheDocument();
		})
	})
})

describe('Second describe method', () => {
		test('renders with the full name', () => {
			render(<GreetTdd name='Susan Joy' />)
			const textElement= screen.getByText('Hello Susan Joy');
			expect(textElement).toBeInTheDocument();
		})
	})