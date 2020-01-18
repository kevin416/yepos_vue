<template>
    <mdb-container fluid>
        <section>
            <div class="card">
                <div class="card-body">
                    <search-input-form />
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
                            <td>{{ item.name }}</td>
                            <td>{{ item.sum_qty }}</td>
                            <td>{{ item.sum_total }}</td>
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
        name: "ItemSale",
        components: {
            mdbContainer,
            SearchInputForm
        },
        created() {
            axios.get('https://api.pandabuffet.co.uk/api/today/item_sale')
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
