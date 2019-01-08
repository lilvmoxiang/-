<template>
  <div id="goodpro">
    <div class="inner">
 <el-container>
  <el-header>
  	<h1>乡品推送</h1>
  	<span>/口碑甄选&nbsp;&nbsp;超值好货/</span>
  </el-header>
  <el-container>
    <el-main>
    	<div class="pic">
    		<img :src=src alt="">
    	</div>
    	<div class="msg">
    	<h2>{{msg}}</h2>
    	<span>{{title1}}</span>
    	<font>{{title2}}</font>
    	<div class="center">
    		<div class="box1">
    		  <font>¥</font>
    	      <span class="price">{{price}}</span>
    	      <div class="discount">{{discount}}折</div>
    		</div> 	
         <div class="box2">
         	 <font>已售</font>
    	     <span>{{num}}</span>
         </div>   	
    	</div>
    	<div class="date">
    		<span>有效期</span><font>{{date}}</font><br/>
    		<em>服务</em> 
    		<img src="../assets/tui.jpg"><i>随时退</i> 
    		<img src="../assets/tui.jpg"><i>过期退</i>		
    	</div>
    	<div class="last">
    		<span class="rule">规格</span>
             <el-radio-group  v-model="radio2">
                <el-radio :label="3">{{option1}}</el-radio>
                <el-radio :label="6">{{option2}}</el-radio>
             </el-radio-group>
             <br/>
             <span class="number">数量</span>
             <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
             <font>库存</font>
             <i>{{kuncun}}</i>
             <el-row>
             	<el-button>立即购买</el-button>
             </el-row>
    	</div>
    	</div>
    </el-main>
    <el-aside width="220px">
    	<h1>— 最新商品 —</h1>
    	<ul>
    		<li v-for="(item,index) in goods">
    			<img :src="item.img">
    			<p>{{item.info}}</p>
    			<div>{{item.title}}</div>
    		</li>
    	</ul>
    	<img src="../assets/up.jpg" class="img1">
    	<img src="../assets/down.jpg" class="img2">
    </el-aside>
  </el-container>
</el-container>
    </div>

  </div>
</template>

<script>
export default {
  name: 'goodpro',
  data(){
  	return{
  		msg:"北京同仁堂洋槐花蜂蜜800g瓶装",
  		title1:'正宗洋槐花蜂蜜',
  		title2:'口感润滑',
  		src:require('../assets/fengbi.jpg'),
  		price:89,
  		discount:9,
  		num:35,
  		date:"2018年12月31日",
  		option1:"洋槐",
  		option2:"椴树",
  		num1: 1,
  		kuncun:2000,
  		radio2: 3,
  		goods:[
  		{img:require("../assets/hen.jpg"),info:"景湖先杀老母鸡1只  新鲜",title:"¥38"},
  		{img:require("../assets/egg.jpg"),info:"安徽有机鸡蛋10枚体验装",title:"¥26"},
  		{img:require("../assets/longxia.jpg"),info:"野生船冻 海鲜大虾",title:"¥129"}]
  	}
  },
  methods:{
  	handleChange(value) {
        console.log(value);
      }
  }
}
</script>

<style  lang="scss" scope="scope">
#goodpro {
  width:100%;
  margin-bottom:40px;
  .inner{
  	width:76%;
  	margin:0 auto;
  	.el-header{
  		overflow:hidden;
  		font-weight:bold;
  		line-height:60px;
        margin:30px 0 30px 0px;
  		h1{
  			float:left;
  			margin-right:20px;
  		}
  		span{
  			float:left;
  			margin-top:5px;
  			font-size:12px;
  			color:#8A8A8A;
  		}
  	}
  	.el-main{
  		overflow:hidden;
  		.pic{
  			float:left;
  			width:350px;
  			height:500px;
  			border:1px solid #ccc;
  			box-sizing:border-box;
  			padding:85px 65px;
  		}
  	    .msg{
  	    	width:405px;
  	    	height:500px;
  	    	box-sizing:border-box;
  	    	padding:30px;
  	    	float:left;
  	    	border-right:1px solid #ccc;
  	    	h2{
  	    		margin-bottom:10px;
  	    	}
  	    	.center{
  	    		padding-top:30px;
  	    		overflow:hidden;
  	    		padding-bottom:25px;
  	    		border-bottom:1px dotted #999;
  	    		.box1{
  	    			float:left;
  	    			.price{
  	    				font-size:32px;
  	    				color:#C4594D;
  	    			}
  	    			.discount{
  	    				float:right;
  	    				width:53px;
  	    				height:24px;
  	    				border-radius:4px;
  	    				font-size:12px;
  	    				background:#CA192D;
  	    				color:white;
  	    				line-height:24px;
  	    				text-align:center;
  	    				margin-top:10px;
  	    				margin-left:15px;
  	    			}
  	    		}
  	    		.box2{
  	    			float:left;
  	    			margin-top:11px;
  	    			margin-left:40px;
  	    			font{
  	    				color:#999;
  	    				float:left;
  	    			}
  	    			span{
  	    				color:#F68302;
  	    				float:left;
  	    			}
  	    		}
  	    	}
  	    	.date{
  	    		padding:30px 0px;
  	    		border-bottom:1px dotted #999;
  	    		font-size:12px;
  	    		span{
  	    			color:#999;
  	    			display:inline-block;
  	    			margin-right:50px;
  	    		}
  	    		em{
  	    			color:#999;
  	    			display:inline-block;
  	    			margin-top:18px;
  	    			margin-right:50px;
  	    		}
  	    		img{
  	    			border-radius:50%;
  	    			vertical-align:middle;
  	    			margin-right:5px;
  	    		}
  	    		i{
  	    			font-weight:bold;
  	    			color:#737373;
  	    		}
  	    	}
  	    	.last{
  	    		padding-top:25px;
  	    		.rule,.number{
  	    			color:#999;
  	    			margin-right:50px;
  	    			font-size:12px;
  	    		}
  	    		.number{
  	    			margin-right:30px;
  	    			margin-top:20px;
  	    			display:inline-block;
  	    		}
  	    		font{
  	    			font-size:18px;
  	    			color:#737373;
  	    			display:inline-block;
  	    			margin:0px 4px 0px 16px;
  	    		}
                i{
                	color:#999;
                	font-weight:bold;
                }
                .el-button{
                	width:150px;
                	line-height:16px;
                	color:white;
                	background:#FC742A;
                	outline:none;
                	margin-top:30px;
                	border:1px solid transparent;
                }
  	    	}
  	    }
  	}
  	.el-aside{
  		h1{
  			font-size:19px;
  			margin-bottom:15px;
  		   }
  		 ul{
  			position:relative; 	
  			li{
  				position:relative;
  				margin-bottom:10px;
  				 p{  			
  		           font-size:12px;
  		         }
  		        img{
  		  	     width:130px;
  		  	      height:auto;
  		         }
  		       div{
  		       	position:absolute;
  		       	bottom:20px;
  		       	left:0px;
  		        box-sizing:border-box;
  		        padding-left:25%;
  		       	font-size:12px;
  		       	line-height:20px;
  		       }
  			}				 
  		}
  		.img1{
  			margin-left:20px;
  			margin-right:10px;
  		}		
  	}
  }
}
</style>
