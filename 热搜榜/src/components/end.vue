<template>
    <div>
        <div v-if="flag" class="alldiv"></div>
<div class="change-list">
<div class="change-page">
    <span>显示页数:</span>
    <input type="text" v-model="page" >
    <span class="span one" @click="cgpage">修改</span>
</div>
<div class="change-length">
    <span>显示长度:</span>
    <input type="text" v-model="cd" >
    <span class="span two" @click='cgpage'>修改</span>
</div>
<div class="change-title">
    <span>输入题目:</span>
    <input type="text" v-model='title'>
</div>
<div class="change-number">
    <span >输入数量:</span>
    <input type="text" v-model='nmb' >
    <span class="span threen" @click='arrpush' >添加</span>
</div>
</div>
 <div class="mutation" v-if="flag">
            <div class ='cgall'>修改界面</div>
            <div class='cg A'>事件名称 : <input type="text" v-model="title"></div>
            <div class='cg B'>点击量 : <input type="text" v-model="nmb"></div> 
            <div class="enter" @click='changeb'>确定</div>
            <div class="cancel" @click="changea">取消</div>
        </div>

<table >
    <ul class="ul1">    
        <li class="allli a">编号</li>
        <li class="allli b">题目</li>
        <li class="allli c">时间</li>
        <li class="allli d">点击量</li>
        <li class="allli e">操作</li> </ul>
        <ul class="allrender"  v-for="(item,index) in titlearr ">
            <li class="render 1">{{index+1}}</li>
            <li class="render 2" >{{item.title}}</li>
            <li class="render 3">{{item.time}}</li>
            <li class="render 4" >{{item.nmb}}</li>
            <li class="render 5">
                <span class="xg sp" @click="change(index)" >修改</span>
                <span class="sc sp" @click="del(index)">删除</span></li></ul>
    
</table>
    </div>
</template>

<script>

    const allstore = {
        set:function(value){
           return  localStorage.setItem('data',JSON.stringify(value))
        },
        get:function(){
           return  JSON.parse(localStorage.getItem('data'))
        }
    }
export default {
         data(){
             return { page:undefined,
                    cd:undefined,
                    title:undefined,
                    nmb:undefined,
                    titlearr: allstore.get()||[],
                        time:undefined,
                        flag:false,
                    idx:undefined,
                    }},
        methods: {
            arrpush(){  
                if(this.title&&this.nmb){ 
                    console.log(this)
                let time = new Date(); 
                this.time = time.getFullYear() +'/'+ time.getMonth() +'/'+ time.getDay()
                +'/'+ time.getHours()+':'+ time.getMinutes()+':'+time.getSeconds()
                 this.titlearr.push({title:this.title,nmb:this.nmb,time:this.time});
                allstore.set(this.titlearr)
                this.$store.commit('add',{ title:this.title,nmb:this.nmb})
                this.$store.commit('alldata1')

                this.title =undefined,
                this.nmb =undefined}
                else{
                    this.title = '事件' + Math.floor(Math.random()*1000);
                    this.time ='2019年5月24日-'+ Math.floor(Math.random()*100);
                    this.nmb = Math.floor(Math.random()*9999); 
                this.titlearr.push({title:this.title,nmb:this.nmb,time:this.time});
                 this.$store.commit('add',{ title:this.title,nmb:this.nmb})
                this.$store.commit('alldata1')

                this.title = undefined;
                this.nmb = undefined;
                allstore.set(this.titlearr)}    
            },
            del(index){
                this.titlearr.splice(index,1)
                allstore.set(this.titlearr)
                this.$store.commit('delete',index)
                this.$store.commit('alldata1')


            },
            change(index){
                console.log(index)
                this.flag = true; 
                this.idx = index;
            },
            changea(){
                this.flag=false;
            },
            changeb(){
                if(this.title&&this.nmb){
                this.titlearr[this.idx].title = this.title;
                this.titlearr[this.idx].nmb = this.nmb;
                allstore.set(this.titlearr);
                 this.$store.commit('change',{idx:this.idx,title:this.title,number:this.nmb});
                this.$store.commit('alldata1')
                this.flag = false;
                this.title = undefined;
                this.nmb = undefined;
                alert('修改成功')}
                else{
                    alert('请输入事件名与点击量再点击')
                }
                console.log(this.$store)

            },
            cgpage(){ 
                if(this.cd==0||this.page==0){
                    alert('抱歉你的设置无效哦!!!')
                    this.cd=undefined;
                    this.page=undefined;
                }
                else{
                console.log(this.cd)
                this.$store.commit('set',{page:this.page,cd:this.cd})
                this.page = undefined;
                this.cd=undefined;  
            }
           },
            cglength(){

            }
        },


         
}
</script>
<style>
*{
    margin: 0px;
    padding: 0px;
}
.cg{
    position: relative;
    top:100px;
    margin-top:10px;
    left:10px;
}
.B{
    margin-left:16px;
}
.enter{
    color:white;
    line-height: 30px;
    text-align: center;
    width: 40px;
    height: 30px;
    background: rgb(26, 241, 26);
    display: inline-block;
    position: relative;
    top:160px;
    left:100px;
    cursor: pointer;
}
.cancel{
    color: white;
    text-align: center;
    line-height: 30px;
    width: 40px;
    height: 30px;
    display: inline-block;
    background: rgb(255, 35, 35);
    position: relative;
    top:160px;
    left:130px;
    cursor: pointer;
}
.alldiv{
    z-index: -100;
    position: absolute;
    width: 100%;
    height:100%;
    background:gray;
}
.mutation{
    position:fixed ;
    z-index: 4000;
    width: 300px;
    height: 400px;
    left: 40%;
    top:30%;
    border: 1px solid black;
    background: white;  
}
.cgall{
    position: relative;
    display: flex;
    left: 23%;
    top:10%;
    color:black;
    font-size:40px;
    font-weight: 400;
    
}
body{

}
.change-page{
    display: inline-block;
    margin-top:30px;
    width:30%;
     margin-left: 20%;
}
.change-length{
    display: inline-block;
    margin-left:10%;
    margin-top:30px;
    width:30%;
}
.change-title{
    margin-left:20%;
    display:inline-block;
    margin-top:30px;
    width:30%;
}
.change-number{
    display: inline-block;
    margin-left:10%;
    margin-top:30px;
    width:30%;
}
.span{
display: inline-block;
 background: red;
 color:white; 
 width: 50px;
 height:22px;
text-align: center;
cursor: pointer;
}
.allli{
 list-style: none;   
 float: left;
 margin:2px;
 border:1px solid black;
 color:black;
 font-weight: 1000;
 text-align: center;
 line-height:30px;
 width:150px;
 height: 30px;
}
.render{
 list-style: none;   
 float: left;
 margin:2px;
 border:1px solid black;
 color:black;
 text-align: center;
 line-height:50px;
 width:150px;
 height: 50px;
}
.ul1{
    display: flex;
    position: relative;
    }
table{
    margin-top:30px;
    margin-left:20%;
    border:1px solid black;
}
.sp{
    margin-left:5px;
    cursor: pointer;
}

    
</style>
