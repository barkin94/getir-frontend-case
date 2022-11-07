import React from "react";
import { cleanup, screen, fireEvent, render } from "@testing-library/react";
import { Price } from "./Price";

afterEach(cleanup);

describe(Price.name, () => {
	it('should display price with icon', () => {
		render(<Price currencyIcon="TRY" value={15.99} />)
		const tryPriceElement = screen.getByText('₺ 15.99')
		expect(tryPriceElement).toBeInTheDocument();
		
		cleanup()

		render(<Price currencyIcon="USD" value={15.99} />);
		const usdPriceElement = screen.getByText("$ 15.99");
		expect(usdPriceElement).toBeInTheDocument();
	})

	it('should be custumizable with css', () => {
		const className = "bg-blue-light h-10";
		render(
			<Price currencyIcon="TRY" value={15.99} className={className} />
		);
		expect(screen.getByTestId("price").className).toEqual(className)
	})
})
