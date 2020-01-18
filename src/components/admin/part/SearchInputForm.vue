<template>
    <mdb-container>
        <form method="post" >
            <div class="row">
                <div class="col-sm-4 sm-4">
                    <mdb-input :type="inputType" :label="inputLabel" v-model="searchInput" />
<!--                    <input :type="showInput ? 'text' : 'hidden'">-->
                </div>
<!--                <div class="col-sm-4 sm-4">-->
<!--                    <mdb-btn color="unique" >Search</mdb-btn>-->
<!--                </div>-->
            </div>
        </form>

    </mdb-container>

</template>

<script>
    import {mdbContainer,mdbInput} from 'mdbvue'
    export default {
        name: "SearchByDateForm",
        props: ['inputType','inputLabel','search'],
        components: {
            mdbContainer,
            mdbInput,
            // mdbBtn
        },
        computed: {
            searchInput: {
                get() {
                    return this.search;
                },
                set(val) {
                    this.$emit('input', val);
                }
            }
        },
        data() {
            return {

            }
        },

    }
</script>

<style scoped>

</style>
