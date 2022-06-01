<template>
    <div class="carousel">
        <div class="carousel-inner">
            <carousel-indicators 
                    :total="slides.length"
                    :currentIndex="currentSlide"  ></carousel-indicators>
            <carousel-item 
                v-for="(slide,index) in slides" 
                :slide="slide" 
                :key="`item-${index}`"
                :currentSlide="currentSlide"
                :index="index"
            ></carousel-item>
        </div>
    </div>
</template>

<script>
    import CarouselItem from './CarouselItem.vue'
    import CarouselIndicators from './CarouselIndicators.vue'
    export default{
        props:['slides'],
        components:{CarouselItem,CarouselIndicators},
        data:()=>({
            currentSlide:2,
            slideInterval:null
        }),
        methods:{
            setCurrentSlide(index){
                this.currentSlide = index

            },
            startSlideTimer(){
                this.slideInterval = setInterval(()=>{
                    const index = this.currentSlide <this.slides.length-1 ? this.currentSlide + 1:0;
                    this.setCurrentSlide(index);
                },5000)
            },
            stopSlideTimer(){
                clearInterval(this.slideInterval);
            },
        },
        mounted(){
            this.startSlideTimer();
        },
        beforeUnmount(){
            this.stopSlideTimer();
        }

    }
</script>

<style src="../../../assets/SCSS/style.scss" lang="scss" scoped></style>
