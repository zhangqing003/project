<template>
      <div class="div3">
          <ul  ><li class="mv"  v-for="(item,index) in dataall"><img :src="item.cover" alt="" class="tp3"><span class="text3     ">{{item.name}}</span></li></ul>
        </div>
</template>


<script>
import $ from 'jquery'

export default {
        data(){
        return {
         dataall:undefined,
        }
        },
        methods:{
         get3(value){
          let myself = this
        
         let url=`https://v1.itooi.cn/netease/songList/highQuality?cat=全部&pageSize=100`
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
             myself.dataall=data.result.mvs
            
          },
          error:function (e) {
                console.log('error');
              }
        }
    ) 
         }
        }
         
}
</script>


<style>
    .text3{
        display:inline-block;
        top:-20px;
        left: 10px;
        width: 380px;
        height: 50px;
        line-height: 50px;
}
.div3{
        width: 99.5%;
}
.tp3{
        display: inline-block;
        width: 50px;
        top:-2px;
        height: 50px;
        left: 0px;
}
   .mv{
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
   .mv:hover{
           background:darkgrey;
   }
</style>
