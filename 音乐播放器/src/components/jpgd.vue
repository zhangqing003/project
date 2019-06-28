<template>
     <ul class="aaa">
        <span class="ht" @click="back"></span> <span class="sc" @click="sc"></span>
                <li class="liii">标题</li>
                <li class="liii">歌手</li>
                <li class="liii">时长</li>
                <li class="liii">操作</li>
                <ul class="ull" v-for=" (item,index) in dataall">
                    <div class="divv">
                    <li class="lii2">{{item.name}}</li>
                    <li class="lii2" v-if="item.artists.length==1">{{item.artists[0].name}}</li>
                 <li class="lii2" v-if="item.artists.length>1">{{item.artists[0].name}}/{{item.artists[1].name}}</li>
                 <li class="lii2 zz">4:40</li>
                <li class="lii2 zzz">
                    <span  class='span1' @click="play(index)"></span>
                    <span class='span' @click="change(index)"></span><span class="download">下载</span></li></div>
             </ul>

        </ul>
</template>
<script>
import $ from 'jquery'
export default {
        data(){
            return{
                dataall:[],
                imglist:[],
                songlist:[],
                storeid:undefined,
                storename:undefined,
                }
        }, 
     
        methods:{
        render(id) {
            console.log(id)
            $('.rankform1').css({'display':'none'})
                 let myself = this    
                 this.storeid=id;
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
              myself.storename=data.data.name
             myself.dataall=data.data.tracks     
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
                 this.imglist.push(this.dataall[i].album.picUrl)
                 this.songlist.push(this.dataall[i].id)
                flag=false}}
              if(!$('.span1').eq(index).hasClass('span1xin'))
             { this.$emit('ply',{song:this.songlist[index],img:this.imglist[index]})
                this.songlist=[]
                this.imglist=[];
             }
               $('.span1').removeClass('span1xin')
             $('.span1').eq(index).addClass('span1xin')
             $('.span1xin').one('click',()=>{
                 $('.span1').eq(index).removeClass('span1xin')
                this.$emit('ply',false)    
             })
            },
            back(){
                this.$router.go(-1) //返回上次路由  
           $('.jpgda').css('display','inline-block')
            },
            sc(){
                 this.$store.commit('cgdata',[this.storename,this.storeid]) 
            }
  }
}

</script>

<style>
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
.sc{
  position:absolute;
    display: inline-block;
     width: 40px;
     left: 85%;
    height: 40px;
    top:150px;
    background-image: url(../assets/sc.png);
    background-size: cover
}
.aaa{
  background: wheat;
}
.download{
    display: inline-block;
    height: 10px;
    
}
.zzz{
    cursor: pointer;
}
.zz{
    position: relative;
    left: 30px;
}
   .liii{
       position: relative;
        top:210px;
        list-style: none;
        float: left;
        width: 50px;
         margin-left: 13%;
         left:-20px;
         text-align: center;
         background:blueviolet;
          border:1px solid black;
          color: white;
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
    text-overflow:ellipsis;
    white-space: nowrap;
   }
   .span{
       position: relative;
       display: inline-block;
       width: 30px;
       height: 30px;
       margin-top:-15px;
       margin-left: -6px;
       top:5px;
       background-size: cover;
       background-image: url(../assets/xin.png)
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
   .spanxin{
        position: relative;
       width: 30px;
       height: 30px;
       margin-top:-15px;
       margin-left:-6px;
       top:5px;
       background-size: cover;
       background-image: url(../assets/xin1.png)
   }
   .divv{
     margin-top: -4px;
     position: relative;
     top:210px;
       width: 100%
   }
   .divv:hover{
       background:darkgrey;
   }
 
</style>
