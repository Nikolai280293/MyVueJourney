<template>
    <div>
        <h2>Курсы валют</h2>
        <p v-if="loading">Загрузка</p>
        <p v-else-if="error">Ошибка загрузки: {{ error }}</p>
        <ul v-else-if="rates && Object.keys(rates).length">
            <li>Доллар (USD): {{ (1 / rates.USD).toFixed(2) }} RUB</li>
            <li>Евро (EUR): {{ (1 / rates.EUR).toFixed(2) }} RUB</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            rates: { USD: null, EUR: null, },
            loading: true,
            error: null,
            timer: null,
        }
    },
    methods: {
        async fetchRates() {
            try {
                this.loading = true;
                const response = await axios.get('https://open.er-api.com/v6/latest/RUB');
                this.rates = response.data.rates || {};
            } catch (err) {
                this.error = err.message;
            } finally {
                this.loading = false;
            }
        },
    },
    async created() {
        await this.fetchRates();

        this.timer = setInterval(() => {
            this.fetchRates();
        }, 60000);
    },
    beforeUnmount() {
        clearInterval(this.timer);
    },
}
</script>

<style></style>