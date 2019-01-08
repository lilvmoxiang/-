<template>
  <div id="login">
       <el-container>
         <el-header>
         	<img src="../../assets/logo.png">
         	<div class="ad">
         		<p>买农产品</p>
         		<div>就上乡品网</div>
         	</div>
         	<h4>欢迎入驻乡品网</h4>
         </el-header>
         <el-main>
         	<div class="pic">
         		<img src="../../assets/vegetable.jpg">
         	</div>
         	<form>
         		<h1>用户登录</h1>
         		<input type="text" placeholder="请输入手机号">
         		<input type="text">
         		<span class="require">点击获取验证码</span>
         		<div class="checkin">
         			<input type="checkbox">
         			<span>30天内自动登录</span>
         		</div>
         		<button>登录</button>
         	</form>
         </el-main>
       </el-container>
       
       <Footer1/>
    <router-view/>
  </div>
</template>

<script>
import Footer1 from  "../../components/footer1"

export default {
  name: 'login',
  components:{
  	Footer1
  }
}
</script>

<style lang="scss" scoped>
#login {
  width:100%;
  height:100%;
  .el-container{
  	width:75%;
  	margin:30px auto;
  	.el-header{
  		display:flex;
  		img{
  			width:45px;
  		}
  		.ad{
  			width:80px;
  			height:30px;
  			border-left:1px solid #6A3233;
  			font-size:12px;
  			color:#6A3233;
  			margin-left:30px;
  			padding-left:10px;
  			margin-top:17px;
  			color:#856968;
  		}
  		h4{
  			margin-top:17px;
  			color:#76554C;
  		}
  	}
  	.el-main{
  		overflow:hidden;
  		.pic{
  			float:left;
  			margin-right:50px;
  			img{  				
  			  width:450px;
  			}
  		}
  		form{
  			float:left;
  			width:350px;
  			border:1px solid #ccc;
  			box-sizing:border-box;
  			padding:44px 20px 40px 20px;
  			position:relative;
  			h1{
  				width:100%;
  				padding-bottom:6px;
  				border-bottom:1px solid #ccc;
  				color:#F68402;
  				margin-bottom:35px;
  			}
  			input[type="text"]{
  				width:305px;
  				height:40px;
  				margin-bottom:20px; 				
  				text-indent:5px;
  			}
  			.require{
  				position:absolute;
  				right:22px;
  				top:197px;
  				font-size:12px;
  				color:#D26E7F;
  			}
  			.checkin{
  				margin-top:28px;
  				input{
  					float:left;
  					margin-right:5px;
  				}
  				span{
  					font-size:12px;
                     float:left;
  				}
  			} 
  			button{
  				width:305px;
  				height:40px;
  				text-align:center;
  				line-height:40px;
  				background:#F68402;
  				color:white;
  				margin-top:20px;
  			}
  		}
  	}
  }
}
</style>
