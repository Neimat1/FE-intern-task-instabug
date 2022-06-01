<template>
    <div class="carousel-indicators">
        <button class="carousel-indicator-item  " 
                :class="{active : currentIndex === index}"
                v-for="(item,index) in total" 
                :key="index"
        >
        </button>
    </div>
</template>

<script>
export default{
    props:['total','currentIndex']
}

</script>
<style src="../../../assets/SCSS/style.scss" lang="scss" ></style>
