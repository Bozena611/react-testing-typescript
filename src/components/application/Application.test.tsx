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

		const bioElement = screen.getByRole("textbox", {
			name: "Bio",
		})
		expect(bioElement).toBeInTheDocument();

		const jobLocationElement = screen.getByRole("combobox") /* combobox is used for select dropdown */
		expect(jobLocationElement).toBeInTheDocument();

		const termsConditionsElement = screen.getByRole("checkbox");
		expect(termsConditionsElement).toBeInTheDocument();

		const submitButtonElement = screen.getByRole("button");
		expect (submitButtonElement).toBeInTheDocument();
	});
});