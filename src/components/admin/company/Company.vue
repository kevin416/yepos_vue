<template>
    <mdb-container fluid>
        <section>
            <div class="card">
                <div class="card-body">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th>Type</th>
                            <th>SubType</th>
                            <th>Company</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Website</th>
                            <th>UserId</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-bind:key="com.id" v-for="com in company.data">
                            <th>{{ com.type }}</th>
                            <th>{{ com.sub_type }}</th>
                            <th>{{ com.company }}</th>
                            <th>{{ com.email }}</th>
                            <th>{{ com.mobile }}</th>
                            <th>{{ com.website }}</th>
                            <th>{{ com.username }}</th>

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
        name: "Company",
        components: {
            mdbContainer,
        },
        created() {
            axios.get('http://127.0.0.1:8000/api/company')
                .then(res => this.company = res.data)
            // .catch(err => console.log(err))
        },
        data() {
            return {
                company: [],
            }

        },
    }
</script>

<style scoped>

</style>