<template>
  <div id="hotPro">
    <div class="inner">
    	<slot>
	 	  <div class="brand">
    		<img src="../assets/hot.jpg">
    		<p>热卖排行</p>
    	  </div>
    	</slot>
    	<ul class="prduct">
    		<li v-for="(good,index) in hot">
    			<img :src="good.img">
    		    <div class="detail">
    		    	<span>{{good.detail_title}}</span>
    		    	<font>{{good.detail_num}}</font>
    		    </div>
    		    <p class="price">¥{{good.price}}</p>
    		    <div class="member">
    		    	<span>会员价</span>
    		    	<font>¥{{good.MemberPrice}}</font>
    		    </div>
    		     <el-row>
             	   <el-button>购买</el-button>
                 </el-row>
    		</li>
    	</ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'hotPro',
  data(){
  	return{
        hot:[
          {img:require("../assets/laobeijing.jpg"),detail_title:"老北京粗粮饼干",detail_num:"900g",price:208,MemberPrice:208}, 	
          {img:require("../assets/jianbing.jpg"),detail_title:"波利煎饼",detail_num:"200g",price:45,MemberPrice:28.8}, 
          {img:require("../assets/ertongchengz.jpg"),detail_title:"儿童成长营养早餐",detail_num:"600g",price:55,MemberPrice:40}, 
          {img:require("../assets/maiguli.jpg"),detail_title:"麦谷力香浓可可酥",detail_num:"800g",price:68,MemberPrice:48}, 
          {img:require("../assets/ertongchengz.jpg"),detail_title:"儿童成长营养早餐",detail_num:"600g",price:55,MemberPrice:40}
       ]
  	}
  }
}
</script>

<style lang="scss" scoped>
#hotPro{
  width:100%;
  .inner{
  	width:73%;
  	margin:0 auto;
  	overflow:hidden;
  	.brand{
  		float:left;
  		width:72px;
  		height:290px;
  		background:#FC742A;
  		box-sizing:border-box;
  		padding:35px 23px; 
  		margin-right:60px;		
  		p{
  			width:10px;
  			font-size:28px;
  			color:white;
  			margin-top:20px;
  		}
  	}
  	ul{
  		float:left;
  		overflow:hidden;
  		li{
  			float:left;
  			font-weight:bold;
  			font-size:14px;
  			img{
  			  border:1px solid #ccc; 
  			  width:140px; 
  			  height:172px;	
  			  margin-right:20px;		
  			}
  			.price{
  				color:#E35933;
  				margin:3px 0px;
  				font-size:18px;
  			}
  			.member font{
              color:#E35933;
              font-size:13px;
  			}
  			.el-button{
  				width:150px;
  				height:35px;
  				font-size:12px;
  				color:white;
  				text-align:center;
  				background:#FC742A;
  				line-height:15px;
  				margin-top:10px;
  			}
  		}
  	}
  }
}
</style>
