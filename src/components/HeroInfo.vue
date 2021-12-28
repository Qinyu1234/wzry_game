<template>
    <div class="main">
        <template>
        <el-select v-model="type" placeholder="请选择">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        </template>
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
                herolist:[],
                options: [{
                    value: 'wx',
                    label: '安卓微信'
                    }, {
                    value: 'qq',
                    label: '安卓QQ'
                    }, {
                    value: 'ios_wx',
                    label: '苹果微信'
                    }, {
                    value: 'ios_qq',
                    label: '苹果QQ'
                    }],
                type:'wx',
                heroInfo:{}
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
                    const heroPowers = await this.$API.get_heroPower(hero.cname,this.type)
                    this.$store.commit('SETHEROINFO',heroPowers.data)
                    this.heroInfo = heroPowers.data
                    this.$router.push('/heroInfo')
                } catch (error) {
                    console.log(error)
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