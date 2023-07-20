import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Quote from "./pages/Quote";
import Todo from "./pages/Todo";
import CountryQuiz from "./pages/CountryQuiz";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/quote-generator" element={<Quote />}></Route>
					<Route path="/todo-app" element={<Todo />}></Route>
					<Route path="/country-quiz" element={<CountryQuiz />}></Route>
					<Route path="*" element={<Home />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
