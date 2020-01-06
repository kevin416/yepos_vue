<template>
    <mdb-container fluid>
        <section>
            <div class="card">
                <div class="card-body">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Employee</th>
                            <th>NickName</th>
                            <th>Position</th>
                            <th>Hours</th>
                            <th>Pay</th>
                            <th>Cross</th>
                            <th>TaxPay</th>
                            <th>NIPay</th>
                            <th>Pension</th>
                            <th>NetPay</th>
                            <th>Note</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-bind:key="pa.id" v-for="pa in paye">
                            <th>{{ pa.date }}</th>
                            <th>{{ pa.first_name + ' ' + pa.last_name }}</th>
                            <th>{{ pa.nick_name }}</th>
                            <th>{{ pa.pos }}</th>
                            <th>{{ pa.hrs }}</th>
                            <th>{{ pa.paye_salary }}</th>
                            <th>{{ pa.cross }}</th>
                            <th>{{ pa.tax_pay }}</th>
                            <th>{{ pa.ni_pay }}</th>
                            <th>{{ pa.pension }}</th>
                            <th>{{ pa.net_pay }}</th>
                            <th>{{ pa.note }}</th>
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
        name: "Paye",
        components: {
            mdbContainer,
        },
        created() {
            axios.get('http://127.0.0.1:8000/api/paye')
                .then(res => this.paye = res.data)
            // .catch(err => console.log(err))
        },
        data() {
            return {
                paye: [],
            }

        },
    }
</script>

<style scoped>

</style>