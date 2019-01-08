<template>
  <div id="navbar">
      <div class="inner">
      <ul class='list'>
      
      <!-- <li v-for="(item,index) in routes" :key="index">
        <router-link exact active-class="active" tag='li' :to="{path:item.path}">{{item.alias}}</router-link>
      </li> -->
        <li title="首页">
          <router-link exact active-class="active" tag='li' :to="{path:'/'}">首页</router-link>
        </li>
        <li title="全部">
          <router-link exact active-class="active" tag='li' :to="{path:'type1'}">全部</router-link>
        </li>
        <li class='pay' title="支付">
          <router-link exact active-class="active" tag='li' :to="{path:'pay'}">支付</router-link>
        </li>
        <li class='type2' title="退换货">
          <router-link active-class="active" tag='li' :to="{path:'type2'}">退换货</router-link>
        </li>
        <li title="商家入驻">
          <router-link active-class="active" tag='li' :to="{path:'merin'}">商家入驻</router-link>
        </li>
        <li title="个人中心">
          <router-link active-class="active" tag='li' :to="{path:'p_center'}">个人中心</router-link>
        </li>
        <li title="登录" class='login'>
          <router-link active-class="active" tag='li' :to="{path:'login'}">登录</router-link>
        </li>
      </ul>
      </div>

  </div>
</template>

<script>
export default {
  name: 'navbar',
  data(){
  	return{
  		routes:this.$router.options.routes,
    }
  }
}
</script>

<style lang="scss" scope="scope">
.active{
  background:#BC6401;
}
#navbar {
  width:100%;
  height:30px;
  font-size:14px;
  background: #F68302;
   .inner{
    width:75%;
    margin:0 auto;
     ul{
      overflow:hidden;
       li{
        float:left;
        line-height:30px;
        margin-right:10px;
        padding:0px 10px;
        &.type2{
          margin-right:345px;
        }
        &.login{
          margin-right:0px;
        }
        a{        
          color:white;
        }
       }
     }
   }
}


</style>
