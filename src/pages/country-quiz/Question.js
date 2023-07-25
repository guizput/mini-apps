import { useEffect, useState } from "react";
import IconSuccess from "./IconSuccess";
import IconError from "./IconError";

const Question = ({ countries, count, setCount, random, setRandom }) => {
	const [answers, setAnswers] = useState([]);
	const [checked, setChecked] = useState(false);
	const [clicked, setClicked] = useState(0);

	useEffect(() => {
		getAnswers();
	}, []);

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
	};

	return (
		<>
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
								<span className="mr-8 font-medium">{indexToLetter(index)}</span>
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
			</div>
		</>
	);
};

export default Question;
