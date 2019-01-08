<template>
  <div id="type1">
    <Header_Top />
    <NavBar/>
    
    <HotPro>
    	<slot><span></span></slot>
    </HotPro>
    <HotPro>
    	<slot><span></span></slot>
    </HotPro>
    <HotPro>
    	<slot><span></span></slot>
    </HotPro>

    <div class="inner">     
      <div class="block">
       <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="currentChange"
        @prev-click="prevClick"
        @next-click="nextClick"       
        :page-size="page.pageSize" 
        :current-page="page.pageNo"
        layout="total, prev, pager, next"
        :total="page.totalRecords">
      </el-pagination>
    </div>
</div>

   <Footer1/>
    <router-view/>
  </div>
</template>

<script>
import Header_Top from "../components/header"
import NavBar from "../components/nav"
import HotPro from "../components/hot"
import Footer1 from "../components/footer1"

export default {
  name: 'type1',
  data(){
  	return{
  		routes:this.$router.options.routes,
  		tableData: [],
        page: {
        pageNo: 1,//当前页
        pageSize: 5,//每页的数据
        totalRecords: 17,
      },
      hide:false  
  	}
  },
  methods:{
  	handleSizeChange(val){
      this.page.pageSize = val;
      this.getData()
    },
    currentChange(val){
      this.page.pageNo = val;
      this.getData()
      console.log(val)
    },
    prevClick(val){
      this.page.pageNo = val;
      this.getData()
    },
    nextClick(val){
      this.page.pageNo = val;
      this.getData()
    },
    // getData(){
    //   this.$http.get(`/page?page=${this.page.pageNo}`)
    //   .then((res)=>{  
    //   console.log(res)          
    //     this.tableData = res.glist;
    //   })
    //   .catch(err=>{
    //       console.log(err)
    //   })
    // }
  },
  mounted(){
		var lis = document.querySelectorAll('.prduct li');
		for(var i=0;i<lis.length;i++){
			if(i==4){
				lis[i].style.marginRight =0;
			}
			lis[i].style.marginTop = "40px";
			lis[i].style.marginRight = "33px";
		 }
	},
  components:{
  	Header_Top,
    NavBar,
    HotPro,
    Footer1
  }
}
</script>

<style lang="scss" scoped>
#type1 {
  width:100%;
  height:100%;
  .inner{
  	width:75%;
  	margin:0 auto;
  	text-align:center;
  	margin-top:60px;
  	margin-bottom:40px;
  }
}
</style>
