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
        <el-select v-model="selHero" placeholder="请选择"
        @change="showMes(selHero)">
            <el-option
            v-for="(hero,index) in selHerolist"
            :key="index"
            :value="hero.name">
            </el-option>
        </el-select>
    </template>

    <el-table
        :data="herolist"
        border
        style="width: 100%;margin-top:10px"
        @row-click="get_HeroInfo"
        >
        <el-table-column 
        label="序号"
        width="70"
        align="center"
        type="index"
        >
        </el-table-column>
        <el-table-column
        align="center"
        label="英雄名字"
        prop="cname">
        </el-table-column>
        <el-table-column
        label="英雄头像"
        align="center"
        prop="name">
            <template slot-scope="{row}">
                <div>
                    <img style="width:50px;height:50px" :src="row.iconUrl">
                </div>
            </template>    
        </el-table-column>
        <el-table-column
        label="描述"
        align="center"
        prop="title">
        </el-table-column>
        <el-table-column
        label="更新时间"
        align="center"
        prop="time">
        </el-table-column>
    </el-table>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
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
        herolist: [],
        selHerolist:[],
        selHero:'',
        index:'',
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
                this.selHerolist = heros.data.map((item)=>{
                    return {"name":item.cname}
                })
            } catch (error) {
                alert(error)
            }
        },
        async getHeroInfo(cname){
                try {
                    const heroPowers = await this.$API.get_heroPower(cname,this.type)
                    return heroPowers.data
                } catch (error) {
                    console.log(error)
                }
        },    
        async get_HeroInfo(row){
            let name = row.cname
            try {
                this.heroInfo = await this.getHeroInfo(name)
                this.showMesBox()
            } catch (error) {
                console.log(error)
            }
        },
        showMesBox(){
            let {heroInfo} = this
            let messBox = `<label >描述:
                                <span>${heroInfo.alias}</span>
                            </label>
                            <label style="display:block">区:
                                <span>${heroInfo.type}</span>
                            </label>
                            <label >省标最低分:
                                <span>${heroInfo.province}</span>
                                <span>${heroInfo.provincePower}</span>
                            </label>
                            <label style="display:block">市标最低分
                                <span>${heroInfo.city}</span>
                                <span>${heroInfo.cityPower}</span>
                            </label>
                            <label >县标最低分
                                <span>${heroInfo.area}</span>
                                <span>${heroInfo.areaPower}</span>
                            </label>`
                
                this.$alert(messBox, `${heroInfo.name}`, {
                    dangerouslyUseHTMLString:true,
                    confirmButtonText: '确定',
                    center:true,
                });
        },
        async showMes(name){
            try {
                this.heroInfo = await this.getHeroInfo(name)
                this.showMesBox()
            } catch (error) {
                console.log(error)
            }
        }
    }
  }
</script>

<style lang="less">
    .main{
        margin: 20px auto;
        width: 803px;
    }
</style>