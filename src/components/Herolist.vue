<template>
    <div class="main">
        <ul>
            <li @click="selected(hero)" class="item" v-for="hero in herolist" :key="hero.id">
                <img :src="hero.iconUrl">
                <div class="name">
                    <span>{{hero.cname}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:'',
        data(){
            return{
                herolist:[]
            }
        },
        mounted(){
           this.getHerolist()
        },
        methods:{
            async getHerolist(){
                try {
                    const heros = await this.$API.get_heroList()
                    this.herolist = heros.data
                } catch (error) {
                    alert(error)
                }
            },
            async selected(hero){
                try {
                    const heroPowers = await this.$API.get_heroPower(hero.cname,'wx')
                    console.log(heroPowers)
                } catch (error) {
                    alert(error)
                }
               
            }     

        }
    }
</script>
<style lang="less" scoped>
    .main{
        margin: 20px auto;
        width: 803px;
        
        .item{
            display: inline-block;
            height: 70px;
            width: 50px;
            background:turquoise;
            border: 1px solid black;
            margin-left: 5px;
            margin-top:5px;
            img{
                height: 50px;
                width: 50px;
            }
            .name{
                font-size:10px;
                text-align: center;
            }
        }
    }
</style>