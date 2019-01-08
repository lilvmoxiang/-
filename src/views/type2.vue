<template>
  <div id="type2">
    <Header_Top/>
    <NavBar/>
     <div class="pic">
     	<img src="../assets/back1.jpg" class="first">
     	<img src="../assets/back2.jpg" class="second">
     </div>
      
     <p> 
       <router-link :to="{path:'problem'}">常见问题</router-link>
     </p>

    <Footer1/>
    <router-view/>
  </div>
</template>

<script>
import Header_Top from "../components/header"
import NavBar from "../components/nav"
import Footer1 from "../components/footer1"

export default {
  name: 'type2',
  components:{
  	Header_Top,
  	NavBar,
  	Footer1,
  }
}
</script>

<style lang="scss" scoped>
#type2 {
  width:100%;
  height:100%;
  position:relative;
  .pic{
  	width:75%;
    height:1362px;
  	margin:50px auto;
    border:2px solid #ccc;
    img{
    	width:100%;
    	margin-top:-2px;
    	&.first{
    		border-top:2px solid #ccc;
        height:640px;
    	}
    	&.second{
    		margin-bottom:25px;
        height:650px;
    	}
    }
  }
  p{
    position:absolute;
    right:169px;
    bottom:-1164px;
    margin-bottom:31px;
  }
  a{
    display:block;
  }
}
</style>
