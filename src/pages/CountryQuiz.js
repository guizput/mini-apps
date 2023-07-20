import Quiz from "./country-quiz/Quiz";
import bkg from "./country-quiz/static/background.png";

const CountryQuiz = () => {
	return (
		<div
			className="flex h-full w-full items-center justify-center bg-cover bg-center p-4"
			style={{ backgroundImage: `url(${bkg})` }}
		>
			<Quiz />
		</div>
	);
};

export default CountryQuiz;
