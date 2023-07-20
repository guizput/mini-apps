import { useEffect, useState } from "react";
import Loading from "./quote/Loading";
import RandomIcon from "./quote/RandomIcon";
import ArrowIcon from "./quote/ArrowIcon";

const Quote = () => {
	const [random, setRandom] = useState({});
	const [author, setAuthor] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		getRandomQuote();
	}, []);

	const getRandomQuote = async () => {
		setLoading(true);
		try {
			const response = await fetch(
				"https://quote-garden.onrender.com/api/v3/quotes/random"
			);
			const data = await response.json();
			setLoading(false);
			setRandom(data.data[0]);
			setAuthor({});
		} catch (error) {
			console.log(error);
			return;
		}
	};
	const getAuthorQuotes = async (author) => {
		setLoading(true);
		try {
			const response = await fetch(
				`https://quote-garden.onrender.com/api/v3/quotes?author=${author}`
			);
			const data = await response.json();
			setLoading(false);
			setAuthor(data.data);
		} catch (error) {
			console.log(error);
			return;
		}
	};
	return (
		<div className="flex h-full items-center justify-center p-4">
			{loading && <Loading />}
			<button
				className="absolute right-4 top-4 z-10 flex items-center justify-between rounded-md bg-gray-100 p-2 hover:bg-gray-200"
				onClick={() => getRandomQuote()}
			>
				random <RandomIcon />
			</button>
			{!loading && random.quoteAuthor && !author.length && (
				<div className="max-w-md">
					<blockquote className="border-l-4 border-amber-300 pl-12 text-lg">
						"{random.quoteText}"
					</blockquote>
					<div
						className="group ml-12 mt-12 flex cursor-pointer items-center justify-between p-4 hover:bg-gray-900"
						onClick={() => getAuthorQuotes(random.quoteAuthor)}
					>
						<div>
							<h1 className="text-gray-700 group-hover:text-white">
								{random.quoteAuthor}
							</h1>
							<small className="text-sm text-gray-500 group-hover:text-white">
								{random.quoteGenre}
							</small>
						</div>
						<ArrowIcon className="hidden group-hover:visible" />
					</div>
				</div>
			)}
			{!loading && author.length && (
				<div className="absolute left-1/2 top-0 w-full max-w-lg -translate-x-1/2 px-4 py-12">
					<h1 className="mb-20 ml-12 text-xl font-medium">
						{random.quoteAuthor}
					</h1>
					{author.map((item, index) => (
						<div key={index}>
							<blockquote className="mb-20 border-l-4 border-amber-300 pl-12 text-lg">
								"{item.quoteText}"
							</blockquote>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Quote;
