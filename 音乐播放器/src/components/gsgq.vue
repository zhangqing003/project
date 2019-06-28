<template>
      <div class="gsgq" >
       <span class="ht1" @click="back"></span> <span class="sc1"></span>
          <ul ><li class="music"  v-for="(item,index) in dataall" ><img :src="item.al.picUrl" alt="" class="gspic"><span class="gqtext">{{item.name}}</span> <span  class='gqspan'  @click="play(index)"></span></li></ul>
        </div>
    
</template>
<script>
import $ from 'jquery'

export default {
        data(){
            return{
                dataall:[],
                imglist:[],
                songlist:[],
                }
        }, 
     
        methods:{
        render(id) {
            $('.rankform1').css({'display':'none'})
                 let myself = this
                
         let url=`https://v1.itooi.cn/netease/song/artist?id=${id}`
   $.ajax({
          url:url,
          type:"get",
          dataType:'json',
          scriptCharset: 'GBK',
          beforeSend:function(xhr){  
             xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')               
          },
          success: function(data){ 
             myself.dataall=data.data
             console.log(myself.dataall )
          

          },
          error:function (e) {
                console.log('error');
              }
        }
    )   },
    play(index){
               let flag = true;
                 if(flag){
             for (let  i=0;i< this.dataall.length;i++){
                 this.imglist.push(this.dataall[i].al.picUrl)
                 this.songlist.push(this.dataall[i].id)
                flag=false}}
              if(!$('.gqspan').eq(index).hasClass('gqspanxin'))
             { this.$emit('ply',{song:this.songlist[index],img:this.imglist[index]})
                this.songlist=[]
                this.imglist=[];
             }
               $('.gqspan').removeClass('gqspanxin')
             $('.gqspan').eq(index).addClass('gqspanxin')
             $('.gqspanxin').one('click',()=>{
                 $('.gqspan').eq(index).removeClass('gqspanxin')
                this.$emit('ply',false)    
             })
            },
            back(){
                this.$router.go(-1) //返回上次路由  
                 $('.rankform1').css('display','inline-block')
            }
  }
}

</script>

<style>

.gqspan{
     position: relative;
       display: inline-block;
       width: 30px;
       height: 30px;
       margin-top:-15px;
       left: 20px;
       top:-20px;
       background-size: cover;
       background-image: url(../assets/zt.png)
}
.gqspanxin{
     position: relative;
       display: inline-block;
       width: 30px;
       height: 30px;
       margin-top:-15px;
       top:-20px;
       background-size: cover;
       background-image: url(../assets/bf1.png)
}
.ht1{
    
    display: inline-block;
    width: 40px;
    height: 40px;
    background-image: url(../assets/ht.png);
    background-size:cover;
}
.sc1{
    display: inline-block;
     width: 40px;
     left: 76%;
    height: 40px;
    background-image: url(../assets/sc.png);
    background-size: cover
}

 .gqtext{
        display:inline-block;
        top:-20px;
        left: 10px;
        width: 300px;
        height: 50px;
        line-height: 50px;
}
.gsgq{
        width: 99.5%;
}
.gspic{
        display: inline-block;
        width: 50px;
        top:-2px;
        height: 50px;
        left: -5px;
}
   .music{
        position:relative;
         top:0px;
         margin-top:2px;
        list-style: none;
        width: 99%;
      height: 50px;
      left: -55px;
         margin-left: 13%;
         text-align:left;      
   }
   .music:hover{
           background:darkgrey;
   }

</style>
