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
                            <th>Total</th>
                            <th>User</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-bind:key="record.id" v-for="record in table_record">
                            <td>{{ record.checkout_time }}</td>
                            <td>{{ record.table_number }}</td>
                            <td :class="{ by_credit: record.payment_method =='Credit' }">{{ record.total }}</td>
                            <td>{{ record.username }}</td>
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
        name: "TableRecord",
        components: {
            mdbContainer,
        },
        created() {
            axios.get('https://api.pandabuffet.co.uk/api/today/table_record')
                .then(res => this.table_record = res.data)
            // .catch(err => console.log(err))
        },
        data() {
            return {
                table_record: [],
                styleObject: {
                    color: 'red',
                    fontSize: '13px'
                }
            }


        },
    }
</script>

<style scoped>
    .by_credit{
        color: red;
    }

</style>
