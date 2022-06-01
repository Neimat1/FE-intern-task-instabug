<template>
    <nav>
        <div class="logo" >
            <img src="https://assets-global.website-files.com/62706e0299180d3045eb2cab/627d2a253b5874d74cc35bf1_LogoOnWhite.svg" alt="">
        </div>
        <button class="btn"><router-link to="/login">Logout</router-link></button>
    </nav>
</template>


<style lang="scss" scoped>
    nav{
        margin-top: 0;
        display: flex;
        justify-content: space-between;
        align-items:center;
        position: fixed;
        top: 0;
        left: 0; right: 0;
        padding:30px 5% ;
        margin-bottom: 50px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.336);
    }

    .logo{
        width: 15%;
        cursor: pointer;

        img{
            display: block;
            width: 100%;
        }
    }
    .btn{
        transition: all .5s linear;
        a {
            /*font*/
            color: #fff;
            font-weight:normal;
            font-size: 16px;
            text-decoration: none;

            &.router-link-exact-active {
            color: #42b983;
            }
        }
        /*background*/
        background: #0089e5;
        /*box-model*/
        border-radius: 6px;
        border: solid 1px #0089e5;
        padding:10px 15px;
        cursor: pointer;
    }


</style>