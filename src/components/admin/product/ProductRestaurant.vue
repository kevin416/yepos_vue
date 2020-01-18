<template>
    <mdb-container fluid>
        <section>
            <div class="card">
                <div class="card-body">
                    <search-input-form />
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th>Category</th>
                            <th>Product</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-bind:key="pro.id" v-for="pro in product.data.products.data">
                            <td>{{ pro.category }}</td>
                            <td>{{ pro.name + ' ' + pro.cn_name }}</td>
                            <td>{{ pro.price }}</td>
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
    import SearchInputForm from "../part/SearchInputForm";

    export default {
        name: "ProductRestaurant",
        components: {
            mdbContainer,
            SearchInputForm
        },
        created() {
            axios.get('http://127.0.0.1:8000/api/products')
                .then(res => this.product = res.data)
            // .catch(err => console.log(err))
        },
        data() {
            return {
                product: [],
            }

        },
    }
</script>

<style scoped>

</style>
