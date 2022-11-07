import React from "react";
import { cleanup, screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./test-helpers";

afterEach(cleanup);

it("renders App", () => {
	renderWithProviders(<App />);
	expect(screen.getByTestId("header")).toBeInTheDocument();
	expect(screen.getByTestId("content")).toBeInTheDocument();
	expect(screen.getByTestId("footer")).toBeInTheDocument();
});
