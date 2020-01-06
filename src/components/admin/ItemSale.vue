<template>
    <mdb-container fluid>
        <section>
            <div class="card">
                <div class="card-body">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th>Product</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-bind:key="item.id" v-for="item in item_sale">
                            <th>{{ item.name }}</th>
                            <th>{{ item.sum_qty }}</th>
                            <th>{{ item.sum_total }}</th>
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
        name: "ItemSale",
        components: {
            mdbContainer,
        },
        created() {
            axios.get('http://127.0.0.1:8000/api/today/item_sale')
                .then(res => this.item_sale = res.data)
            // .catch(err => console.log(err))
        },
        data() {
            return {
                item_sale: [],
            }

        },
    }
</script>

<style scoped>

</style>