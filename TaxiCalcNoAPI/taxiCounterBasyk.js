'use strict';

let usdCourse = 36.57;

const userImput = prompt('Введіть ціну за таксі черех ","', '');

const arr = userImput.split(', ');

const taxi = arr.map(str => {
    const num = parseInt(str);
    return isNaN(num) ? 0 :num;
});

function taxiCounter (taxiValue, usd) {
    const taxiTotal = taxiValue.reduce((sum, current) => sum + current);

    const usdTotal = taxiTotal / usd;

    const showMyTaxi = () => {
        alert(`Витрачено на таксі ${taxiTotal} грн. або ${usdTotal} доллара.`);
    };


    showMyTaxi();
}

taxiCounter(taxi, usdCourse);