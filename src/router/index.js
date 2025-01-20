import { createRouter, createWebHistory } from "vue-router";
import ToDoList from "@/components/ToDoList.vue";
import SimpleCalculator from '@/components/SimpleCalculator.vue';

const routes = [
    { path: '/todolist', name: 'ToDoList', component: ToDoList },
    { path: '/calculator', name: 'SimpleCalculator', component: SimpleCalculator },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;