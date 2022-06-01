<template>
    <transition class="slide-in">
        <div class="carousel-item"  v-show="currentSlide=== index">
            <img  class="d-block w-75" :src="slide.img"/>
            <p class="text-white font-bold mt-10 text-center pad-5">{{slide.title}}</p>
        </div>
    </transition>
</template>

<script>
    export default {
        props:['slide','currentSlide','index'],
    }

</script>

<style src="../../../assets/SCSS/style.scss" lang="scss" ></style>

