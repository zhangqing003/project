<template>
       <div class="div4">
          <ul ><li class="gd"  v-for="(item,index) in dataall"><img :src="item.coverImgUrl" alt="" class="tp4"><span class="text4">{{item.name}}</span></li></ul>
        </div>
</template>


<script>
import $ from 'jquery'
export default {
          data(){
         return {
        dataall:undefined,
         }},
         methods:{
                get4(value){
                let myself = this
                let url=`https://v1.itooi.cn/netease/search?keyword=${value}&type=songlist`
   $.ajax({
          url:url,
          type:"get",
          dataType:'json',
          scriptCharset: 'GBK',
          beforeSend:function(xhr){  
             xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')               
          },
          success: function(data){
                  console.log(data)
          myself.dataall=data.result.playlists    
             
          },
          error:function (e) {
                console.log('error');
              }
        }
    )
                }
         },
}
</script>


<style>
   .text4{
        display:inline-block;
        top:-20px;
        left: 10px;
        width: 380px;
        height: 50px;
        line-height: 50px;
}
.div4{
        width: 99%;
}
.tp4{
        display: inline-block;
        width: 50px;
        top:-2px;
        height: 50px;
        left: 0px;
}
   .gd{
        position: relative;
         top:10px;
         margin-top:2px;
        list-style: none;
        width: 100%;
      height: 50px;
      left: -59px;
         margin-left: 13%;
         text-align:left;      
   }
   .gd:hover{
           background:darkgrey;
   }
</style>
