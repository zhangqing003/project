<template>
        <div class="div1">
          <ul ><li class="gs"  v-for="(item,index) in dataall"><img :src="item.picUrl" alt="" class="tp"><span class="text">{{item.name}}</span></li></ul>
        </div>
</template>
<script>
import $ from 'jquery'
export default {
           data(){
               return {
                    dataall:undefined
                    }
           },
           methods:{
              get1(value){
                let myself = this
                let url=`https://v1.itooi.cn/netease/search?keyword=${value}&type=singer`
   $.ajax({
          url:url,
          type:"get",
          dataType:'json',
          scriptCharset: 'GBK',
          success: function(data){
                  console.log(data)
             myself.dataall=data.data.artists
             console.log(myself.dataall)
            
          },
          error:function (e) {
                console.log('error');
              }
        }
    )}}
}
</script>


<style>
.text{
        display:inline-block;
        top:-20px;
        left: 10px;
        width: 300px;
        height: 50px;
        line-height: 50px;
}
.div1{
        width: 99%;
}
.tp{
        display: inline-block;
        width: 50px;
        top:-2px;
        height: 50px;
        left: 0px;
}
   .gs{
        position: relative;
         top:7px;
         margin-top:2px;
        list-style: none;
        width: 100%;
      height: 50px;
      left: -55px;
         margin-left: 13%;
         text-align:left;      
   }
   .gs:hover{
           background:darkgrey;
   }
</style>
