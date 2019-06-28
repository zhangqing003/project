   <template>
         <div class="jpgd">
                 <router-view ref="child" @ply='play'></router-view>
          <ul class="jpgda"><router-link to="/news/jpgd" ><li class="jp"  v-for="(item,index) in dataall"   @click="jp(index)">
                  <img :src='item.coverImgUrl'  alt="" class="jptp">
          <div><span class="tag">{{item.tag}}</span>
          <span class="describe" >{{item.name}}</span>
          <div class="name">{{item.creator.nickname}}</div>
          <div class="describe1">{{item.copywriter}}</div>
          </div></li></router-link></ul>
        </div>
</template>



<script>
const  save ={
      get:function(){
      return  localStorage.getItem('gd')
      },
      set:function(value){
       return  localStorage.setItem('gd',value)
      }
}
import $ from 'jquery'

export default {
        data(){
        return {
         dataall:undefined,
        }  },

        created:function(){
                if(!this.dataall){
               let  myself = this
                  $.ajax({
          url:'https://v1.itooi.cn/netease/songList/highQuality?cat=全部&pageSize=100',
          type:"get",
          dataType:'json',
          scriptCharset: 'GBK', 
          success: function(data){
             myself.dataall=data.data
         
          },
          error:function (e) {
                console.log('error');
   }   })}},
  methods:{
          jp(index){
           $('.jpgda').css('display','none')
        setTimeout(()=>{ this.$refs.child.render(this.dataall[index].id) },100)
          },
          play(id){
                  this.$emit('ply',id)
          },
          sc(){
        console.log(1)
          }
  }
}
</script>


<style>
.describe1{
        position: relative;
        width: 300px;
        top:-105px;
        height: 40px;
        left: 110px;
        color: rgb(63, 61, 61);
       overflow: hidden;
       
       
      
}

.describe{
        width: 250px;
        top:-105px;
        left: 110px;
        height: 40px;
        line-height: 40px;
        color: black;
         
         overflow: hidden;
        text-overflow: ellipsis;
      
       
}
.name{
        position: relative;
        width: 40%;
        top:-110px;
        left: 110px;
        height: 20px;
        color: gray;
        line-height: 40px;
    
}
.tag{
        display:inline-block;
        width: 70px;
        height: 40px;
        top:-110px;
        left: 110px;
        line-height: 50px;
        border: 1px solid red;
        color: red;
          text-align: center;
        line-height: 40px;
}
.jpgd{
        width: 100%;   
}
.jptp{
        display: inline-block;
        width: 100px;
        top:100px;
        height: 100px;
        left: 0px;
}
   .jp{
        position: relative;
         top:155px;
        list-style: none;
        width: 100%;
      height: 140px;
      left: -58px;
         margin-left: 13%;
         text-align:left;
         background: wheat;      
   }
   .jp:hover{
           background:darkgrey;
   }
</style>

