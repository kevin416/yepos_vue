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
                            <td>{{ log.edit_time }}</td>
                            <td>{{ log.table_number }}</td>
                            <td>{{ log.code }}</td>
                            <td>{{ log.qty }}</td>
                            <td>{{ log.total }}</td>
                            <td>{{ log.username }}</td>

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
            axios.get('https://api.pandabuffet.co.uk/api/today/edit_log')
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
