<template>
  <div id="app">
    <div class="lyric">
      <span class="delete" @click="dlt"></span>
      <img src="" alt="" class="lyric1">
      <div class="bkimg">
      <img src="" alt="" class="bkimg1"></div>
      <p class="lyric2"><ul>
        <li class="lyc" v-for="(item,index) in gc" :key=index>{{item}}</li>
      </ul></p>
    </div>
    <div class="songlist">
       <span class="allstore">全部收藏</span>
       <span class="allsc">全部删除</span>
      <ul class="bflb1">
        <div class="lbdiv">
      <li class="lbli">凉凉</li>
      <li class="lbli">张碧晨</li>
      <span class="onedlt"></span></div></ul>
      <span class="gb" @click="bflb(2)">关闭</span>
    </div>
    <div class="all">
    <router-link tag="div"  to="../news"  > <span  @click="change(0)"><div :class='idx ==1?"img a1":"img a"'> </div>精品<div :class='idx ==1 ?"selected":""'></div></span></router-link>
    <router-link  tag="div" to="../collect"><span  @click="change(1)"><div :class='idx ==2?"img b1":"img b"'></div>榜单<div  :class='idx ==2 ?"selected":""'></div></span></router-link>
    <router-link   tag='div' to="../search"><span  @click="change(2)"><div :class='idx ==3?"img c1":"img c"'></div>搜索<div  :class='idx ==3 ?"selected":""'></div></span></router-link>
    <router-link  tag='div' to="../person"><span  @click="change(3)"><div :class='idx ==4?"img d1":"img d"'></div>我的<div  :class='idx ==4?"selected":""'></div></span></router-link></div>
    <router-view @ply='play'>
    </router-view>
     <div class="play">
     <span ><img src="" alt="" class="picture" @click="lyric"></span>
       <div class="alll"> <div class="current">0:00</div><div class="jdt"><div class="jdt1"><span class="tz" @mousedown="tz"></span></div></div><div class="duration">4:30</div></div>
        <audio src="" class="audio"  loop = 'true'  ></audio>
      <span :class='flag>0?"onplay":"noplay"' @click="control" ><img src="" alt="" class="image"></span>
      <span :class='flag1==1?"type way0":flag1==2?"type way1":"type  way2"'  @click="way" ><img src="" alt=""></span>
      <span class="syq"></span><span class="xyq"></span>
      <span class="bflb" @click="bflb(1)"></span>
      <span class="exit" @click="exit"></span>
    </div>
  </div>

</template>

<script>
 var audio = document.getElementsByTagName('audio')[0];
import $ from 'jquery'
export default {
  name: 'App',
  data(){
    return {
      idx:1,
      flag:1,
      flag1:1,
      flag2:true,
      timer:undefined,
      id:undefined,
      gc:undefined,
      time:undefined,
    }
  },
  methods:{
    change(value){
       switch (value){
        case 0:this.idx =1; break;
        case 1:this.idx =2; break;
        case 2:this.idx =3;break;
        case 3:this.idx =4;break;
       }},
       control(){
         this.flag=-this.flag
        let audio = document.getElementsByTagName('audio')[0]
        $('span').hasClass('onplay')?$('.picture').css({'animation':'none'}):$('.picture').css({'animation':'xz 5s linear infinite'})         
           $('span').hasClass('noplay')&&audio.play()
           $('span').hasClass('onplay')&&audio.pause()
           console.log(audio.duration)
          },

       play(id){
         console.log(id)
         if(id.song){    
           console.log(id.song)
            clearInterval(this.timer)
          let myself = this
           let url=`https://api.imjad.cn/cloudmusic/?type=song&id=${id.song}`
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
             myself.id =data.data[0].id
            let audio = document.getElementsByTagName('audio')[0];
            if($('audio').prop('currentSrc')!=data.data[0].url)
           {
              console.log(1)
             $('audio').prop({'src':data.data[0].url})
            $('.picture').prop({'src':id.img})
            $('.picture').css({'animation':'xz 15s linear infinite'})
             let odiv = document.createElement('div')
             $('.play').animate({'opacity':'1'},1000,'linear').css({'z-index':'999'})      
                     audio.play() 
                     setTimeout(()=>{
                       let timeall = audio.duration
                       let second = Math.floor(timeall%60)<10?'0'+ Math.floor(timeall%60):Math.floor(timeall%60)
                      let time = parseInt(timeall/60) + ':' +  second
                        $('.duration')[0].innerHTML = time        
                     },400)
                     myself.timer = function start(){
                         if(!myself.flag2)return;
                         let crttime = audio.currentTime
                       let second = Math.floor(crttime%60)<10?'0'+ Math.floor(crttime%60):Math.floor(crttime%60)
                         let  time = parseInt(crttime/60) + ':'+ second
                         $('.current')[0].innerHTML = time
                         let jdt = crttime/audio.duration* $('.jdt')[0].clientWidth
                          $('.jdt1').css('width',jdt)
                          if(myself.flag>0){
                           crttime !=audio.duration?$('.picture').css({'animation':'xz 15s linear infinite'}):$('.picture').css({'animation':'none'})}
                           setTimeout(() =>{start()},900);} 
                           myself.timer()        
                     }
           else  {             
             audio.play()
           console.log(audio.duration)
             $('.play').animate({'opacity':'1'},1000,'linear').css({'z-index':'999'})          
            $('.picture').css({'animation':'xz 15s linear infinite'})
           }
          },
          error:function (e) {
                console.log('error');
              }
        })}
          else { 
            let audio = document.getElementsByTagName('audio')[0];
            $('.picture').css({'animation':'none'})
            audio.pause()}    
       },
         exit(){
             $('.play').animate({'opacity':'0','z-index':'-999'},1000,'linear')
         },
         dlt(){
           $('.lyric').css({'display':'none'})
         },
          bflb(number){
                number==1?$('.songlist').css({'display':'inline-block','z-index':5000}):
                $('.songlist').css({'display':'none','z-index':-999})
              },

         tz(e){
           document.body.onmousemove=(e)=>{
              this.flag2 = false
           let width = (e.clientX  - $('.jdt')[0].offsetLeft)>$('.jdt')[0].clientWidth?
           $('.jdt')[0].clientWidth:e.clientX  - $('.jdt')[0].offsetLeft
            $('.jdt1').css('width',width) 
            console.log(e.clientX, $('.play')[0].clientWidth,$('.jdt')[0].offsetLeft)
              $('.tz').add($('body')).one('mouseup',()=>{
                 document.body.onmousemove =null
                 let audio = document.getElementsByTagName('audio')[0];
                 audio.currentTime = width/$('.jdt')[0].clientWidth*audio.duration
                 this.flag2 = true
                 this.timer()            
              }) }},
              way(){
                clearTimeout(timer)
                 this.flag1=(this.flag1+1)%3
                 let  odiv = document.createElement('div');
                 odiv.className = 'way';
                 this.flag1==1?odiv.innerHTML='随机播放':this.flag1==2?odiv.innerHTML='列表循环':odiv.innerHTML='单曲循环'
                 $('.play').append(odiv)
                let timer = setTimeout(()=>{
                   $('.way').css({'display':'none'})
                 },1000)
              },
              lyric(){
               $('.lyric1').prop('src',$('.picture').prop('src'))
               $('.bkimg1').prop('src',$('.picture').prop('src'))
               $('.lyric1').css({'animation':'xz 15s linear infinite'})
                let myself = this
                  let url= `https://v1.itooi.cn/netease/lrc?id=${this.id}`;
                   $.ajax({
               url:url,
          type:"get",
          dataType:'html',
          scriptCharset: 'GBK',
          beforeSend:  function(xhr){
         xhr.setRequestHeader('Access-Control-Allow-Origin','*') },
          success: function(data){
            console.log(data)
            let gc = []
            let sj = []
           let a =data.split('[')
            a.forEach((ele,index)=>{
               sj.push( (a[index].split(']')[0].split('.'))[0])
               gc.push(a[index].split(']')[1])
            })   
              myself.gc=gc;
               myself.time =sj;
               $('.lyric').css({'display':'inline-block'})   
               let audio = document.getElementsByTagName('audio')[0];
                       $('.lyc').css({'color':'black'})
               let play= function gcc(){
                 let i = 0
                  let crttime = audio.currentTime
                  crttime ==audio.duration?$('.picture').css('animation','none'):$('.lyric1').css({'animation':'xz 15s linear infinite'})
                  let second = Math.floor(crttime%60)<10?'0'+ Math.floor(crttime%60):Math.floor(crttime%60)
                  let  time = '0'+parseInt(crttime/60) + ':'+ second           
                     myself.time.forEach((ele,index)=>{  
                       if (ele == time){
                           $('.lyc').css({'top': -(index+1)*20+100+'px'})
                           $('.lyc').eq(index-1).css({'color':'black'})
                           $('.lyc').eq(index).css({'color':'white'})
                       }});
                       setTimeout(()=>gcc(),400)
                       }
                       play()},
          error:function (e) {
                console.log('error');
              } });  }
    }
  }
 
</script>

<style>
*{
  padding: 0px;

  margin:0px;
}
.songlist{
  position: fixed;
  display: none;
  top: 50% ;
  width: 450px;
  height: 500px;
  z-index:-999;
  background:white;
  border-radius: 3%;
  border: 1px solid black;

}
.onedlt{
   position: relative;
       display: inline-block;
       width: 30px;
       height: 30px;
       margin-top:-15px;
       margin-left: 150px;
       top:15px;
       background-size: cover;
  background-image:url(./assets/tc.png);
}
.lbli{
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
.lbdiv{
  width: 100%;

}
.lbdiv :hover{
  background: gray;
}
.allstore{
   position: relative;
   display: inline-block;
  width: 70px;
  height: 50px;
  left: 30%;
  top:20px;
}
.allsc{
 position: relative;
   display: inline-block;
  width: 70px;
  height: 50px;
  left: 35%;
  top:20px;
}
.gb{
   position: relative;
   display: inline-block;
  width: 70px;
  height: 50px;
  top:290px;
  left: 200px;
}
.delete{
  position: absolute;
  width:40px;
  height: 40px; 
  left: 88%;
  background-image: url(./assets/tc.png);
  background-size:cover;

}
.lyc{
  position: relative;
  list-style:none;
  text-align: center;
  top:300px;
}
.lyric{
    position:fixed;
    width: 450px;
    height: 100%;
  display:none;
    background:rgb(189, 182, 182);
    z-index: 5000;
}
.lyric1{
 position: relative;
width: 200px;
height: 200px;
top:18%;
left:27%;
border-radius: 50%;
background: red;
}
.lyric2{
  overflow: hidden;
  position: relative;
  display: inline-block;
  width:70%;
  height: 30%;
  top:200px;
  left: 16%;

  
}
.bkimg{
  position: absolute;
  filter: blur(40px);
  z-index:-1;
  left: 0px;
  display: inline-block;
   width: 450px;
   height: 100%;

}
.bkimg1{
  background-size: cover;
  width: 100%;
  height: 100%;
  }

.way{
   position: absolute;
   left:46%;
   top:10px;
   width:70px;
   height:25px;
   text-align: center;
   background: blueviolet;
   color:white;
}
.exit{
   position: relative;
   width:40px;
   height: 40px;  
   background-image: url(./assets/tc.png);
  top:-210px;
   background-size:cover;   
   left: 30%;
   

}
.audio{
  position: relative; 
  display: inline-block;
  top:-400px;

}
.alll{
  width: 100%;
  height: 100%;
}
.current{
  position: relative;
  width:40px;
  height: 40px;
   top:-70px;
   left: 25%;

}
.duration{
   position: relative;
  width:40px;
  height: 40px;
   top:-70px;
   left: 28%;
}
.jdt{
  position: relative;
  width:45%;
  height: 3px;
  background: rgb(75, 75, 75);
   top:-60px;
   left: 25%;
}
.tz{
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background:white;
  top:-10px;
  left: 100%;
  
}
.jdt1{
  position: relative;
  width:0px;
  height: 3px;
  background: white;
   left: -100;
   z-index: 999;
}
.type{
  position: relative;
   width:50px;
   height: 50px; 
   left: 10%;
  top:-185px;
   background-size:cover;   
}
.syq{
    position: relative;
   width:50px;
   height: 50px; 
   left: 15%;
  top:-150px;
   background-size:cover; 
   background-image: url(./assets/syq.png)
}
.xyq{
   position: relative;
   width:50px;
   height: 50px; 
   left: 25%;
  top:-150px;
   background-size:cover; 
   background-image: url(./assets/xyq.png)
}
.bflb{
   position: relative;
   width:50px;
   height: 50px; 
   left: 30%;
  top:-150px;
   background-size:cover; 
   background-image: url(./assets/bflb.png)
}
.way0{
   background-image: url(./assets/sj.png)
}
.way1{
   background-image: url(./assets/sx.png)
}
.way2{
   background-image: url(./assets/xh.png)
}

.noplay{
   position: relative;
   width:50px;
   height: 50px; 
   left: 50%;
   background-image: url(./assets/zt1.png);
  top:-185px;
   background-size:cover;   
}
.onplay{
    position: relative;
   width:50px;
   height: 50px; 
   left: 50%;
   background-image: url(./assets/bf1.png);
  top:-185px;
   background-size:cover; 
}
.picture{
   position: relative;
   width:100px;
   height: 100px; 
  top:0px;
   background-size:cover;
   border-radius: 50%;
   animation: xz 5s  linear infinite ;
   
}
@keyframes xz{
   0%{transform: rotate(0deg)}
   100%{transform: rotate(360deg)}
}
@keyframes tc{
   0%{opacity:1;}
   99%{opacity:0;}
}
.play{
  opacity: 0;
  position: fixed;
  top: 88% ;
  width: 450px;
  height: 100px;
  z-index: -999;
  background: blueviolet;
}

.selected{
      position:relative;
      width: 80px;
      height:10px;
      background:white;
      z-index: 4000;
      margin-left: -80px;
      top:40px
      
     
}
span{
 position: relative;
 display: inline-block;
 height: 80px;
 width:90px;
 
 
}

#app {
  margin: auto;
  position: relative;
  width: 450px;
  height: 170px;
 

}
.all{
  position: fixed;
  top:0px;
   font-size: 20px;
    z-index: 4000;
  color: white;
   height: 170px;
  width:450px;
  background:blueviolet;
  line-height: 130px;
  
  
}
div{
    display: inline-block;
    
}
span:hover{
      cursor: pointer;
}

.img{
 position: relative;
  top:8px;
   width:50px;
   height:50px;
   color: white;
   background-size:cover;
}
.a{

  background-image: url(./assets/yy.png)
}
.a1{
  background-image: url(./assets/yy1.png)

}
.b{
  background-image: url(./assets/tj.png)
}
.b1{
  background-image: url(./assets/tj1.png)
}
.c{
  background-image: url(./assets/ss.png)
}
.c1{
  background-image: url(./assets/ss1.png)
}
.d{
  background-image: url(./assets/wd.png)
}
.d1{
  background-image: url(./assets/wd1.png)
}



</style>
