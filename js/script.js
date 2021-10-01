function changeItem() { document.getElementById('1').style.backgroundColor = 'blue'; }
function rechangeItem() { document.getElementById('1').style.backgroundColor = 'white'; }


function printNumbersInterval() {
    var i = 1;
    var timerId = setInterval(function () {
        document.getElementById('2').innerHTML = i;
        if (i === 4) document.getElementById('2').innerHTML = 'GO!';
        i++;

        if (document.getElementById('2').innerHTML == 'GO!') i = 1;

    }, 1000);

}
printNumbersInterval();






