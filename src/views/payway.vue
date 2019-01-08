<template>
  <div id="payway">
     <Header_Top/>
     <NavBar/>
    <el-steps :active="2" align-center>
  		 <el-step title="提交订单"></el-step>
  		 <el-step title="去支付"></el-step>
  		 <el-step title="完成"></el-step>
  	</el-steps>
     <hr/>

  <div class="center">
		<div class="info">
			<span id="ginfo">商品信息:</span>
			<font>{{goods}}</font>
			<span class="num">{{num}}件</span>
            <span>应付总额:</span>
            <font class="sum">{{sum}}</font>
		</div>
		<p>收货地址：<span>&nbsp;{{address}}</span></p>
		<div class="show">
			<img src="../assets/weixn.jpg" @click="detail">
			<img src="../assets/zhifubao.jpg" @click="detail">
		</div>
		<button class="submit" @click='modify'>返回修改订单</button>
  </div>

     <Footer1/>
    <router-view/>
  </div>
</template>

<script>
import Header_Top from "../components/header"
import NavBar from "../components/nav"
import Footer1 from "../components/footer1"

export default {
  name: 'payway',
  components:{
  	Header_Top,
  	NavBar,
  	Footer1
  },
  data(){
  	return{
  		goods:"土特产蜂蜜",
  		num:1,
  		sum:"¥89",
  		address:"北京市昌平区南口南大街21号"
  	}
  },
  methods:{
  	detail(){
  		this.$router.push("/payway1")
  	},
    modify(){
      this.$router.push("/p_center")
    }
  }
}
</script>

<style lang="scss" scoped>
#payway {
  width:100%;
  height:100%;
  .el-steps{
  	width:70%;
  	font-size:14px!important;
  	margin:40px auto 30px;
  }
  .center{
  	width:75%;
  	margin:0 auto;
  	padding:20px 0px;  
  	text-align:center;	
  	.info{
  		width:75%;
  		margin:0 auto;
  		padding-bottom:20px;
  		margin-bottom:20px;
  		border-bottom:1px solid #ccc;
  		#ginfo{
          color:#999;
          display:inline-block;
          margin-right:60px;
  		}
  		.num{
  			display:inline-block;
            margin-left:40px;
            margin-right:110px;
  		}
  		.sum{
  			display:inline-block;
  			margin-left:20px;
  			color:#BB3625;
  		}
  	}
  	.show{
  		margin:50px 0px 30px;
  		img:nth-child(1){
  		  margin-right:80px;
  		}
  	}
  	.submit{
    	width:140px;
    	height:40px;
    	background:#F68302;
    	color:white;
    	font-size:17px;
    	line-height:40px;
    	text-align:center;
        margin-left:22px;
    	border-radius:18px;
  	 }
  }
}
</style>

