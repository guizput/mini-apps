const Results = ({ score, count, reset }) => {
	return (
		<>
			<div className="pb-10">
				<h2 className="text-center text-4xl font-bold text-indigo-950">
					Results
				</h2>
				<p className="mt-8 text-center text-4xl">
					<span
						className={`${
							score >= 5 ? `text-emerald-600` : `text-red-600`
						} font-bold`}
					>
						{score}
					</span>
					/{count}
				</p>
				<div className="mt-8 flex items-center justify-center">
					<button
						className="flex items-center justify-between rounded-lg border-2 border-gray-300 p-4 text-gray-600 hover:bg-gray-100"
						onClick={() => reset()}
					>
						Try again
					</button>
				</div>
			</div>
		</>
	);
};

export default Results;
