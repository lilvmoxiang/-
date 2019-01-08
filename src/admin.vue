<template>
  <div id="admin">
   <Header_Top  />
   <NavBar/>
   <Carousel/>
   <GoodPro/>
   <HotPro/>
   <BDMap/>
   <ProductShow/>
   <Footer1/>
   
    <router-view/>
  </div>
</template>

<script>
import Header_Top from "./components/header"
import NavBar from "./components/nav"
import Carousel from "./components/carousel"
import GoodPro from "./components/goodpro"
import HotPro from "./components/hot"
import BDMap from "./components/map"
import ProductShow from "./components/productShow"
import Footer1 from "./components/footer1"

export default {
  name: 'admin',
  data(){
  	return{
  		 routes:this.$router.options.routes
  	}
  },
  components:{
    Header_Top,
    NavBar,
    Carousel,
    GoodPro,
    HotPro,
    BDMap,
    ProductShow,
    Footer1
  }
}
</script>

<style>
#admin {
  width:100%;
  height:100%;
}

</style>

