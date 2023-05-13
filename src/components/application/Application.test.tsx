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

		const paragraphElement = screen.getByText("All fields are mandatory");
		expect(paragraphElement).toBeInTheDocument();

		const paragraphElementString = screen.getByText("All fields", {exact: false});
		expect(paragraphElementString).toBeInTheDocument();

		const paragraphElementCase = screen.getByText("all fields", {exact: false});
		expect(paragraphElementCase).toBeInTheDocument();

		const paragraphElementRegex = screen.getByText(/all fields/i);
		expect(paragraphElementRegex).toBeInTheDocument();

		const paragraphElementFunction = screen.getByText((content)=> content.startsWith("All fields"));
		expect(paragraphElementFunction).toBeInTheDocument();

		const closeElement = screen.getByTitle("close");
		expect(closeElement).toBeInTheDocument();

		const imageElement = screen.getByAltText("a person with a laptop");
		expect(imageElement).toBeInTheDocument();

		const customElement = screen.getByTestId("custom-element");
		expect(customElement).toBeInTheDocument();

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

		const nameElement4 = screen.getByDisplayValue("Rainbow");
		expect(nameElement4).toBeInTheDocument();

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