<template>
  <div id="pay">
    <Header_Top/>
    <NavBar/>

    <div class="center">
    	<el-steps :active="1" align-center>
		  <el-step title="提交订单"></el-step>
		  <el-step title="去支付"></el-step>
		  <el-step title="完成"></el-step>
		</el-steps>
		 <main>
    	<div class="pic">
    		<img :src=src alt="">
    	</div>
    	<div class="msg">
         <div class="price">
         	<span>{{price}}</span>
         	<font>原价:{{yuanjia}}</font>
         </div>
         <p class="sell">已售<span>{{num}}</span></p>
         <p class="day7">七天无理由退货</p>
         <div class='num'>
            <span class="number">数量</span>
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
          </div>
          <div class="rule">
          	<span class="rule">规格</span>
             <el-radio-group v-model="radio2">
                <el-radio :label="3">{{option1}}</el-radio>
                <el-radio :label="6">{{option2}}</el-radio>
             </el-radio-group>
          </div>
          <div class="receive">
          	<span>收货地址：</span>
          	 <div class="address">
          	 	 <v-distpicker province="北京市" city="北京城区" area="朝阳区"></v-distpicker>
          	     <v-distpicker type="mobile" @selected='selected' v-show="addInp"/>
          	 </div>       	
          </div>
          <div class="specific">
          	<span>详细地址：</span>
          	<input type="text" placeholder="xx街道xx号">
          </div>
          <div class="sum">
          	<span>应付总额：</span>
          	<font>{{sum}}</font>
          </div>
    	</div>
      </main>
    	<button class="submit" @click="gopay">提交订单</button>
    </div>

    <Footer1/>
    <router-view/>
  </div>
</template>

<script>
import Header_Top from "../components/header"
import NavBar from "../components/nav"
import Footer1 from "../components/footer1"
import VDistpicker from 'v-distpicker'

export default {
  name: 'pay',
  components:{
  	Header_Top,
  	NavBar,
  	Footer1,
  	VDistpicker
  },
  data(){
  	return {
		src:require('../assets/fengbi.jpg'),
		option1:"洋槐",
		option2:"椴树",
		price:'¥89',
		yuanjia:150,
		num:35,
		num1:1,
		addInp :false,
		sum:"¥89",
		radio2: 3
  	}
  },
  methods:{
  	handleChange(value) {
        console.log(value);
      },
    selected(data){
  		this.province=data.province.value,
  		this.city=data.city.value
  	},
  	gopay(){
  		this.$router.push('/payway')
  	} 
  }
}
</script>

<style lang="scss" scoped>
#pay{
  width:100%;
  height:100%;
  .center{
  	width:75%;
  	margin:0 auto;
  	padding:50px 0px;
  	.el-steps{
  		width:70%;
  		font-size:14px!important;
  		margin:0 auto;
  	}
    main{
    	width:100%;
    	height:470px;
  	    margin-top:30px;
  		overflow:hidden;
  		.pic{
  			float:left;
  			width:350px;
  			height:430px;
  			border:1px solid #ccc;
  			box-sizing:border-box;
  			padding:48px 65px;
  			img{
  				width:195px;
  				height:312px;
  			}
  		}
  	    .msg{ 	    
  	    	height:430px;
  	    	box-sizing:border-box;
  	    	padding:30px;
  	    	float:left;
  	    	.price{
  	    		overflow:hidden;
  	    		span{
  	    			float:left;
  	    			font-size:35px;
  	    			color:#B73827;
  	    			margin-right:30px;
  	    		}
  	    		font{
  	    			float:left;
  	    			text-decoration:line-through;
  	    			margin-top:18px;
  	    			color:#999;
  	    		}
  	    	}
  	    	.sell{
  	    		font-size:16px;
  	    		color:#999;
  	    		margin-bottom:8px;
  	    		span{
  	    			color:#F58203;
  	    		}
  	    	}
  	    	.day7{
                color:#B93727;
                font-weight:600;
  	    		letter-spacing:5px;
  	    		margin-bottom:15px;
  	    	}
  	    	.num{
  	    		span{
  	    			font-size:17px;
  	    			display:inline-block;
  	    			margin-right:10px;
  	    		}
  	    	}
  	    	.rule{
  	    		margin:7px 0px;
  	    		span{
  	    			font-size:17px;
  	    			display:inline-block;
  	    			margin-right:18px;
  	    		} 	    		
  	    	}
  	    	.receive{
  	    		overflow:hidden;
  	    		margin-top:30px;
  	    		margin-bottom:15px;
  	    		span{
  	    			float:left;
  	    			font-size:23px;
  	    			margin-top:2px;
  	    		}
  	    		.address{
  	    			float:left;
  	    			select{
  	    				height:30px!important;
  	    			}
  	    		}
  	    	}
  	    	.specific{
  	    		margin-bottom:20px;
  	    		span{
  	    			font-size:23px;
  	    		}
  	    		input{
  	    			height:30px;
  	    			width:220px;
  	    			text-indent:6px;
  	    		}
  	    	}
  	    	.sum{
  	    		span{
  	    			font-size:23px;
  	    		}
  	    		font{
  	    			font-size:33px;
  	    			color:#BB3625;
  	    			font-weight:600;
  	    		}
  	    	}
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
            margin-left:338px;
  	    	border-radius:18px;
  	    }
  }
}
</style>
