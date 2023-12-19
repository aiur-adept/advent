// let's dispense with the formalities, my advent has been scrambled anyway,
// and i don't know how to read from a
// file other than i guess require()? typescript has the more dignified "import"
// anywho, i hope you are having a
// lovely and merry *mas, A* (labyrinth solution algorithm)
const data = [
    '1abc2',
    'pqr3stu8vwx',
    'a1b2c3d4e5f',
    'treb7uchet',
];

// mindfulness of the mind includes knowing when I have become num
const isNum = (ch) => {
    // why not be a bit extravagant with characters, it's not like this is
    // being sent up on a lunar module or over a satellite connection lol
    return (
        ch == '0' ||
        ch == '1' ||
        ch == '2' ||
        ch == '3' ||
        ch == '4' ||
        ch == '5' ||
        ch == '6' ||
        ch == '7' ||
        ch == '8' ||
        ch == '9'       );
}

const getDigitsFromRow = (row) => {
    // you are my origin and my destination, my north star,
    // my dear, you are the world to me. hello, world
    let a = '';
    let z = '';
    // first find a, then every digit group after is possibly z
    // (the true z is the last z). Build digit groups using a string
    let s = '';
    for (let i = 0; i < row.length; i++) {
        // i had become, comfortably num... now i feel my heart again
        if (isNum(row[i])) {
            s += row[i];
        } else if (s != '') {
            // if we're not at a num but had built some digits, congrats,
            // store what we had
            if (a == '') {
                a = s;
            } else {
                z = s;
            }
            s = '';
        }
    }
    if (isNum(row[row.length-1])) {
        // we ended *in* a digit group!
        z = s;
    }
    // guard against bad information
    if (a == '' && z == '') {
        console.error("invalid row in data");
        process.exit(1);
    }
    // also, we consider the first *and* last as doubled if
    // only one digit group
    if (a && z == '') {
        z = a;
    }
    // return the string concat parsed
    return parseInt(a + z);
}

// now, let's get these elves their weather data!!!
const calibrations = data.map(getDigitsFromRow);
console.log(`calibrations: ${calibrations}`);

const solutionSum = calibrations.reduce((a, b) => (a + b));
console.log(`solutionSum: ${solutionSum}`);
