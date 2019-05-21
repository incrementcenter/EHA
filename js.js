let inputs = document.querySelectorAll('.inputs-container input');
console.log(inputs);
let array = [];
let empty = [];

function inputsname() {
    for (let i = 0; i < inputs.length; i++) {
        array.push(inputs[i].name)
    }
    return array
}

inputsname();

function inputsempty() {

    for (let j = 0; j < inputs.length; j++) {
        if (inputs[j].value === "") {
            empty.push(inputs[j].name);
        }
    }
    if (empty[0] === undefined) {
        return true
    }


    return empty
}

console.log(inputsempty());