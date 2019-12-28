<template>
    <div class="text-center">
        <form @submit="addTodo">
            <input type="text" v-model="title" name="title">
            <input type="submit" class="btn-primary btn btn-sm" value="submit">
        </form>
    </div>
</template>

<script>

    export default {
        name: "AddTodo",
        data() {
            return{
                title: ''
            }
        },
        methods: {
            addTodo(e) {
                e.preventDefault();
                const newTodo = {
                    title: this.title,
                    completed: false
                }
                // sentup to parent
                this.$emit('add-todo', newTodo);

                this.title = '';
            }
        }
    }
</script>

<style scoped>

</style>
