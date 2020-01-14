<template>
    <mdb-container fluid>
        <section>
            <div class="card">
                <div class="card-body">
                    <search-input-form />
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th>Sort</th>
                            <th>Title</th>
                            <th>LastName</th>
                            <th>FirstName</th>
                            <th>NickName</th>
                            <th>Department</th>
                            <th>Position</th>
                            <th>Birthday</th>
                            <th>Mobile</th>
                            <th>LoginUser</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr v-bind:key="em.id" v-for="em in employee">
                            <th>{{ em.sort }}</th>
                            <th>{{ em.title }}</th>
                            <th>{{ em.last_name }}</th>
                            <th>{{ em.first_name }}</th>
                            <th>{{ em.nick_name }}</th>
                            <th>{{ em.department }}</th>
                            <th>{{ em.designation }}</th>
                            <th>{{ em.birthday }}</th>
                            <th>{{ em.mobile }}</th>
                            <th>{{ em.email }}</th>
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
        name: "Employee",
        components: {
            mdbContainer,
            SearchInputForm,
        },
        created() {
            axios.get('http://127.0.0.1:8000/api/employee')
                .then(res => this.employee = res.data)
            // .catch(err => console.log(err))
        },
        data() {
            return {
                employee: [],
            }

        },
    }
</script>

<style scoped>

</style>
