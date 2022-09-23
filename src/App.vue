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
    :root {
        --city-background-green: #e8ff01;
        --city-background-blue: #2A2EFF;
        --city-background-2: #fff;
        --city-background-3: #000;
        --city-background-4: #7f7f7f;
        --city-background-5: #0D0D0D;
    }

    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Reem+Kufi+Fun:wght@400;600;700&display=swap');

    * {
        padding: 0;
        margin: 0;
    }

    html {
        font-size: 62.5%;
    }

    html body {
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }
</style>
