import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Quote from "./pages/Quote";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/quote-generator" element={<Quote />}></Route>
					<Route path="*" element={<Home />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
