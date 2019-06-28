<template>
            <ul>
                <li class="lii">标题</li>
                <li class="lii">歌手</li>
                <li class="lii">时长</li>
                <li class="lii">操作</li>
                <ul class="ull" v-for=" (item,index) in dataall">
                    <div class="div">
                    <li class="li2">{{item.name}}</li>
                    <li class="li2" v-if="item.ar.length==1">{{item.ar[0].name}}</li>
                 <li class="li2" v-if="item.ar.length>1">{{item.ar[0].name}}/{{item.ar[1].name}}</li>
                 <li class="li2 zz">4:40</li>
                <li class="li2 zzz">
                    <span  class='span1' @click="change1(index)"></span>
                    <span class='span' @click="change(index)"></span><span class="download">下载</span></li></div>
             </ul>

        </ul>
       
</template>
<script>
 import $ from 'jquery'
 
export default {
    data(){
        return{
            flag:1,
            flag1:true,
            dataall:undefined,
            imglist:[],
            songlist:[],
            
        }
    },
    methods:{
        change(index){
           $('.span').eq(index).addClass('spanxin')
             $('.spanxin').one('click',()=>{
                 $('.span').eq(index).removeClass('spanxin')
             })},
             change1(index){
                 let flag = true;
                 if(flag){
             for (let  i=0;i< this.dataall.length;i++){
                 this.imglist.push(this.dataall[i].al.picUrl)
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
            get(value){
                let myself = this
                let url=`https://v1.itooi.cn/netease/search?keyword=${value}&type=song&pageSize=50`
   $.ajax({
          url:url,
          type:"get",
          dataType:'json',
          scriptCharset: 'GBK',
          beforeSend:function(xhr){  
             xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')               
          },
          success: function(data){
              console.log(this)
             myself.dataall=data.data.songs
             console.log(myself.dataall)
             console.log(myself)
            },
          error:function (e) {
                console.log('error');
        }})}                  
 },
 props:['msg']
 
 }

</script>
  

<style>
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
   .lii {
       position: relative;
        top:5px;
        list-style: none;
        float: left;
        width: 50px;
         margin-left: 13%;
         left:-50px;
         text-align: center;
         background:blueviolet;
          border:1px solid black;
          color: white;
   }
   .li2{
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
   .div{
       width: 100%;
   }
   .div:hover{
       background:darkgrey;
   }
 
</style>
