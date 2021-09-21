<template>
    <div class="container">
        <h1>Oops!</h1>
        <h3>The page you're looking for is not here.</h3>
        <router-link :to="{ name: 'Dashboard' }">Back to the Dashboard</router-link>
    </div>
</template>

<style scoped>
    .container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>