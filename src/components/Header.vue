<script>

</script>

<template>
    <header id="header-container">
        <div class="header-subcontainer">
            <div class="header-logo">
                <img src="/icons/citybens/logotipo-branco.png" alt="logotipo citybens">
            </div>
            <nav class="header-navbar">
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/sobre">Sobre</router-link></li>
                    <li><router-link to="/contato">Contato</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped>
    #header-container {
        background-color: rgba(0, 0, 0, 0.315);
        width: 100%;
        display: flex;
        justify-content: center;
        position: fixed;
        top: 0;
        z-index: 1;
    }

    .header-subcontainer {
        max-width: 1700px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 8px 60px;
    }

    .header-logo img {
        width: 120px;
    }

    .header-navbar ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
    }

    .header-navbar ul li {
        text-transform: uppercase;
    }

    .header-navbar ul li a {
        text-decoration: none;
        color: #fff;
        padding: 20px;
    }

    .header-navbar ul li a:hover {
        background-color: #fff;
        color: #000;
    }

    .header-navbar ul li a:active {
        background-color: #990000;
        color: #fff;
    }
</style>
