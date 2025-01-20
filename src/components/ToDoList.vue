<template>
    <div class="items">
        <div class="item-top">
            <input v-model="newTask" placeholder="Введите задачу" type="text">
            <button v-on:click="addTask">Добавить</button>
        </div>
        <ol>
            <li v-for="(task, index) in listItem" :key="index">
                {{ task }}
                <button v-on:click="removeTask(index)">Удалить</button>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listItem: [],
            newTask: '',
        }
    },
    methods: {
        addTask() {
            if (this.newTask.trim()) {
                this.listItem.push(this.newTask.trim());
                this.newTask = '';
            }
        },
        removeTask(index) {
            this.listItem.splice(index, 1);
        },
    },
}
</script>

<style>
.items {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;
    width: 100%;
}

.item-top {
    display: flex;
    gap: 12px;
}
</style>