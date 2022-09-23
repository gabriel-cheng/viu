<script>

</script>

<template>
    <main id="main-container">
        <section class="section-1-container">
            <video muted autoplay loop>
                <source src="https://mbluxury1.s3.amazonaws.com/2020/09/18141509/home-video-2020.mp4" type="video/mp4">
            </video>
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
</style>
