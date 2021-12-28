import HeroInfo from '@/components/HeroInfo.vue'
import HeroList from '@/components/Herolist.vue'
export default[
    {
        name:'herolist',
        path:'/',
        component:HeroList
    },
    {
        name:'heroinfo',
        path:'/heroinfo',
        component:HeroInfo
    }
]