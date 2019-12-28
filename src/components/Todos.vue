<template>
    <div>
        <div v-bind:key="todo.id" v-for="todo in todos">
            <todo-item v-bind:todo="todo" v-on:del-todo="$emit('del-todo',todo.id)"/>
        </div>
    </div>
</template>

<script>
    import TodoItem from './TodoItem';

    export default {
        name: "Todo.vue",
        components: {TodoItem},
        componens:{
            TodoItem
        },
        props: ["todos"]
    }
</script>

<style scoped>

</style>
