<template>
   <table class ="allall">
        <div class="souso">
            <span>热搜榜</span>
            <div class="fx">
            <span :class='[n==0?"gt":"aaa lt"]' @click="fx(1)">&lt;</span>
            <div v-for="(item,index) in spanarr" class="clickall" >
                <div :class='[n==index?"click1":"click"]'></div></div>               
            
            <span :class='[n+1>alldata.length/$store.state.cd?"gt":"aaa gtt"]'  @click="fx(2)">&gt;</span></div>

        </div>
        <ul class='rank'>
            <li class="ranka">排名</li>
            <li class="rankb">搜索指数</li>
        </ul>
         <ul class='text' v-for="(item,index) in alldata ">
             <div v-if='(index>=$store.state.cd*n)&&(index<$store.state.cd*(n+1))&&(index<50)'>
             <span class="ys1" v-if="index ==0">{{index+1}}</span>
             <span class="ys2" v-if="index ==1">{{index+1}}</span>
             <span class="ys3" v-if="index ==2">{{index+1}}</span>
             <span class="ys" v-if="index >2">{{index+1}}</span>
             <li class= 'rankc'>{{item.title}}</li>
             <li class= 'rankd'>{{item.number}}</li></div>  
         </ul>
   </table>
</template>
<script>   
  const allstore = {
        set:function(value){
           return  localStorage.setItem('rank',JSON.stringify(value))
        },
        get:function(value){
            if(value==1)
           {return  JSON.parse(localStorage.getItem('rank'))}
           else 
           { return  JSON.parse(localStorage.getItem('span'))}
        }
    }
export default {
         data(){
             return { 
                 filterarr:[],
                 n:0,
                 alldata: allstore.get(1)||[],
                 spanarr:allstore.get(2),
                 scope:undefined,
                    }
         },
         methods:{
            fx(value){
                  var long=this.alldata.length>50 ?50:this.alldata.length
                this.scope = long/this.$store.state.cd;
                if(this.n!=0&&value==1)
                {this.n--}
                if((this.n+1)<this.scope&&value==2)
                {
                    this.n++
                }
             }
        }}

</script>
<style>
*{
    margin: 0px;
    padding:0px;
}

.gt{
    font-size: 20px;
    cursor: pointer;
    opacity: 0.1;

    
}
.click1{
      position:relative;
    display: inline-block;  
    width: 3px;
    height: 3px;
    border-radius:50%;
    background: yellow;
}
.allall{
    position: relative;
    top:35%;
   margin-left: 37%;
    width: 300px;
    
    
   border:1px solid green;
}
.clickall{
    display: inline-block;
    margin: 1px;
}

.click{
    position:relative;
    display: inline-block;  
    width: 3px;
    height: 3px;
    border-radius:50%;
    background: black;
}
li{
    
    height: 10px;
    width:150px;
    list-style: none;
    float: left;
}
.fx{
    
    position: relative;
    left: 220px;
    top:-20px;
}
.ys3{
    position: relative;
    display: inline-block;
    left:-150px;    
    width: 20px;
    height: 17px;
    background:rgb(255, 0, 0);
    font-size:10px;
    color:white;
    text-align: center;
}
.ys1{
    position: relative;
    display: inline-block;
    left:-150px;    
    width: 20px;
    height: 17px;
    background: rgb(160, 20, 20);
    font-size:10px;
    color:white;
    text-align: center;
}
.ys2{
    position: relative;
    display: inline-block;
    left:-150px;    
    width: 20px;    
    height: 17px;
    background: rgb(221, 9, 9);
    font-size:10px;
    color:white;
    text-align: center;
}
.ys{
    position: relative;
    display: inline-block;
    left:-150px;    
    width: 20px;
    height: 17px;
    background: rgb(224, 224, 55);
    font-size:10px;
    color:white;
    text-align: center;
}
.text{
    position: relative;
    float: left;
    left: 0px; 
    list-style: none;
}
.rankb{
    position: relative;
    left:230px;
    top:-20px;
}
.rankc{
    display: inline-block;
    position: relative;
    left:20px;
    font-size:18px;
}
.rankd{
    position: relative;
    left: 140px;
    top:-24px;
    font-size:18px;
    text-align: right;
}
.aaa{
    
    font-size: 20px;
    cursor:pointer;
    
}
.aaa:hover{
    color:red;
}
  
</style>
