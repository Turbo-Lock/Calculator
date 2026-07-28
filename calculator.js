let values = document.getElementById("displayVal");
let answerDislay = document.getElementById("displayAns")
function showVal(num) {
    console.log(num);
    values.value += num;
}

function clearInp() {
    values.value = "";
}

function calculateVal(cal) {
    console.log(cal);
    
    if (cal.includes("*")) {
        let number = cal.split("*");
        console.log(number);
        let multiple = number[0] * number[1];
        console.log(multiple);
        
        values.value = multiple;
    }

    if (cal.includes("+")) {
        let number = cal.split("+");
        console.log(number);
        let add = Number(number[0]) + Number(number[1]);
        console.log(add);
        values.value = add;
    }
        if (cal.includes("-")) {
        let number = cal.split("-");
        console.log(number);
        let minus = Number(number[0]) - Number(number[1]);
        console.log(minus);
        values.value = minus;
    }
    if (cal.includes("/")) {
        let number = cal.split("/");
        console.log(number);
        let division = Number(number[0]) / Number(number[1]);
        console.log(division);
        values.value = division;
    }
}




