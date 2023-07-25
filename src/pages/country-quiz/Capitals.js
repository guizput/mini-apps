import { useEffect, useState } from "react";
import AdventurePic from "./AdventurePic";
import Loading from "./Loading";
import Question from "./Question";

const Capitals = () => {
	const [countries, setCountries] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		setLoading(true);
		try {
			const response = await fetch(
				"https://restcountries.com/v3.1/all?fields=name,capital"
			);
			const data = await response.json();
			setCountries(data);
			setLoading(false);
		} catch (error) {
			console.log(error);
			return;
		}
	};

	return (
		<>
			{loading && <Loading />}
			{!loading && (
				<div className="relative w-full max-w-md rounded-xl bg-white px-6 pb-4 pt-16">
					<div>
						<h1 className="absolute -top-12 left-0 text-2xl font-bold uppercase text-white">
							Country&nbsp;Quiz
						</h1>
						<AdventurePic />
						<Question countries={countries} />
					</div>
				</div>
			)}
		</>
	);
};

export default Capitals;
