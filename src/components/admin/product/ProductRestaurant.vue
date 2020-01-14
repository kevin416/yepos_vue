<template>
    <mdb-container fluid>
        <section>
            <div class="card">
                <div class="card-body">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th>Product</th>
                            <th>Chinese</th>
                            <th>Code</th>
                            <th>Price</th>
                            <th>Category</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr v-bind:key="pro.id" v-for="pro in product.data.products.data">
                            <td>{{ pro.name }}</td>
                            <td>{{ pro.cn_name }}</td>
                            <td>{{ pro.code }}</td>
                            <td>{{ pro.price }}</td>
                            <td>{{ pro.category }}</td>

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
