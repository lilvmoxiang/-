<template>
  <div id="header_top">
    <div class="inner">
    	<img src="../assets/logo.png" alt="乡品网">
    	<form>
    		<input type="text">
    		<button class="search">搜索</button>
    		<span class="el-icon-search"></span>
    		<br/>
    		<ul>
    			<li v-for='(item,index) in arr1' :key=index>{{item}}</li>
    		</ul>
    	</form>
    	<button class="apply">申请入驻</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'header_top',
  data(){
  	return{
     arr1:['土特1',"土特2","土特3","土特4","土特5"]
  	}
  }
}
</script>

<style lang="scss" scope="scope">
#header_top {
  width:100%;
  height:78px;
  margin-bottom:10px;
  min-width:600px;
  .inner{
  	width:75%;
  	height:78px;
  	margin:0 auto;
    overflow:hidden;
  	img{
  		width:60px;
  		height:74px;
  		float:left;
  		margin-top:3px;
  	}
  	form{
  		float:left;
  		margin-top:15px;
  		margin-left:115px;
  		position:relative;
  		input{
  			width:600px;
  			height:40px;
  			border:1px solid #F68302;
  			outline:none;
  			float:left;
  			margin-bottom:5px;
  		}
  		.search{  			
  			 width:70px;
             height:42px;
             float:left;
             color:white;
             background:#F68302;
             border:1px solid #F68302;
             outline:none;
  		}
  		span{
  			position:absolute;
  			left:10px;
  			top:8px;
  			font-size:27px;
  			color:#F68302;
  		}
  		ul{
  			width:240px;
  			display:flex;
  			justify-content:space-between;
  			li{
  				font-size:12px;
  				color:#666666;
  			}
  		}
  	}
  	.apply{
  		float:right;
  		width:80px;
  		height:40px;
  		color:white;
        background:#F68302;
        border:1px solid #F68302;
        outline:none;
        margin-top:15px;
  	}
  }
}
</style>
