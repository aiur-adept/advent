const parseRound = (str) => {
	let round = {};
	const pieces = str.split(',').map((s) => s.trim());
	for (piece of pieces) {
		const split = piece.split(' ');
		round[split[1]] = parseInt(split[0]);
	}
	return round;
}

const parseLine = (line) => {
	const [prefix, rest] = line.split(':');
	console.log(`prefix: ${prefix}`);
	console.log(`rest: ${rest}`);
	const gameNumber = parseInt(prefix.split(' ')[1]);
	const roundStrings = rest.split(';');
	let game = [];
	for (round of roundStrings) {
		game.push(parseRound(round));
	}
	return [gameNumber, game];
};

const isGamePossible = (limits, game) => {
	for (round of game) {
		for (color in round) {
			if (round[color] > limits[color]) {
				return false;
			}
		}
	}
	return true;
};

const data = [
	'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
	'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
	'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
	'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
	'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'
];

const limits = {
	'red': 12,
	'green': 13,
	'blue': 14,
};


const analyse = (data, limits) => {
	let sum = 0;
	for (line of data) {
		const [ gameNumber, game ] = parseLine(line);
		console.log(game);
		if (isGamePossible(limits, game)) {
			sum += gameNumber;
		}
	}
	return sum;
};

console.log(analyse(data, limits));

// boundaries are important. limits are important. life is infinitely beautiful. love transcends all.