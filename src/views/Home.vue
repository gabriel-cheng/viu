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
    <main id="main-container">
        <section class="section-1-container">
            <video muted autoplay loop>
                <source src="https://mediaservice.mycon.com.br/a2607913-242d-4e06-af37-9b02d799d361/mycon-site_640x360_650.mp4">
            </video>
        </section>
        <section class="section-2-container">
            <p>{{moedas}}</p>
        </section>
    </main>
</template>

<style scoped>
    .section-1-container {
        max-width: 1600px;
        width: 100%;
    }

    .section-1-container video {
        width: 100%;
        position: absolute;
        top: 0;
        z-index: -1;
    }

    .section-2-container {
        margin: 110px 0 0 0;
    }
</style>
