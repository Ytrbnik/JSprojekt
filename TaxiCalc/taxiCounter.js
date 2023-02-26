'use strict';

fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
.then(response => response.json())
.then(data => {
    let curses = data;

    console.log(curses);
    let usd = curses[24].rate;

    console.log(usd);
    const userImput = prompt('Введіть ціну за таксі черех ","', '');

    const arr = userImput.split(', ');

    const taxi = arr.map(str => {
        const num = parseInt(str);
        return isNaN(num) ? 0 :num;
    });

    function taxiCounter (taxiValue, usd) {
        const taxiTotal = taxiValue.reduce((sum, current) => sum + current);

        const usdTotal = Math.round(taxiTotal / usd);

        const showMyTaxi = () => {
            alert(`Витрачено на таксі ${taxiTotal} грн. або ${usdTotal} доллара.`);
        };


        showMyTaxi();
    }

    taxiCounter(taxi, usd);
});
