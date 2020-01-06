<template>
    <mdb-container fluid>
        <section>
            <div class="card">
                <div class="card-body">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th>Table</th>
                            <th>Time</th>
                            <th>Discount</th>
                            <th>Cash</th>
                            <th>Credit</th>
                            <th>Deposit</th>
                            <th>SC</th>
                            <th>Total</th>
                            <th>Total Pay</th>
                            <th>Payment</th>
                            <th>Country</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-bind:key="record.id" v-for="record in table_record">
                            <th>{{ record.table_number }}</th>
                            <th>{{ record.checkout_time }}</th>
                            <th>{{ parseInt(record.discount) + parseInt(record.manually_discount)  }}</th>
                            <th>{{ record.cash }}</th>
                            <th>{{ record.credit }}</th>
                            <th>{{ record.deposit }}</th>
                            <th>{{ record.service_charge }}</th>
                            <th>{{ record.total }}</th>
                            <th>{{ record.total_pay }}</th>
                            <th>{{ record.payment_method }}</th>
                            <th>{{ record.country }}</th>
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

    export default {
        name: "DBM",
        components: {
            mdbContainer,
        },
        created() {
            axios.get('http://127.0.0.1:8000/api/dbm')
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