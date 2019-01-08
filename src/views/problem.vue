<template>
  <div id="problem">
  <Header_Top/>
  <NavBar/>

  <div class="pic">
  	 <img src="../assets/problem1.jpg" alt="">
  	 <img src="../assets/problem2.jpg" alt="">
  	 <img src="../assets/problem3.jpg" alt="">
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
  name: 'problem',
  components:{
  	Header_Top,
  	NavBar,
  	Footer1
  }
}
</script>

<style lang="scss" scoped>
#problem{
  width:100%;
  height:100%;
  .pic{
  	width:75%;
  	margin:50px auto;
  	border:2px solid #ccc;
  	 img{
  	 	width:100%;
  	 }
  }
}
</style>
