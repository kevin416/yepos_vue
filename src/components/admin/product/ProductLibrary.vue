<template>
    <mdb-container fluid>
        <section>
            <div class="card">
                <div class="card-body">
                    <search-input-form input-type="text" input-label="Search Product" v-model="search"/>
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th>Product</th>
                            <th>Code</th>
                            <th>Price</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr v-bind:key="pro.id" v-for="pro in product.data.products.data">
                            <td>{{ pro.title + ' ' + pro.cn_name }}</td>
                            <td>{{ pro.code }}</td>
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
    import searchMixins from "../../mixins/searchMixins";

    export default {
        name: "ProductLibrary",
        components: {
            mdbContainer,
            SearchInputForm
        },

        created() {
            axios.get('https://api.pandabuffet.co.uk/api/product_library')
                .then(res => this.product = res.data)
            // .catch(err => console.log(err))

        },
        data() {
            return {
                product: [],
                search:'',

            }
        },

        mixins:[searchMixins]
    }
</script>

<style scoped>

</style>
