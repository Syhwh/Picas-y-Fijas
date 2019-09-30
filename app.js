//Generate random Number
const generateNumber = () => {
    var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array.slice(0, 4).join("");
}

//Check the number for cows and bulls
const checkNumber = (number, test) => {
    let cows = 0; //picas
    let bulls = 0; //fijas

    for (let i = 0; i < 4; i++) {
        if (number[i] == test[i]) {
            bulls++;
        } else {
            cows += number.indexOf(test[i]) > -1 ? 1 : 0;
        }
    }
    return [cows, bulls];
}

const validate = (num) => {
    if (num.length == 4) {
        const valideNumber = Array.from(new Set(num.split('').map(Number)))
        return valideNumber.length === 4;
    }
}


const start = () => {
    number = generateNumber();
    console.log(number);
    $("input").val("");
    $(".results").html("<tr><th>Número</th><th>Picas</th><th>Fijas</th></tr >");
}

var number = 0;
$(document).ready(start());


$("input").on('keypress', function (e) {
    if (e.which == 13) {
        var test = $(this).val();
        if (validate(test)) {
            var [picas, fijas] = checkNumber(number, test);
            $(".results").append('<tr><td>' + test + '</td><td>' + picas + '</td><td>' + fijas + '</td></tr>')
            $(this).val("");
            if (fijas == 4) {
                alert("Felicidades! Ganaste!! El número era " + number);
                start();
            }
        } else {
            alert('El número no es válido, recuerda que deben ser cuatro dígitos del 0 al 9 sin repetirse');
            $("input").val("");
        }
    }
});