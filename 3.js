const data = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

// get the length of the line in the (assumed rectangular) string
const getLineLength = (str) => {
    let x = 0;
    while (str[x] != '\n') {
        x++
    }
    return x;
}

// get number of lines in str
const getLineNumber = (str) => {
    return str.match(/\n/g).length + 1;
}

// convert the string data to a mxn matrix
const stringToMatika = (str) => {
    const lineLength = getLineLength(str);
    const lineNumber = getLineNumber(str);
    const matika = [];
    for (let y = 0; y < lineNumber; y++) {
        // NOTE: +y extra because we haven't removed the \n chars
        let line = str.substr(y * lineLength + y, lineLength);
        let arr = [];
        for (let x = 0; x < lineLength; x++) {
            arr.push(line[x]);
        }
        matika.push(arr);
    }
    return matika;
};

// given a 2d array (matika), find the
// coordinates of the numbers within its lines,
// where the coordinate of a number is
// the leftmost character.
const getNumberCoords = (matika) => {
    coords = [];
    for (let y = 0; y < matika.length; y++) {
        for (let x = 0; x < matika[0].length; x++) {
            if (/[0-9]/.test(matika[y][x])) {
                coords.push([y, x]);
                while (/[0-9]/.test(matika[y][x]) && x < matika[0].length) {
                    x++;
                }
            }
        }
    }
    return coords;
};

// given number coords in the matika, construct objects
// describing the number found there (the number of chars
// and what the parsed int is).
const getNumberObjects = (matika, coords) => {
    const ns = [];
    for (let coord of coords) {
        let [y, x] = coord;
        let s = matika[y][x];
        x++;
        while (/[0-9]/.test(matika[y][x]) && x < matika[0].length) {
            s += matika[y][x];
            x++;
        }
        ns.push({
            len: x - coord[1],
            value: parseInt(s),
            y,
            x: coord[1],
        });
    }
    return ns;
}

// given the matika and a number object 'n', determine
// whether it's a part number (it is neighboured in some direction
// by a non-'.' char)
const isPartNumber = (matika, n) => {
    // TODO
    // walk along len paces starting at [y][x] and check neighbours.
    // if at any point we find a non-'.' char, then return true
};


const main = () => {
    const matika = stringToMatika(data);
    const coords = getNumberCoords(matika);
    const numberObjects = getNumberObjects(matika, coords);
    console.log(numberObjects);
    let sum = 0;
    for (let n of numberObjects) {
        if (isPartNumber(matika, n)) {
            sum += n.value;
        }
    }
    console.log(`the solution is ${sum}`);
};

main();