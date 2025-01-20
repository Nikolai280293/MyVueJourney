<template>
    <div>
        <h2>Калькулятор</h2>
        <input v-model="num1" type="number" placeholder="Введите первое число">
        <input v-model="num2" type="number" placeholder="Введите второе число">
        <button v-on:click="calculateSum">Сложить</button>
        <p>Результат: {{ result }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num1: '',
            num2: '',
            result: 0,
        };
    },
    methods: {
        calculateSum() {
            this.result = Number(this.num1) + Number(this.num2);
        },
    },
};
</script>

<style></style>