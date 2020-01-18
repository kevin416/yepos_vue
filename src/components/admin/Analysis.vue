<template>
    <mdb-container fluid>
        <section>
            <div class="card">
                <div class="card-body">
                    <search-input-form input-type="text" input-label="Search Product" v-model="search" />
<!--                    <input type="text" v-model="search">-->
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th>Type</th>
                            <th>Product</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-bind:key="item.id" v-for="item in filterProducts">
                            <td>{{ item.product_type }}</td>
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
    import searchMixins from "../mixins/searchMixins";

    export default {
        name: "Analysis",

        components: {
            mdbContainer,
            SearchInputForm
        },
        created() {
            axios.get('https://api.pandabuffet.co.uk/api/analysis')
                .then(res => this.item_sale = res.data)
            // .catch(err => console.log(err))
        },
        data() {
            return {
                item_sale: [],
                search:'',
            }

        },
        mixins:[searchMixins]
    }
</script>

<style scoped>

</style>
