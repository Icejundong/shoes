<template >
    <div style='padding:1rem 0;'>
        <img style="width: 1.28rem;height: 1.42rem;margin: auto;display:block" src='https://m.zujiekeji.cn/xcximg/xcxkanjia/nolist.png' />
        <div style="text-align: center;color: #999999;font-size: 0.30rem;margin-top: 0.20rem;">{{emptyContent}}~</div>
    </div>
</template>

<script>
    export default {
        name: "empty",
        props:{
            emptyContent:{
                type:String,
                default:'暂无相关记录'
            }
        },
        data() {
            return {}
        }
    }
</script>
