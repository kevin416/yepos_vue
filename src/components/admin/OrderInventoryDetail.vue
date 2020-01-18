<template>
    <mdb-container fluid>
        <section>
            <div class="card">
                <div class="card-body">
                    <router-link to="/order_inventory"><mdb-btn>Back</mdb-btn></router-link>
                    <h5 class="pt-3 mb-2 dark-grey-text font-weight-bold text-center">{{ order_inventory.order.company + ' ' + order_inventory.order.order_date}}</h5>
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-bind:key="order.id" v-for="order in order_inventory.orders">
                            <td></td>
                            <td>{{ order.title }}</td>
                            <td>{{ order.qty }}</td>
                            <td>{{ order.price }}</td>
                            <td>{{ order.total }}<span class="counter" v-if="order.comment !=''">C</span></td>
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
    import {mdbContainer,mdbBtn} from 'mdbvue'

    export default {
        name: "OrderInventoryDetail",
        components: {
            mdbContainer,
            mdbBtn
        },
        created() {

            axios.get('http://127.0.0.1:8000/api/order_inventory/'+this.id)
                .then(res => this.order_inventory = res.data)
            // .catch(err => console.log(err))
        },
        data() {
            return {
                id:this.$route.params.id,
                order_inventory: [],
            }

        },
    }
</script>

<style scoped>

</style>
