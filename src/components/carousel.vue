<template>
  <div id="carousel">
  	<el-carousel :interval="5000" arrow="never" indicator-position="inside">
    <el-carousel-item v-for="(item,index) in banner" :key=index>
      <img :src="item" >
    </el-carousel-item>
  </el-carousel>

  </div>
</template>

<script>
export default {
  name: 'carousel',
  data(){
  	return{
     banner:['../../static/img/banner1.jpg','../../static/img/banner2.jpg','../../static/img/banner3.jpg','../../static/img/banner4.jpg','../../static/img/banner5.jpg'],
     tabPosition: 'left',
      activeName: 'second',
      radio: '2'
  	}
  },
  methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
     
    }
}
</script>

<style lang="scss" scope="scope">
#carousel {
  width:1349px;
  height:385px;
}
.el-carousel{
	width:1349px;
	height:380px;
}
.el-carousel__container{
	height:380px;
	img{
  	    display:block;
  	    width:1366px;
  	    height:380px;	
  	    margin-top:-2px;    
        }
}

</style>
