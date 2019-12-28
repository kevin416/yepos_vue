<template>
    <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
        <div class="row">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="materialUnchecked" v-on:change="markComplete">
                <label class="form-check-label" for="materialUnchecked"></label>
            </div>
            {{todo.title}}

            <button @click="$emit('del-todo', todo.id)" class="btn btn-danger btn-sm ">x</button>


        </div>

    </div>
</template>

<script>
    export default {
        name: "TodoItem",
        props: ["todo"],
        methods: {
            markComplete() {
                this.todo.completed = !this.todo.completed;
            }
        }
    }
</script>

<style scoped>
    .todo-item {
        background: aliceblue;
        padding: 10px;
        border-bottom: 1px black dotted;
    }

    .is-complete {
        text-decoration: line-through;
    }

</style>
