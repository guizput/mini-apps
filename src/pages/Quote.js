import { useEffect, useState } from "react";

const Quote = () => {
	const [random, setRandom] = useState({});
	const [author, setAuthor] = useState([]);
	useEffect(() => {
		getRandomQuote();
	}, []);

	const getRandomQuote = async () => {
		try {
			const response = await fetch(
				"https://quote-garden.onrender.com/api/v3/quotes/random"
			);
			const data = await response.json();
			setRandom(data.data[0]);
			setAuthor({});
		} catch (error) {
			console.log(error);
			return;
		}
	};
	const getAuthorQuotes = async (author) => {
		try {
			const response = await fetch(
				`https://quote-garden.onrender.com/api/v3/quotes?author=${author}`
			);
			const data = await response.json();
			setAuthor(data.data);
		} catch (error) {
			console.log(error);
			return;
		}
	};
	return (
		<>
			<div>
				<button onClick={() => getRandomQuote()}>random</button>
			</div>
			{random.quoteAuthor && !author.length && (
				<div>
					<blockquote>{random.quoteText}</blockquote>
					<div onClick={() => getAuthorQuotes(random.quoteAuthor)}>
						<h1>{random.quoteAuthor}</h1>
						<small>{random.quoteGenre}</small>
					</div>
				</div>
			)}
			{author.length && (
				<div>
					<h1>{random.quoteAuthor}</h1>
					{author.map((item, index) => (
						<div key={index}>
							<blockquote>{item.quoteText}</blockquote>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default Quote;
