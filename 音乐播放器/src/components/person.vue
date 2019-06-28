<template>
<div class="grall">
        <div class="grall1">
        <span class="grc"  @click="display(1)"></span>
        <ul class="gr">我创建的歌单
                <li class="grb gr1"></li>         
        </ul>
      <span class="grc" @click="display(2)"></span><ul class="gr a">我收藏的歌单
             <div  v-for=" (item,index) in $store.state.name"><router-link tag='div' to="/person/scgq"><li class="grb gr2" @click="next(index)">{{item}}</li></router-link><span class="dltsc"></span></div>   
      </ul></div>
       <router-view ref="child"></router-view>
</div>
</template>
<script>
import $ from 'jquery'
export default {
         data(){
        return{
        value:1
        }
         },
         methods:{
           display(value){ 
           value==1?this.value=1:this.value=2
        value==1?$('.gr1').css('display','inline-block'):
        $('.gr2').css('display','inline-block')
        $('.grc').one('click',()=>{
             this.value==1?$('.gr1').css('display','none'):
             $('.gr2').css('display','none')
               })       
           },
           next(index){
                $('.grall1').css('display','none');
                setTimeout(()=>{ this.$refs.child.render(this.$store.state.list[index]) },100)
           }
         }
}
</script>


<style>
.grall{
position:absolute;
left:0px;
top:170px;
width: 100%;
background: wheat;      
}
.gr{
 position: relative;
 top:4px;
 left: 20px;
}
.dltsc{
  width: 40px;
  height: 40px;
  top: 10px;
  background-image: url(../assets/tc.png);
  background-size: cover;

}
.grc{
position: absolute;
 width: 20px;
 height: 30px;
 background-image: url(../assets/kz.png);
 background-size: cover;
}
.grb{
position: relative;
display:none;
top:5px;
width: 100%;
}



</style>

