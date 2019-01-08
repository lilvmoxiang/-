<template>
  <div id="merin">
  	<Header_Top/>
  	<NavBar/>

    <div class="content">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
	    <el-form-item label="商家名称" prop="name">
	      <el-input v-model="ruleForm.name" placeholder="6个字符"></el-input>
	    </el-form-item>
	    <el-form-item label="联系方式" prop="connect">
	       <el-input v-model="ruleForm.connect"></el-input placeholder="+86">
	    </el-form-item>
	    <el-form-item label="商家地址" prop="address">
	       <el-input v-model="ruleForm.address"></el-input placeholder="省/市">
	    </el-form-item>
	    <el-form-item label="商家简介" prop="intro">
	    	<textarea cols="40" rows="10"></textarea>
	    </el-form-item>
	    <el-form-item>
	        <el-button  @click="submitForm('ruleForm')">入驻</el-button>
	    </el-form-item>
	  </el-form>
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
  name: 'merin',
  components:{
  	Header_Top,
  	NavBar,
  	Footer1
  },
  data(){
  	return{
  	  ruleForm: {
          name: '',
          connect: '',
          address: '',
          intro: '',
       },
       rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请填写活动地址', trigger: 'change' }
          ],
          intro: [
            { required: true, message: '请填写活动简介', trigger: 'change' }
          ],
          connect: [
            { required: true, message: '请填写手机号码', trigger: 'blur' }
          ]
        }	
  	}
  }
}
</script>

<style lang="scss" scoped>
#merin{
  width:100%;
  height:100%;
  .content{
  	width:30%;
  	margin:40px auto 50px;
  	text-align:center;
  	
  	span{
  		float:right !important;
  	}
  	.el-button{
  		width:150px;
  		height:35px;
  		line-height:11px;
  		color:white;
  		background:#FC742A;
  		border-radius:10px;
  	}
  }
}
</style>
