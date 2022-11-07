import { Route, Routes } from "react-router-dom";
import { Content } from "./Content/Content";
import { Footer } from "./Footer";
import { Header } from "./Header/Header";

function App() {
	return (
		<div className="bg-grey-light-4 flex flex-col min-h-screen">
			<Header />
			<section className="flex-grow">
				<Content />
			</section>
			<Footer />
		</div>
	);
}

export default App;
