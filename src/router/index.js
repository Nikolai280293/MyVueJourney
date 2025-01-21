import { createRouter, createWebHistory } from "vue-router";
import ToDoList from "@/components/ToDoList.vue";
import SimpleCalculator from '@/components/SimpleCalculator.vue';
import CurrencyRates from '@/components/CurrencyRates.vue';

const routes = [
    { path: '/todolist', name: 'ToDoList', component: ToDoList },
    { path: '/calculator', name: 'SimpleCalculator', component: SimpleCalculator },
    { path: '/currency', name: 'CurrencyRates', component: CurrencyRates },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;