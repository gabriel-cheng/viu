<script>
    import Header from "./components/Header.vue";

    export default {
        components: {
            Header
        }
    }

</script>

<template>
    <Header />
    <router-view />
    <Footer />
</template>

<style>
    * {
        padding: 0;
        margin: 0;
    }

    html body {
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
    }
</style>
