<template>
    <mdb-container fluid>
        <section class="my-3">

            <mdb-row>
                <!--Grid column-->
                <mdb-col xl="5" lg="12" class="mr-0">
                    <mdb-col md="6" lg="4" class="mb-4">
                        <mdb-card cascade narrow>
                            <mdb-view cascade class="gradient-card-header blue"><h5 class="mb-0">{{ cashout.income }}</h5>
                            </mdb-view>
                            <mdb-card-body>
                                <mdb-doughnut-chart :data="pieChartData" :options="pieChartOptions"
                                                    :height="300"></mdb-doughnut-chart>
                            </mdb-card-body>
                        </mdb-card>
                    </mdb-col>
                </mdb-col>
            </mdb-row>
            {{ cashout}}

        </section>

    </mdb-container>
</template>

<script>
    import axios from "axios";
    import {mdbContainer, mdbRow, mdbCard, mdbCardBody, mdbView, mdbDoughnutChart} from 'mdbvue'

    export default {
        name: "Cashout",
        components: {
            mdbContainer,
            mdbRow,
            mdbCard,
            mdbCardBody,
            mdbView,
            mdbDoughnutChart,

        },
        data() {
            return {
                cashout: [],
                pieChartData: {
                    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'],
                    datasets: [
                        {
                            data: [],
                            backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
                            hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774']
                        }
                    ]
                },
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
        created() {
            axios.get('https://mart.yepos.co.uk/api/cashout/today')
                .then(res => this.cashout = res.data)
                .then(() => {
                    this.pieChartData.datasets[0].data =[
                        this.cashout.income,this.cashout.cash,
                        this.cashout.credit,this.cashout.expense
                    ];
                    // console.log(this.pieChartData.datasets)
                })
            // .catch(err => console.log(err))
        },
        // created() {
        //     axios.get('https://mart.yepos.co.uk/api/cashout/today')
        //         .then(res => this.cashout = res.data)
        //         .then(this.pieChartData.labels =[])
        //     // .catch(err => console.log(err))
        // },
    }
</script>

<style scoped>

</style>