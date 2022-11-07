// This type interface extends the default options for render from RTL, as well

import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import { render, RenderOptions } from "@testing-library/react";
import { PropsWithChildren, } from "react";
import { AppStore, rootReducer, RootState, setupStore } from "../../redux/test-store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
	preloadedState?: PreloadedState<RootState>;
	store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = { },
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
	  return (
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<>{children}</>} />
					</Routes>
				</BrowserRouter>
			</Provider>
		);
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

