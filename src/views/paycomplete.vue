<template>
  <div id="paycomplete">
    <Header_Top/>
    <NavBar/>
    <el-steps :active="3" align-center>
  		 <el-step title="提交订单"></el-step>
  		 <el-step title="去支付"></el-step>
  		 <el-step title="完成"></el-step>
  	</el-steps>
    
     <div class="complete">
     	<font>支付成功</font>
     	<span class="el-icon-check"></span>
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
  name: 'paycomplete',
  components:{
  	Header_Top,
  	NavBar,
  	Footer1
  }
}
</script>

<style lang="scss" scoped>
#paycomplete{
  width:100%;
  height:100%;
  .el-steps{
  	width:70%;
  	font-size:14px!important;
  	margin:40px auto 30px;
  }
  .complete{
  	width:90px;
  	margin:150px auto;
  	color:#0ECE0E;
  	overflow:hidden;
  	span{
  		float:left;
  		margin-right:5px;
  	}
  	font{
  		float:left;
  	}
  }
}
</style>
