<template>
    <mdb-container fluid>
        <section>
            <div class="card">
                <div class="card-body">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th>Product</th>
                            <th>Short</th>
                            <th>Chinese</th>
                            <th>Price</th>
                            <th>Code</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-bind:key="pro.id" v-for="pro in product.data.products.data">
                            <th>{{ pro.name }}</th>
                            <th>{{ pro.short_name }}</th>
                            <th>{{ pro.cn_name }}</th>
                            <th>{{ pro.price }}</th>
                            <th>{{ pro.code }}</th>
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
        name: "ProductRestaurant",
        components: {
            mdbContainer,
        },
        created() {
            axios.get('http://127.0.0.1:8000/api/product')
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