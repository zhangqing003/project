<template>
  <div id="app">
    <div class="all">
    <router-link to="./front" tag="div" class="before add">前台页面</router-link>
    <router-link to="./end" tag="div" class="after add">后台页面</router-link>
    </div>
    <router-view/>
    </div>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
  
}
.all{
  width: 100%;
  height: 150px;
  background: rebeccapurple;
}
 .before  {
   position:absolute;
   left: 40%;
   top: 50px;
    width: 100px;
    height:50px;
    color:white;
    font-size: 20px;
    border: 1px solid black;
    background: rgb(29, 230, 29);
    text-align: center;
    line-height: 50px;
    cursor:pointer;
  
}
.after  {
   position:absolute;
   left:50%;
   top: 50px;
    width: 100px;
    height:50px;
    color:white;
    border: 1px solid black;
    font-size: 20px;
    background: rgb(29, 230, 29);
    text-align: center;
    line-height: 50px;
    cursor: pointer;
  
}
</style>
