<template>
    <mdb-container fluid>
        <section>
            <div class="card">
                <div class="card-body">
                    <search-input-form />
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
                            <td>{{ pa.first_name + ' ' + pa.last_name }}</td>
                            <td>{{ pa.nick_name }}</td>
                            <td>{{ pa.pos }}</td>
                            <td>{{ pa.hrs }}</td>
                            <td>{{ pa.paye_salary }}</td>
                            <td>{{ pa.cross }}</td>
                            <td>{{ pa.tax_pay }}</td>
                            <td>{{ pa.ni_pay }}</td>
                            <td>{{ pa.pension }}</td>
                            <td>{{ pa.net_pay }}</td>
                            <td>{{ pa.note }}</td>
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
    import {mdbContainer} from 'mdbvue';
    import SearchInputForm from "./part/SearchInputForm";

    export default {
        name: "Paye",
        components: {
            mdbContainer,
            SearchInputForm
        },
        created() {
            axios.get('https://api.pandabuffet.co.uk/api/paye')
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
