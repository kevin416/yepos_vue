<template>
    <mdb-container fluid>
        <section>
                    <div class="card">
                        <div class="card-body">
                            <search-by-date-period-form />
                            <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th>Date</th>

                                    <th>Cash</th>
                                    <th>Credit</th>
<!--                                    <th class="d-none d-sm-table-cell">Deposit</th>-->
<!--                                    <th class="d-none d-sm-table-cell">SC</th>-->
<!--                                    <th>Total</th>-->
                                    <th>Discount</th>

                                    <th>Total Pay</th>
<!--                                    <th>Payment</th>-->
<!--                                    <th>Country</th>-->
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-bind:key="record.id" v-for="record in table_record">
                                    <td>{{ record.order_date }}</td>

                                    <td>{{ record.cash }}</td>
                                    <td>{{ record.credit }}</td>
<!--                                    <th class="d-none d-sm-table-cell">{{ record.deposit }}</th>-->
<!--                                    <th class="d-none d-sm-table-cell">{{ record.service_charge }}</th>-->
<!--                                    <th>{{ record.total }}</th>-->
                                    <td>{{ parseInt(record.discount) + parseInt(record.mu_discount) }}</td>

                                    <td>{{ record.total_pay }}</td>
<!--                                    <th>{{ record.payment_method }}</th>-->
<!--                                    <th>{{ record.country }}</th>-->
                                </tr>
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
        name: "DBM",
        components: {
            mdbContainer,
            SearchByDatePeriodForm
        },
        created() {
            axios.get('https://api.pandabuffet.co.uk/api/dbm')
                .then(res => this.table_record = res.data)
            // .catch(err => console.log(err))
        },
        data() {
            return {
                table_record: [],
            }

        },
    }
</script>

<style scoped>

</style>
