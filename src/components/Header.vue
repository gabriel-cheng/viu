<script>
    export default {
        data() {
            return {
                moedas: []
            }
        },
        methods: {
            click() {
                alert('Clicado!');
            },
            async fetchMoedas() {
                try {
                    const request = await fetch('http://economia.awesomeapi.com.br/json/last/USD-BRL');
                    const data = await request.json();
                    this.moedas = data.USDBRL;

                    return this.moedas;
                }catch(err) {
                    console.log({ message: err });
                }
            }
        },
        mounted() {
            this.fetchMoedas();
        }
    }
</script>
<template>
    <header id="header-container">
        <div class="header-subcontainer">
            <div class="header-content-top">
                <div class="header-logo-area">
                    <a href="/">
                        <img src="../../public/icons/citybens/logotipo-branco-horiz.png" alt="Citybens logotipo">
                    </a>
                    <p>Relações com Investidores</p>
                </div>
                <div class="header-api-datas">
                    <div class="api-data api-data-1">
                        <p>{{moedas.code}}</p>
                        <p>{{moedas.high}}</p>
                    </div>
                    <div class="api-data api-data-2">
                        <p>EUR</p>
                        <p>R$ 8,00</p>
                    </div>
                    <div class="api-data api-data-3">
                        <p>BTC</p>
                        <p>R$ 200.000,00</p>
                    </div>
                </div>
                <div class="navigation-button">
                    <a href="#">
                        <button>Simular consórcio</button>
                    </a>
                </div>
            </div>
            <nav class="header-content-bottom">
                <ul class="nav-contents">
                    <li><a href="#">Lorem Lorem</a></li>
                    <li><a href="#">Lorem Lorem</a></li>
                    <li><a href="#">Lorem, Lorem e Lorem</a></li>
                    <li><a href="#">Filiais</a></li>
                    <li><a href="#">Lorem aos Lorem</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<style scoped>
    #header-container {
        font-family: 'Lato', sans-serif;
        background-color: #1e1e1e;
        background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.484375) 33.33%, rgba(0, 0, 0, 0) 83.84%);
        color: #fff;
        position: fixed;
        top: 0;
        width: 100%;
        padding-top: 15px;
        display: flex;
        justify-content: center;
    }

    .header-subcontainer {
        max-width: 1600px;
        width: 90%;
    }

    .header-content-top {
        border-bottom: 1px solid var(--city-background-green);
        padding-bottom: 15px;
        align-items: center;
        display: flex;
        justify-content: space-between;
    }

    .header-logo-area {
        width: 300px;
        align-items: center;
        justify-content: space-between;
        display: flex;
        padding-right: 20px;
    }

    .header-logo-area a {
        position: relative;
    }

    .header-logo-area a::after {
        content: "";
        width: 1px;
        height: 100%;
        background-color: #fff;
        position: absolute;
        right: -21px;
    }

    .header-logo-area a img {
        width: 170px;
    }

    .header-logo-area p {
        color: #fff;
        font-size: 1.4rem;
        margin: 0 0 0 40px;
    }

    .header-api-datas {
        max-width: 550px;
        width: 100%;
    }

    .header-api-datas p {
        display: inline-block;
        font-weight: 700;
        font-size: 1.5rem;
    }

    .header-api-datas p:nth-of-type(1) {
        margin: 0 7px 0 0;
    }

    .header-api-datas p:nth-of-type(2) {
        color: green;
    }

    .header-api-datas {
        align-items: center;
        justify-content: space-between;
        display: flex;
    }

    .navigation-button {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .navigation-button button {
        border-radius: 16px;
        width: 170px;
        height: 32px;
        background-color: var(--city-background-blue);
        color: #fff;
        font-size: 1.4rem;
        border: 0px;
        cursor: pointer;
    }

    .navigation-button button:hover {
        opacity: 0.75;
        transition: opacity 0.2s ease-in-out;
    }


    .header-content-bottom {
        padding: 7px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .nav-contents {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        width: 100%;
    }

    .nav-contents li a {
        color: #fff;
        font-size: 1.4rem;
        font-weight: 700;
        text-transform: uppercase;
        transition: 0.1s ease-in;
    }

    .nav-contents li a:hover {
        color: var(--city-background-green);
    }
</style>
