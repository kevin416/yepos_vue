<template>
    <mdb-container fluid>
        <section>
            <div class="card">
                <div class="card-body">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th>Time</th>
                            <th>Table</th>
                            <th>Code</th>
                            <th>Qty</th>
                            <th>Total</th>
                            <th>User</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr v-bind:key="log.id" v-for="log in edit_log">
                            <th>{{ log.edit_time }}</th>
                            <th>{{ log.table_number }}</th>
                            <th>{{ log.code }}</th>
                            <th>{{ log.qty }}</th>
                            <th>{{ log.total }}</th>
                            <th>{{ log.username }}</th>

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
        name: "EditLog",
        components: {
            mdbContainer,
        },
        created() {
            axios.get('http://127.0.0.1:8000/api/today/edit_log')
                .then(res => this.edit_log = res.data)
            // .catch(err => console.log(err))
        },
        data() {
            return {
                edit_log: [],
            }

        },
    }
</script>

<style scoped>

</style>