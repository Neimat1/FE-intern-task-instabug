<template>
    <form >
        <div class="form-header d-flex align-items-center flex-direction-column">
            <img class="d-block" src="https://dashboard.instabug.com/images/Instabug-icon.svg" alt="">
            <h1>Log in to Instabug</h1>
        </div>
        
        <div class="btn-group fs-4 ">
            <button class="brdr-4  w-100 font-bold google bg-light-blue text-white d-flex align-items-center "><div class="icon bg-white brdr-4 pad-5"><img src="https://img.icons8.com/color/20/undefined/google-logo.png"/></div><span>Google</span></button>
            <button class="brdr-4 w-100 font-bold github bg-muted text-white d-flex align-items-center"><div class="icon   brdr-4 pad-5"><img src="https://img.icons8.com/glyph-neue/20/undefined/github.png"/></div><span>Github</span></button>
            <button class="brdr-4 w-100 font-bold microsoft text-muted bg-white d-flex align-items-center brdr-muted"><div class="icon  brdr-4 pad-5"><img src="https://img.icons8.com/color/20/undefined/microsoft.png"/></div><span>Microsoft</span></button>
        </div>
        <hr/>
        <div class="form-group">
            <label class="font-bold" for="">Work Email</label>
            <input class="brdr-4 w-100 " type="email" v-model="email" placeholder="you@company.com" />
        </div>
        <div class="form-group">
            <label class="font-bold" for="">Password</label>
            <input class="brdr-4 w-100 " type="password" v-model="password" placeholder="8 + Characters" />
        </div>
        <div class="form-group">
            <button class="brdr-4 w-100  bg-light-blue "><router-link class="text-white pad-5 d-block text-decoration-none font-bold" to="/welcome">Log in</router-link></button>
        </div>
    </form>
</template>

<script>
    export default {
        data(){
            return {
                email:'',
                password:'',
            }
        },

    }

</script>

<style src="../../../assets/SCSS/style.scss" lang="scss" ></style>
    
    
    

<!-- </style> -->