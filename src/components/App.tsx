import { Content } from "./Content/Content";
import { Footer } from "./Footer";
import { Header } from "./Header/Header";

function App() {
	return (
		<div className="bg-grey-light-4">
			<Header />
			<Content />
			<Footer />
		</div>
	);
}

export default App;
