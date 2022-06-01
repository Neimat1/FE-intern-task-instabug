<template >
    <div class="d-flex">
        <carousel class="w-50" :slides="slides"></carousel>
        <login-form class="w-50"/>
    </div>
</template>

<script>
    import Carousel from '../components/layout/carousel/CarouselComponent.vue'
    import LoginForm from '@/components/layout/login/LoginForm.vue'
    export default {
        components:{Carousel,LoginForm},
        data:()=>({
            slides:[
                {
                    img:'https://svgshare.com/i/hrA.svg',
                    title:'Accelerate Your Entire Mobile Team Workflow'
                },
                {
                    img:'https://svgshare.com/i/hrB.svg',
                    title:'The Most Comprehansive Bug Reporting Tool for Mobile Apps'
                },
                {
                    img:'https://svgshare.com/i/hrV.svg',
                    title:'Secure Crash Reporting With Real-Time Alerts'
                }
            ]
        })
    }
    
</script>