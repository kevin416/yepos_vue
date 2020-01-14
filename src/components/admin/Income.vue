<template>
    <mdb-container fluid>
        <mdb-card cascade narrow>
            <mdb-view cascade class="gradient-card-header blue">
                <h5 class="mb-0">
                    {{ cashout.date + ' ' + cashout.income }}
                </h5>
            </mdb-view>
            <mdb-card-body>
                <mdb-doughnut-chart :data="pieChartData" :options="pieChartOptions"
                                    :height="300"></mdb-doughnut-chart>
            </mdb-card-body>
        </mdb-card>
    </mdb-container>
</template>

<script>
    import axios from "axios";
    import {mdbContainer, mdbCard, mdbCardBody, mdbView, mdbDoughnutChart} from 'mdbvue'

    export default {
        name: "Income",
        components: {
            mdbContainer,

            mdbCard,
            mdbCardBody,
            mdbView,
            mdbDoughnutChart,

        },
        created() {
            axios.get('https://api.pandabuffet.co.uk/api/today/cashout')
                .then(res => this.cashout = res.data)
                .then(() => {
                    this.pieChartData = {
                        labels: ['Cash', 'Credit', 'Expense', 'Wage'],
                        datasets: [
                            {
                                data: [this.cashout.cash, this.cashout.credit, this.cashout.expense, this.cashout.wage],
                                backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
                                hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774']
                            }
                        ]
                    }
                })

            // .catch(err => console.log(err))
        },
        data() {
            return {
                cashout: [],
                pieChartData: [],
                pieChartOptions: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        labels: {
                            fontColor: 'black'
                        }
                    }
                }
            }

        },


    }
</script>

<style scoped>

</style>
