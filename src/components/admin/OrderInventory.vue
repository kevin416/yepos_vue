<template>
    <mdb-container fluid>
        <section>
            <div class="card">
                <div class="card-body">
                    <h5 class="pt-3 mb-2 dark-grey-text font-weight-bold text-center"></h5>

                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Supplier</th>
                            <th>Total</th>
                            <th>Comment</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr v-bind:key="order.id" v-for="order in order_inventory">
                            <td>{{ order.order_date }}</td>
                            <td>{{ order.company }}</td>
                            <td>{{ order.total }}</td>
                            <td>{{ order.comment }}</td>
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
        name: "OrderInventory",
        components: {
            mdbContainer,
        },
        created() {
            axios.get('https://api.pandabuffet.co.uk/api/order_inventory')
                .then(res => this.order_inventory = res.data)

            // .catch(err => console.log(err))
        },
        data() {
            return {
                order_inventory: [],
            }

        },
    }
</script>

<style scoped>

</style>
