import { useState } from "react";
import Capitals from "./Capitals";
import Flags from "./Flags";
import AdventurePic from "./icons/AdventurePic";

const Quiz = () => {
	const [game, setGame] = useState("");

	return (
		<>
			{game === "capitals" && <Capitals />}
			{game === "flags" && <Flags />}
			{game !== "capitals" && game !== "flags" && (
				<div className="w-full">
					<h1 className="text-center text-4xl font-semibold text-white">
						Choose your game
					</h1>
					<div className="mt-8 flex w-full items-center justify-around p-4">
						<button
							className="rounded-lg border-2 border-white p-4 text-lg font-medium text-white hover:bg-white hover:text-indigo-950"
							onClick={() => setGame("capitals")}
						>
							Capitals
						</button>
						<button
							className="rounded-lg border-2 border-white p-4 text-lg font-medium text-white hover:bg-white hover:text-indigo-950"
							onClick={() => setGame("flags")}
						>
							Flags
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default Quiz;
