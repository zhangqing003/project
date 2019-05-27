import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex);
const allstore = {
    set:function(value,data){
        if(value==0){
       return   localStorage.setItem('store',JSON.stringify(data))}
       else if(value==1){
        return    localStorage.setItem('data1',JSON.stringify(data))}
        else if(value==2){
            return localStorage.setItem('rank',JSON.stringify(data))
        }else if(value==3){
            return localStorage.setItem('span',JSON.stringify(data))
           
        }else 
        return localStorage.setItem('cd',JSON.stringify(data))

    },
    get:function(value){
        if(value==1)
       {return  JSON.parse(localStorage.getItem('store'))}
       else if(value==2){
           return JSON.parse(localStorage.getItem('rank'))
       }else{
        return JSON.parse(localStorage.getItem('cd'))

       }
    }
} 
function aa (state){
    for(let i=0;i<state.caption.length/state.cd;i++){
        state.spanarr.push(i);
        }
}
export default new vuex.Store({
    state:{
        page: undefined||3,
        cd:undefined||allstore.get(3)||10,
        caption:allstore.get(1)||[], 
        filterarr:[],
        alldata:[],
        spanarr:[]
    },
    mutations:{
        add(state,value){
            state.caption.push({title:value.title,number:value.nmb})
            allstore.set(0,state.caption)
            aa(state)
            allstore.set(3,state.spanarr)
            state.spanarr=[]
        },
        delete(state,index){
            state.caption.splice(index,1)
            allstore.set(0,state.caption)
            console.log(state.spanarr)
            aa(state)
            allstore.set(3,state.spanarr)
            state.spanarr=[]

        



        },
        change(state,value){
             state.caption[value.idx].title=value.title;
             state.caption[value.idx].number=value.number;
            allstore.set(0,state.caption)
            aa(state)
            allstore.set(3,state.spanarr)
            state.spanarr=[]


        },
        set(state,value){
            console.log(value)
            state.page=value.page;
            state.cd=value.cd;
            allstore.set(1,{page:state.page,cd:state.cd})
            aa(state)
            allstore.set(3,state.spanarr)
            allstore.set(4,state.cd)            
            state.spanarr=[]


        },
        alldata1(state){
            var data = state.caption;
           for(let i=0;i<data.length;i++){
          state.filterarr.push(data[i].number)
            state.filterarr.sort(function (a,b) {
                return b-a;
                       });
                    };
         for(let i=0;i<data.length;i++){
         for(let j=0;j<data.length;j++){
         if(data[j].number==state.filterarr[i]){
         state.alldata.push(data[j])}}}
         state.filterarr=[];
         allstore.set(2,state.alldata)
         state.alldata =[];
  }}
})


