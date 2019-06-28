<template>
         <div class="div2">
          <ul ><li class="zj"  v-for="(item,index) in dataall"><img :src="item.picUrl" alt="" class="tp1"><span class="text1">{{item.name}}</span></li></ul>
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
                get2(value){
                let myself = this
                let url=`https://v1.itooi.cn/netease/search?keyword=${value}&type=album`
   $.ajax({
          url:url,
          type:"get",
          dataType:'json',
          scriptCharset: 'GBK',
          success: function(data){
                  console.log(data)
          myself.dataall=data.data.albums    
      
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
.text1{
        display:inline-block;
        top:-20px;
        left: 10px;
        width: 300px;
        height: 50px;
        line-height: 50px;
}
.div2{
        width: 99%;
}
.tp1{
        display: inline-block;
        width: 50px;
        top:-2px;
        height: 50px;
        left: 0px;

}
   .zj{
        position: relative;
         top:10px;
         margin-top:2px;
        list-style: none;
        width: 100%;
      height: 50px;
      left: -55px;
         margin-left: 13%;
         text-align:left;      
   }
   .zj:hover{
           background:darkgrey;
   }
  
</style>
