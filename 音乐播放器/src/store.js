import vuex from 'vuex'
import vue from 'vue'
vue.use(vuex)
export default new vuex.Store({
        state:{
            name:[],
            list:[],
        },
        mutations:{
            cgdata(state,songlist){
               state.list.push(songlist[1]);
               state.name.push(songlist[0]);
               console.log(state.list,state.name)
            }
        }
})

        
