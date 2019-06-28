<template>

        <div class='search' @click="display" >   
        <div class="search1">   
              <img src="../assets/ss.png" alt="" class="picture2">
        <input type="text" v-model="data" :msg=data placeholder="搜索"  @click="change" @keyup.enter='display'><span class="cancel" @click="cancel">取消</span></div>
       <ul ><router-link tag="li" to="/search/dq"  class="song" > 单曲</router-link>
       <router-link tag="li" to="/search/gs" class="song" > 歌手</router-link>
       <router-link tag="li" to="/search/zj" class="song" > 专辑</router-link>
       <router-link tag="li" to="/search/mv" class="song" >视频</router-link>
       <router-link tag="li" to="/search/gd" class="song" >歌单</router-link></ul>
       <router-view ref="child"  @ply='play'></router-view>
        </div>
</template>


<script>

import $ from 'jquery'

 

export default {
           data(){
        return {
                data:undefined,
               
                idx:undefined,
        }
         },
         methods:{
                 change(){
               $('input').css({'width':'90%'});
               $('.cancel').css({'display':'inline-block'})},
               display(){
                      
                     if(this.data){
                         
                        this.$refs.child.get&&this.$refs.child.get(this.data)
                    this.$refs.child.get1&&this.$refs.child.get1(this.data)//d调用子组件方法
                    this.$refs.child.get2&&this.$refs.child.get2(this.data)
                    this.$refs.child.get3&&this.$refs.child.get3(this.data)
                    this.$refs.child.get4&&this.$refs.child.get4(this.data)
                         
                 
               
               }},
               cancel(){
                this.data=undefined;
                 $('input').css({'width':'99%'});
               $('.cancel').css({'display':'none'})
               },
               play(id){
                this.$emit('ply',id)
               },

              current(){
       switch (value){
        case 0:this.idx =1; break;
        case 1:this.idx =2; break;
        case 2:this.idx =3;break;
        case 3:this.idx =4;break; }  
              }
 }}
</script>


<style>
        .song{
        position: relative;
        top:0px;
        list-style: none;
        float: left;
        left: -15px;
         margin-left: 10%;
        }
        .song:hover{
                cursor: pointer;
        }
        .router-link-exact-active{
       
          font-weight: 400px;
         color: white;
        
        }
    .search{
            position: relative;
        background:wheat;
       width: 100%;
       top:150px;
    
        
    }
    .picture2{
            position: relative;
            width: 50px;
            height:50px;
            left:-10px;
            top:23px;
            z-index:999;
            
    }
    .search1{
            position: relative;
            background: silver;
            top:0px;
            width: 100%;
            height: 10%;
            
           
    }
    input{
            position: relative;
            top:-20px;
            width: 99%; 
            text-indent: 30px; 
            left:1px;
            height: 30px;
    }
    .cancel{
         position:relative;
        display: none;
         top:-20px;
         z-index: 999;
         width: 32px;
         height: 30px;
         left:2px;
         color:black;
         
    }
</style>

