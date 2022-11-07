import React from 'react'
import { cleanup, screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from '../test-helpers'
import { Header } from './Header'

afterEach(cleanup);

describe(Header.name, () => {
	it('should render market logo', () => {
		renderWithProviders(<Header />);
		const image = screen.getByAltText("market-logo");
		expect(image).toHaveAttribute('src', './Logo.png');
	})

	it("should render cart info", () => {
		renderWithProviders(<Header />);
		const cartSummary = screen.getByTestId("cart-summary");
		const price = screen.getByTestId("price");
		const cartIcon = screen.getByAltText("cart-icon");
		
		expect(cartSummary).toContainElement(price)
		expect(cartSummary).toContainElement(cartIcon);
	});

	test("cart modal opens when mouse enters cart summary, and closes when leaves it", () => {
		renderWithProviders(<Header />);
		const cartSummary = screen.getByTestId("cart-summary");

		fireEvent.mouseEnter(cartSummary);
		const cartModal = screen.getByTestId("cart-modal");
		expect(cartModal).toBeInTheDocument();

		fireEvent.mouseLeave(cartSummary, {});
		expect(cartModal).not.toBeInTheDocument();
	});
})