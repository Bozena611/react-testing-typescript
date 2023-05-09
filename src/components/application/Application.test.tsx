import { Application } from "./Application";
import { render, screen } from "@testing-library/react";

describe("Application", () => {
	test("renders correctly", () => {
		render(<Application />);
		const nameElement = screen.getByRole("textbox");
		expect(nameElement).toBeInTheDocument();

		const jobLocationElement = screen.getByRole("combobox") /* combobox is used for select dropdown */
		expect(jobLocationElement).toBeInTheDocument();

		const termsConditionsElement = screen.getByRole("checkbox");
		expect(termsConditionsElement).toBeInTheDocument();

		const submitButtonElement = screen.getByRole("button");
		expect (submitButtonElement).toBeInTheDocument();
	});
});