'use strict';

        let usdCourse = 36.57;

        let taxi = [3657];

        function taxiCounter (taxiValue, usd) {
            const taxiTotal = taxiValue.reduce((sum, current) => sum + current);

            const usdTotal = taxiTotal / usd;

            const showMyTaxi = () => {
                alert(`Витрачено на таксі ${taxiTotal}грн. або ${usdTotal}доллара.`);
            };


            showMyTaxi();
        }

        taxiCounter(taxi, usdCourse);

