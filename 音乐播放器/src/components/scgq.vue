<template>
    <div>
        <ul class="ull" v-for=" (item,index) in dataall">
                    <div class="divv">
                    <li class="lii2">{{item.name}}</li>
                    <li class="lii2" v-if="item.artists.length==1">{{item.artists[0].name}}</li>
                 <li class="lii2" v-if="item.artists.length>1">{{item.artists[0].name}}/{{item.artists[1].name}}</li>
                <li class="lii2 zzz">
                    <span  class='span1' @click="play(index)"></span>
                   <span class="scgq1"></span></li></div>
             </ul>
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
          render(id) {
              console.log(id)
                 let myself = this    
         let url=`https://v1.itooi.cn/netease/songList?id=${id}`
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
             myself.dataall=data.data.tracks     
             console.log(myself.dataall )
          

          },
          error:function (e) {
                console.log('error');
              }
        }
    )   },
      }
}
</script>
<style>
.divv{
     margin-top: -4px;
     position: relative;
     top:210px;
       width: 100%
   }
.divv:hover{
     background:darkgrey;
   }
     .span1{
       position: relative;
       display: inline-block;
       width: 30px;
       height: 30px;
       margin-top:-15px;
       top:5px;
       background-size: cover;
       background-image: url(../assets/zt.png)
   }
    .span1xin{
        position: relative;
       width: 30px;
       height: 30px;
       margin-top:-15px;
       top:3px;
       background-size: cover;
       background-image: url(../assets/bf.png)
   }
   .dddd{
       top:300px;
   }
   .scgd1{
        background-image: url(../assets/tc.png);
        display: inline-block;
        height: 30px;
        width: 30px;
        background-size: cover;
        
   }

   .lii2{
        position: relative;
        top:0px;
        list-style: none;
        float: left;
         margin-left: 5px;
         margin-top:10px;
         width: 103px;
        overflow: hidden;
        z-index: 999;
        text-overflow:ellipsis;
        white-space: nowrap;
   }
   .ht{
         position:absolute;
        display: inline-block;
         width: 40px;
         height: 40px;
         top:150px;
        left: 0px;
        background-image: url(../assets/ht.png);
        background-size:cover;
}
</style>