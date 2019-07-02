
<style scoped>
    .ice-loadend{
        width: 60%;
        margin: 0 auto;
        position: relative;
        padding: 0.2rem 0;
        color: #999;
        font-size: 14px;
        line-height: 0.4rem;
    }
    .ice-loadend-line{
        width: 100%;
        border-top: 1px solid #e5e5e5;
        position: absolute;
        top: 0.4rem;
    }
    .ice-loadend-tips{
        z-index: 99;
        background-color: rgb(249, 249, 249);
        margin: 0 auto;
        padding: 0 0.1rem;
        display: inline-block;
    }
</style>
<template>
    <div class="ice-loadend flex-jac">
        <div class="ice-loadend-line"></div>
        <div class="ice-loadend-tips">{{nodata_str}}</div>
    </div>
</template>
<script>

    export default {
        name: "loading",
        props:{
            nodata_str:{
                type:String,
                default:'没有更多内容啦'
            }
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>
