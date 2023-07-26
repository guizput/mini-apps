import { useEffect, useState } from "react";
import IconSuccess from "../icons/IconSuccess";
import IconError from "../icons/IconError";
import IconNext from "../icons/IconNext";
import Results from "../Results";

const Question = ({ countries }) => {
	const [answers, setAnswers] = useState([]);
	const [checked, setChecked] = useState(false);
	const [clicked, setClicked] = useState(0);
	const [count, setCount] = useState(0);
	const [score, setScore] = useState(0);
	const [random, setRandom] = useState(Math.floor(Math.random() * 250));

	useEffect(() => {
		getAnswers();
	}, [random]);

	const getAnswers = () => {
		let res = [countries[random].name.common];
		let numbers = [];
		let c = 0;
		while (c < 3) {
			const num = Math.floor(Math.random() * 250);
			if (numbers.indexOf(num) === -1) {
				numbers.push(num);
				res.push(countries[num].name.common);
				c++;
			}
		}
		const shuffled = res.sort(() => 0.5 - Math.random());
		setAnswers(shuffled);
	};

	const indexToLetter = (index) => {
		if (index === 0) return "A";
		if (index === 1) return "B";
		if (index === 2) return "C";
		if (index === 3) return "D";
		return;
	};

	const handleClick = (e, index, item) => {
		if (checked) return;
		setClicked(index);
		setChecked(true);
		if (item === countries[random].name.common) setScore(score + 1);
	};

	const nextQuestion = () => {
		setChecked(false);
		setCount(count + 1);
		setRandom(Math.floor(Math.random() * 250));
	};

	const reset = () => {
		setChecked(false);
		setCount(0);
		setScore(0);
		setRandom(Math.floor(Math.random() * 250));
	};

	return (
		<>
			{count < 10 && (
				<div>
					<h2 className="text-xl font-semibold text-indigo-950">
						<i>{countries[random].capital}</i> is the capital of
					</h2>
					<div className="mt-8">
						<ul>
							{answers.map((item, index) => (
								<li
									className={`${
										!checked
											? `normal`
											: item === countries[random].name.common
											? `success`
											: clicked === index
											? `error`
											: `blocked`
									} mt-4 flex items-center justify-between rounded-lg border-2`}
									key={index}
									onClick={(e) => handleClick(e, index, item)}
								>
									<div className="lex items-center justify-start">
										<span className="mr-8 font-medium">
											{indexToLetter(index)}
										</span>
										<span>{item}</span>
									</div>
									{checked && item === countries[random].name.common && (
										<IconSuccess />
									)}
									{checked &&
										item !== countries[random].name.common &&
										clicked === index && <IconError />}
								</li>
							))}
						</ul>
						<div className="relative mt-8 h-14">
							{checked && (
								<div className="absolute right-0 top-0 flex items-center justify-end">
									<button
										className="flex items-center justify-between rounded-lg border-2 border-gray-300 p-4 text-gray-600 hover:bg-gray-100"
										onClick={() => nextQuestion()}
									>
										<span className="mr-2">
											{(count < 9 && "Next") || "Results"}
										</span>{" "}
										<IconNext />
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			)}
			{count >= 10 && <Results score={score} reset={reset} count={count} />}
		</>
	);
};

export default Question;
