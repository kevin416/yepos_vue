<template>
    <mdb-container fluid>
        <section>
            <div class="card">
                <div class="card-body">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th>Company</th>
                            <th>FromDate</th>
                            <th>ToDate</th>
                            <th>PayDate</th>
                            <th>Pay</th>
                            <th>Cheque</th>
                            <th>Payment</th>
                            <th>Comment</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr v-bind:key="pay.id" v-for="pay in supplier_pay.data">
                            <th>{{ pay.company }}</th>
                            <th>{{ pay.from_date }}</th>
                            <th>{{ pay.to_date }}</th>
                            <th>{{ pay.pay_date }}</th>
                            <th>{{ pay.pay }}</th>
                            <th>{{ pay.ch_no }}</th>
                            <th>{{ pay.methods }}</th>
                            <th>{{ pay.note }}</th>

                        </tr>
                        </tbody>
                    </table>


                        <pagination :data="supplier_pay" @pagination-change-page="getResults"></pagination>

<!--                        <div class="col-8">-->
<!--                            <nav>-->
<!--                                <ul class="pagination">-->
<!--                                    <li v-bind:class="{ disable:!pagination.first_link }" class="page-item"><a href="#" @click="viewPay(pagination.first_link)" class="page-link">&laquo;</a> </li>-->
<!--                                    <li v-bind:class="{ disable:!pagination.prev_link }" class="page-item"><a href="#" @click="viewPay(pagination.prev_link)" class="page-link">&lt;</a> </li>-->
<!--                                    <li v-for="n in pagination.last_page" v-bind:key="n" v-bind:class="{ active: pagination.current_page == n }" class="page-item"><a href="#" @click="viewPay(pagination.path_page + n)" class="page-link">{{n}}</a> </li>-->
<!--                                    <li v-bind:class="{ disable:!pagination.next_link }" class="page-item"><a href="#" @click="viewPay(pagination.next_link)" class="page-link">&gt;</a> </li>-->
<!--                                    <li v-bind:class="{ disable:!pagination.last_link }" class="page-item"><a href="#" @click="viewPay(pagination.last_link)" class="page-link">&raquo;</a> </li>-->
<!--                                </ul>-->
<!--                            </nav>-->
<!--                        </div>-->
<!--                        <div class="col-4">-->
<!--                            Page: {{ pagination.from_page }} - {{ pagination.to_page }}-->
<!--                            Total: {{ pagination.total_page }}-->
<!--                        </div>-->

                </div>
            </div>
        </section>
    </mdb-container>
</template>

<script>
    import axios from "axios";
    import {mdbContainer} from 'mdbvue'


    export default {
        name: "SupplierPay",
        components: {
            mdbContainer,
        },
        created() {
            this.viewPay();
        },
        data() {
            return {
                supplier_pay: [],
                // pagination: {},
                limit: 2,
                showDisabled: false,
                size: 'default',
                align: 'left'
            }

        },
        mounted() {
            // Fetch initial results
            this.getResults();
        },
        methods: {

            getResults(page = 1) {
                axios.get('http://127.0.0.1:8000/api/company/payment?page=' + page)
                    .then(response => {
                        this.supplier_pay = response.data;
                    });
            }
        },
        watch: {
            limit (newVal) {
                this.limit = parseInt(newVal);
                if (this.limit < 0) {
                    this.limit = 0;
                }
            }
        },

        // methods: {
        //     viewPay(pagi){
        //         pagi = pagi || 'http://127.0.0.1:8000/api/company/payment';
        //         axios.get(pagi)
        //             .then(res => {
        //                 this.supplier_pay = res.data
        //                 this.pagination = {
        //                   current_page: res.data.current_page,
        //                   last_page: res.data.last_page,
        //                   from_page: res.data.from,
        //                   to_page: res.data.to,
        //                   total_page: res.data.total,
        //                   path_page: res.data.path+"?page=",
        //                     first_link: res.links.first,
        //                     last_link: res.links.last,
        //                     prev_link: res.links.prev,
        //                     next_link: res.links.next,
        //
        //                 };
        //             })
        //
        //
        //     }
        // }
    }
</script>

<style scoped>

</style>