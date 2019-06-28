<template>
     <div class="rankform">
             <router-view  ref="child" @ply='play'></router-view>
          <ul class="rankform1"><router-link tag="div" to="/collect/gsgq"><li class="rk"  v-for="(item,index) in rankarr" @click="gq(index)"><span  :class='index<3?"rkk":"rkka"' >{{index+1}}</span> <img :src="item.picUrl" alt="" class="rktp"><span class="content">{{item.name}}</span></li></router-link></ul>
          
        </div>
        
</template>

<script>
import $ from 'jquery'
export default {
         data(){
          return {
             rankarr:[],
             start:undefined,
          }
         },
         created:function(){
               let  myself = this
                  $.ajax({
          url:'https://v1.itooi.cn/netease/artist/top?page=0&pageSize=50',
          type:"get",
          dataType:'json',
          scriptCharset: 'GBK', 
          success: function(data){
             myself.rankarr=data.data
          },
          error:function (e) {
                console.log('error');
   }   })},
  methods:{
        gq(index){ 
                $('.rankform1').css('display','none')
        setTimeout(()=>{ this.$refs.child.render(this.rankarr[index].id) },100)
        },
        play(id){
           this.$emit('ply',id)
        }
  }
}
</script>


<style>

.rkk{
left: 5px;
color: red; 
width: 20px;
top:-20px;
}
.rkka{
left: 5px;
 color:black; 
width: 20px;
top:-20px;  
}
    .content{
        display:inline-block;
        top:-20px;
        left: 10px;
        width: 300px;
        height: 50px;
        line-height: 50px;
}
.rankform{
         position: relative;
        top:170px;
        width: 100%;
        background: wheat;
}
.rktp{
        display: inline-block;
        width: 50px;
        top:-2px;
        height: 50px;
        left: -5px;
}
   .rk{
        position: relative;
         top:7px;
         margin-top:2px;
        list-style: none;
        width: 118%;
      height: 50px;
      left: -47px;
     
         margin-left: 13%;
         text-align:left;      
   }
   .rk:hover{
           background:darkgrey;
   }
</style>

