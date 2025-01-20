<template>
  <div>
    <nav>
      <router-link to="/todolist">Список задач</router-link>
      <router-link to="/calculator">Калькулятор</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style></style>