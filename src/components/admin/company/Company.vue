<template>
    <mdb-container fluid>
        <section>
            <div class="card">
                <div class="card-body">
                <search-input-form input-type="text" input-label="Search Company" v-model="search"/>
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
                        <tr v-bind:key="com.id" v-for="com in filterCompany">
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
    import {mdbContainer} from 'mdbvue';
    import SearchInputForm from "../part/SearchInputForm";

    export default {
        name: "Company",
        components: {
            mdbContainer,
            SearchInputForm
        },
        created() {
            axios.get('https://api.pandabuffet.co.uk/api/company')
                .then(res => this.company = res.data.data)
            // .catch(err => console.log(err))
        },
        data() {
            return {
                company: [],
                search:''
            }

        },
        computed: {
            filterCompany:function () {
                return this.company.filter((item)=>{
                    return item.company.match(this.search);
                });
            }
        }
    }
</script>

<style scoped>

</style>
