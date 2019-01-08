<template>
  <div id="payway1">
    <Header_Top/>
    <NavBar/>
    
    <div class="content">
    	<h4>支付方式</h4>
        <p>目前全国支持微信。支付宝两种支付方式。乡品网与支付平台达成了相关协议。您可以不必注册快钱，财付通或祝福包账户，直接通您的网络银行。您可以选择任意一种享受在线支付服务。</p>
      <div class="pic">
      	<img src="../assets/weixin1.jpg" @click="complete">
      	<img src="../assets/zhifb.jpg" @click="complete">
      </div>
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
  name: 'payway1',
  components:{
  	Header_Top,
  	NavBar,
  	Footer1
  },
  methods:{
  	complete(){
  		this.$router.push("/paycomplete")
  	}
  }
}
</script>

<style lang="scss" scoped>
#payway1{
  width:100%;
  height:100%;
  .content{
  	width:70%;
  	margin:0 auto;
  	padding-top:50px;
  	h4{
  		font-weight:700;
  		margin-bottom:20px;
  	}
  	p{
  		color:#7B7B7B;
  		margin-bottom:60px;
  	}
  	.pic{
  		width:70%;
  		margin:0 auto 120px;
  		img:nth-child(1){
  			margin-left:30px;
  			margin-right:190px;
  		}
  	}
  }
}
</style>
