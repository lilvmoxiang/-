<template>
  <div id="footer1">
     <div class="inner">
     	<ul>
     		<li v-for="(item,index) in userCenter" :key=index>
     			<h3>{{item.title}}</h3>
     			<p>{{item.first}}</p>
     			<p>{{item.second}}</p>
     		</li>
     	</ul>
     	<ol>
     		<li v-for="item in connect">{{item}}</li>
     	</ol>
     </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'footer1',
  data(){
  	return{
  		userCenter:[
  		 {title:"服务保障",first:"退换货服务",second:"北工商"},
  		 {title:"用户帮助",first:"常见问题",second:"联系我们"},
  		 {title:"商务合作",first:"支付方式",second:""}
  		],
  		connect:['电话：4000-800-12345678','地址：北京市朝阳区望京东路1号摩托罗拉大厦8号','北京市乡品网络技术有限公司  xiangpin.com   京公网安备1108801151号']
  	}
  }
}
</script>

<style lang="scss" scoped>
#footer1 {
  width:100%;
  border-top:1px solid #ccc;
   .inner{
   	width:55%;
   	margin:0 auto;
   	padding-top:30px;
    padding-bottom:90px;
   	ul{
   		overflow:hidden;
   		width:100%;
   		display:flex;
   		justify-content:space-between;
   		li{
   			text-align:center;
   			width:83px;
   			h3{   				
   				height:25px;
   				border-left:1px solid #242424;
   				margin-bottom:10px;
   				padding-left:3px;
   				color:#242424;
   			}
   			p{
   				font-size:14px;
   				color:#515151; 
   				margin-bottom:10px;				
   			}
   		 }
   	 }
   	 ol{
   	 	text-align:center;
   	 	margin-top:20px;
   	 	li{
   	 		font-size:14px;
   	 		color:#999;
   	 		margin-bottom:8px;
   	 	}
   	 }
   }
}
</style>
