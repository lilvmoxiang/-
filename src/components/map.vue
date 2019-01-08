<template>
  <div id="BDmap">
     <div class="inner">
     	<el-container>
         <el-header>
         	<h1>商家介绍</h1>
  	        <span>/期待您的加入/</span>
         </el-header>
        <el-container>
        <el-main>
        	<div id="l-map" style="height:300px;width:610px;"></div>
        </el-main>
        <el-aside width="500px">
        	<p class="new">{{secrit}}</p>
        	<p class="company">乡品网有限公司</p>
        	<ol>
        		<li v-for="(item,index) in address" :key=index>{{item}}</li>
        	</ol>
        </el-aside>
      </el-container>
     </el-container>
     </div>
  </div>
</template>

<script>
export default {
  name: 'BDmap',
  data(){
  	return{
     secrit:"XING PIN",
     address:['北京朝阳区朝阳门外大街3号山水铂宫D座504','客服电话：011-8815  6456']
  	}
  },
  mounted(){
  	 var map = new BMap.Map("l-map");
    map.enableScrollWheelZoom(); //启用滚轮放大缩小，默认禁用
    map.enableContinuousZoom(); //启用地图惯性拖拽，默认禁用
    map.centerAndZoom("北京", 12); // 初始化地图,设置城市和地图级别。
  }
}
</script>

<style lang="scss" scoped>
#BDmap{
  width:100%;
  .inner{
  	width:75%;
  	margin:0 auto;
  	.el-header{
  		overflow:hidden;
  		font-weight:bold;
  		line-height:60px;
        margin:30px 0 10px 0px;
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
  	.el-container.is-vertical{
  		padding-bottom:20px; 
  		border-bottom:1px solid #ccc;
    .el-main{
      overflow:hidden;
    }
    .el-aside{
    	height:300px;
    	margin-top:20px;
    	box-sizing:border-box;
    	padding:15px 40px 20px 40px;
    	text-align:right;
    	.new{
           font-size:80px;
           opacity:0.5;
           color:#FEEEE8;
    	}
    	.company{
    		width:100%;
    		padding-bottom:20px;
    		border-bottom:1px dotted #ccc;
    		margin-top:40px;
    		color:#999;
    	}
    	ol{
    		font-size:13px;
    		color:#999;
    		margin-top:20px;
    	}
       }
     }
  }
}
</style>
