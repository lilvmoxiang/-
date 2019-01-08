<template>
  <div id="productShow">
     <div class="inner">
     	<el-container>
         <el-header>
         	<h1>产品展示</h1>
         	<span>/精选商品，全程品控/</span>
         </el-header>
         <el-main>
         	<img src="../assets/tongrentang.jpg">
         	<img src="../assets/proinfo.jpg" class="proinfo">
         	<img src="../assets/productInfo.jpg" class="productInfo">
         </el-main>
        </el-container>

     </div>
  </div>
</template>

<script>
export default {
  name: 'productShow'
}
</script>

<style lang="scss" scoped>
#productShow{
  width:100%;
  .inner{
  	width:75%;
  	margin:0 auto;
  	.el-header{
  		overflow:hidden;
  		font-weight:bold;
  		line-height:60px;
        margin:30px 0 -10px 0px;
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
  		width:100%;
  		img{
  			width:100%;
  			display:block;
  			&.proinfo,&.productInfo{
  				margin-top:-6px;
  			}
  		}
  	}
  }
}
</style>
