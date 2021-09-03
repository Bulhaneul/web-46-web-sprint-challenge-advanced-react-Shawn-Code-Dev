import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />)
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const fName = screen.getByLabelText(/First Name:/i);
    userEvent.type(fName, "Someone");

    const lName = screen.getByLabelText(/Last Name:/i);
    userEvent.type(lName, "Somewhere");

    const address = screen.getByLabelText(/Address:/i);
    userEvent.type(address, "Over The Rainbow");

    const city = screen.getByLabelText(/City:/i);
    userEvent.type(city, "Way Up High");

    const state = screen.getByLabelText(/State:/i);
    userEvent.type(state, "HI");

    const zip = screen.getByLabelText(/Zip:/i);
    userEvent.type(zip, "12345");

    const button = screen.getByRole("button");
    userEvent.click(button);

    const success = screen.getByTestId("successMessage");
    
    expect(success).toBeInTheDocument();
    expect(success).toHaveTextContent('Someone Somewhere');
    expect(success).toHaveTextContent('Over The Rainbow');
    expect(success).toHaveTextContent('Way Up High, HI 12345');
});
