import { render, screen } from '@testing-library/react';
import { Greet } from './Greet';

test('Greet renders correctly', () => {
	render(<Greet />)
	/* const textElement = screen.getByText('Hello')*/
	const textElement = screen.getByText(/hello/i) /*using regex instead of the string argument to ignore the letter case*/
	expect(textElement).toBeInTheDocument()
})