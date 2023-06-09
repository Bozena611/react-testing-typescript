import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("Counter", () => {
	test("renders correctly", () => {
		render(<Counter />)
		const countElement = screen.getByRole("heading");
		expect(countElement).toBeInTheDocument();

		const incrementButton = screen.getByRole("button", {
			name: "Increment"
		});
		expect(incrementButton).toBeInTheDocument();
	});

	// test the initial state of the component

	test("render a count of 0", () => {
		render(<Counter />)
		const countElement = screen.getByRole("heading");
		expect(countElement).toHaveTextContent("0");
	});

	// test user interactions

	test("renders a count of 1 after clicking the increment button", async () => {
		user.setup()
		render(<Counter />)
		const incrementButton = screen.getByRole("button", {
			name: "Increment"
		});
		await user.click(incrementButton);
		const countElement = screen.getByRole("heading");
		expect(countElement).toHaveTextContent("1");
	});

	// test that number increments to 2 after 2 clicks

		// example 1
	test("renders a count of 2 after clicking the increment button twice", async () => {
		user.setup()
		render(<Counter />)
		const incrementButton = screen.getByRole("button", {
			name: "Increment"
		});
		await user.click(incrementButton);
		await user.click(incrementButton);
		const countElement = screen.getByRole("heading");
		expect(countElement).toHaveTextContent("2");
	});

		// example 2
		test("renders a count of 2 after using dblClick to click twice", async () => {
		user.setup();
		render(<Counter />);
		const incrementButton = screen.getByRole("button", {
			name: "Increment"
		});
		await user.dblClick(incrementButton);
		const countElement = screen.getByRole("heading");
		expect(countElement).toHaveTextContent("2");
	});

		// example 3
		test("renders a count of 2 after using loop to click twice", async () => {
		user.setup();
		render(<Counter />);
		const incrementButton = screen.getByRole("button", {
			name: "Increment"
		});
		for (let i=0; i<2; i++) {
      await user.click(incrementButton);
    }
		const countElement = screen.getByRole("heading");
		expect(countElement).toHaveTextContent("2");
	});

		// test keyboard interactions (without async/await the test fails)

	test("renders a count of 10 after clicking the set button", async () => {
		user.setup();
		render (<Counter />);
		const amountInput = screen.getByRole("spinbutton");
		await user.type(amountInput, '10')
		expect(amountInput).toHaveValue(10);

		//test clicking the Set button
		const setButton = screen.getByRole('button', {
			name: 'Set'
		})
		await user.click(setButton)
		const countElement = screen.getByRole('heading');
		expect(countElement).toHaveTextContent('10');
	})

	// test if the focus order is correct

	test('elements are focused in the correct order', async () => {
		user.setup();
		render(<Counter />);
		const amountInput = screen.getByRole("spinbutton");
		const setButton = screen.getByRole("button", { name: "Set" });
		const incrementButton = screen.getByRole("button", { name: "Increment" });
		await user.tab()
		expect(incrementButton).toHaveFocus();
		await user.tab()
		expect(amountInput).toHaveFocus();
		await user.tab()
		expect(setButton).toHaveFocus();
	})
});