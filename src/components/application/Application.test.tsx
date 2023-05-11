import { Application } from "./Application";
import { render, screen } from "@testing-library/react";

describe("Application", () => {
	test("renders correctly", () => {
		render(<Application />);

		const pageHeading = screen.getByRole("heading", {
			level: 1,
		});
		expect(pageHeading).toBeInTheDocument();

		const sectionHeading = screen.getByRole("heading", {
			level: 2,
		});
		expect(sectionHeading).toBeInTheDocument();

		const nameElement = screen.getByRole("textbox", {
			name: "Name",
		});
		expect(nameElement).toBeInTheDocument();

		const nameElement2 = screen.getByLabelText("Name", {
			selector: "input",
		});
		expect(nameElement2).toBeInTheDocument();

		const nameElement3 = screen.getByPlaceholderText("Fullname");
		expect(nameElement3).toBeInTheDocument();

		const bioElement = screen.getByRole("textbox", {
			name: "Bio",
		})
		expect(bioElement).toBeInTheDocument();

		const jobLocationElement = screen.getByRole("combobox") /* combobox is used for select dropdown */
		expect(jobLocationElement).toBeInTheDocument();

		const termsConditionsElement = screen.getByRole("checkbox");
		expect(termsConditionsElement).toBeInTheDocument();

		const termsConditionsElement2 = screen.getByLabelText(
			"I agree to the terms and conditions"
			);
		expect(termsConditionsElement2).toBeInTheDocument();

		const submitButtonElement = screen.getByRole("button");
		expect (submitButtonElement).toBeInTheDocument();
	});
});