<template>
    <mdb-container fluid>
        <section>
            <div class="card">
                <div class="card-body">
                    <search-by-date-period-form/>
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Cash</th>
                            <th>Card</th>
                            <th>Expense</th>
                            <th>Wage</th>
                            <th>Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-bind:key="week.id" v-for="week in cashout.cashout_week">
                            <th>{{ week.week_num + ' ' + week.year_num}}</th>
                            <th>{{ week.cash }}</th>
                            <th>{{ week.credit }}</th>
                            <th>{{ week.expense }}</th>
                            <th>{{ week.wage }}</th>
                            <th>{{ week.total }}</th>
                        </tr>
<!--                        <tr v-bind:key="cash.id" v-for="cash in cashout.cashout">-->
<!--                            <td>{{ cash.date }}</td>-->
<!--                            <td>{{ cash.cash }}</td>-->
<!--                            <td>{{ cash.credit }}</td>-->
<!--                            <td>{{ cash.expense }}</td>-->
<!--                            <td>{{ cash.wage }}</td>-->
<!--                            <td>{{ cash.total }}</td>-->
<!--                        </tr>-->
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    </mdb-container>
</template>

<script>
    import axios from "axios";
    import {mdbContainer} from 'mdbvue'
    import SearchByDatePeriodForm from "./part/SearchByDatePeriodForm";

    export default {
        name: "Cashout",
        components: {
            mdbContainer,
            SearchByDatePeriodForm
        },
        created() {
            axios.get('http://127.0.0.1:8000/api/cashout')
                .then(res => this.cashout = res.data)
            // .catch(err => console.log(err))
        },
        data() {
            return {
                cashout: [],
            }

        },
    }
</script>

<style scoped>

</style>
