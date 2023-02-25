'use strict';


fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then(response => response.json())
    .then((json) => {
        let usdCourse = json[24].rate;


        const taxi = [];

        function taxiCounter (taxiValue, usd) {
            const taxiTotal = taxiValue.reduce((sum, current) => sum + current);

            const usdTotal = Math.round(taxiTotal / usd);

            const showMyTaxi = () => {
                alert(`Витрачено на таксі ${taxiTotal}грн. або ${usdTotal}доллара.`);
            };


            showMyTaxi();
        }

        taxiCounter(taxi, usdCourse);
    });

