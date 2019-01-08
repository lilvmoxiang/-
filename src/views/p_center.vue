<template>
  <div id="type2">
      <Header_Top/>
      <NavBar/>

     <div class="content">
     	<form class='wrap'>
     		 <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
               <el-tab-pane label="我的订单" name="first">
                <div class="aaa">团购订单</div>
                 <ul>
              	  <li v-for="(item,index) in groupBuy"  :key=index>
       		      <p class="title">团购项目</p>
       		      <div class="state">
       			    <h3>状态</h3>
       			    <p>{{item.state}}</p>
       		     </div>
       		    <div class="pay">
       		     <h3>实付款</h3>
       		     <p>{{item.pay}}</p>
       		    </div>
       		   <div class="num">
       		    <h3>数量</h3>
       		    <p>{{item.num}}</p>
       		   </div>
       		  <button>查看</button>
        	</li>
          </ul>
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
          </el-tab-pane>

          <el-tab-pane label="订单信息" name="second">
            <div class="aaa">订单详情</div>
            <div class="detail1">
              <h4>商品名称</h4>
             <el-container>             
                <el-main>
                  <img :src="product.src">
                </el-main>
                <el-aside>
                  <ul id='goods'>
                    <li>
                      <span>订单编号:</span><input type="text" v-model="product.ordercode">
                    </li>
                     <li>
                      <span>成交时间:</span><input type="text" v-model='product.dealtime'>
                    </li>
                     <li>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   状态:</span><input type="text" v-model="product.state">
                    </li>
                     <li>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   单价:</span><input type="text" v-model="product.price">
                    </li>
                     <li>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   数量:</span><input type="text" v-model="product.num">
                    </li>
                     <li>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   优惠:</span><input type="text" v-model="product.discount">
                    </li>
                  </ul>
                </el-aside>
              </el-container>
              <div class="bottom">
                <h3>物流信息</h3>
                <p><font>发货方式:</font><span>{{product.method}}</span></p>
                <p><font>物流公司:</font><span>{{product.company}}</span></p>
                <p><font>运单编号:</font><span>{{product.bianhao}}</span></p>
                <div><font>物流跟踪:</font>
                  <ol>
                  <li>
                    <i>{{product.date}}</i><em>{{product.time}}</em><b>{{product.ztai}}</b>
                  </li>
                   <li>
                    <i>{{product.date}}</i><em>{{product.time}}</em><b>{{product.ztai}}</b>
                  </li>
                   <li>
                    <i>{{product.date}}</i><em>{{product.time}}</em><b>{{product.ztai}}</b>
                  </li>
                  </ol>
                </div>
              </div>  

              <button class="continueMo">继续修改</button>
              <button @click="ensure" class="enquire">确认订单</button>           
            </div>
          </el-tab-pane>

  <el-tab-pane label="账户设置" name="third">
    <div class="aaa">手机绑定</div>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
		  <el-form-item label="原手机号" prop="OldPhone">
		    <el-input type="text" v-model="ruleForm2.OldPhone" placeholder="请输入手机号码"></el-input>
		  </el-form-item>
		  <el-form-item label="新手机号" prop="NewPhone">
		    <el-input type="text" v-model="ruleForm2.NewPhone" placeholder="请输入手机号码"></el-input>
		  </el-form-item>
		  <el-form-item label="图片验证码" prop="canvas">
		    <el-input type="text"  v-model="ruleForm2.canvas" placeholder="请输入图片文字"></el-input>
		  </el-form-item>
		  <button id="sendCode">发送验证码</button>
		  <el-form-item label="验证码" prop="idCode">
		    <el-input type="text"  v-model="ruleForm2.idCode" placeholder="手机获得的验证码"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button  @click="submitForm('ruleForm2')">确定</el-button>
		  </el-form-item>
		</el-form>      
  </el-tab-pane>
</el-tabs>
</form>
     <div class="detail">
     	<h4>评价返利调整通知</h4>
     	<p>亲爱的用户：</p>
     	<div>乡品网评价返利于2017年4月21日结束 今后将推出更多回馈新老用户的优惠活动。</div>
     	<p>为什么要绑定手机？</p>
     	<div>验账号与手机号绑定后可增加账号安全性，帮助您快速找回密码，并可接受订单信息，账号变动、新品推荐等消息提醒。</div>
     	<p>账号安全提示</p>
     	<div>拉手网提示您保管好个人及账户信息，提防钓鱼网站，定期查杀个人电脑病毒与木马，尽量不在公共电脑登录乡品网。切勿随便向他人透露自己的账号密码等信息。以免账户被盗造成不必要的损失。详情请参见《乡品网用户协议》第三项（用户的基本义务）中第3.4、3.5、3.6条。</div>
     	</div>
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
  name: 'type2',
    components:{
  	Header_Top,
  	NavBar,
  	Footer1
  },
  data(){
  	return{
      tableData: [],
      page: {
        pageNo: 1,//当前页
        pageSize: 5,//每页的数据
        totalRecords: 17
      },
      activeName2: 'first',
      groupBuy:[
      {state:"已发货",pay:'280¥',num:1},
      {state:"已发货",pay:'280¥',num:1},
      {state:"已发货",pay:'280¥',num:1},
      {state:"已发货",pay:'280¥',num:1},
      {state:"已发货",pay:'280¥',num:1},
      {state:"已发货",pay:'280¥',num:1},
      {state:"已发货",pay:'280¥',num:1},
      ],
      product:{
        src:require('../assets/goodimg.jpg'),
        ordercode:12345678912345,
        dealtime:'2017-1.2-05 16:02',
        state:"已确认收货",
        price:"¥168",
        num:1,
        discount:"¥ 32",
        method:"快递",
        company:"顺丰公司",
        bianhao:'K123456789',
        date:'2017-12-05',
        time:"16:06",
        ztai:'卖家已发货'
      },    
       ruleForm2: {
          OldPhone: '',
          NewPhone: '',
          canvas: '',
          idCode:''
        },
        rules2: {
          OldPhone: [
            {require:true, trigger: 'blur' }
          ],
          NewPhone: [
            {require:true, trigger: 'blur' }
          ],
          canvas: [
            {require:true, trigger: 'blur' }
          ],
          idCode: [
            {require:true, trigger: 'blur' }
          ]
        }    
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
    handleClick(tab, event) {
    console.log(tab, event);
  },
   ensure(){
    this.$router.push("/payway1")
  }

  }
}
</script>

<style lang="scss" scoped>
#type2 {
  #pane-first .aaa{
    text-indent:20px !important;
    margin-bottom:10px;
  }
  #pane-second .aaa{
    text-indent:20px !important;
    border-bottom:2px solid #ccc;
    padding-bottom:10px;
    margin-bottom:6px;
  }
  #pane-third  .aaa{
    text-indent:20px !important;
  }
  width:100%;
  height:100%;
  .content{
  	width:75%;
  	margin:60px auto;
  	overflow:hidden;
  	 .wrap{
  	 	float:left;
  	 	width:520px;
  	 	height:540px;
        margin-right:40px;
  	 	border:1px solid #ccc;
  	 	ul{
         border-top:1px solid #ccc;
         padding:20px;
  	 	li{
  	 		overflow:hidden;
  	 		font-size:15px;
  	 		text-align:center;
  	 		margin-bottom:15px;
  	 		.title{
  	 			float:left;
  	 			font-size:15px;
  	 			margin-right:170px;
  	 		}
  	 		.state{
  	 			float:left;
  	 			margin-right:25px;
  	 			p{
  	 				font-size:12px;
  	 				color:#FC8701;
  	 			}
  	 		}
  	 		.pay{
  	 			float:left;
  	 			margin-right:28px;
  	 			p{
  	 				font-size:12px;
  	 				color:#FC8701;
  	 			}
  	 		}
  	 		.num{
  	 			float:left;
  	 			margin-right:25px;
  	 			p{
  	 				font-size:12px;
  	 				color:#FC8701;
  	 			}
  	 		}
  	 		button{
  	 			float:right;
  	 			width:35px;
  	 			height:20px;
  	 			background:#FC8701;
  	 			color:white;
  	 		}
  	 	 }
  	 	}
  	 	.block{
  	 		width:350px;
  	 		margin:0 auto;
  	 		margin-top:-10px;
  	 		margin-bottom:15px;
  	 	}
      .detail1{
        height:445px;
        position:relative;
        padding-left:20px;
         h4{
         
          font-size:13px;
         }
         .el-main{
          float:left;
          padding-left:0px;
           img{
            width:250px;
           }
         }
         .el-aside{
          width:230px!important;
          float:left;
          #goods{
            border:none;
            float:left;
            li{
              width:100%;
               margin-bottom:7px;
               color:#EE833F;
              span{
                float:left;
                font-size:13px;
              }
              input{
                float:left;
                width:128px;
                color:#EE833F;
              }
            }
           }
         }
         .bottom{
          padding-right:20px;
          font-size:14px;
          h3{
            margin-top:-10px;
            padding-bottom:10px;
            border-bottom:2px solid #ccc;
            margin-bottom:20px;
          }
          p{
            margin-bottom:6px;
            font{
              display:inline-block;
              margin-right:10px;
            }
          }
          div{
            width:100%;
            font{
              float:left;
              margin-right:10px;
            }
            ol{
              float:left;
               em{
                display:inline-block;
                margin:0 20px;
               }
            }
          }
         }
         button{
          position:absolute;
          bottom:15px;
          width:100px;
          height:30px;
          line-height:30px;
          text-align:center;
          color:white;
          background:#FE8601;
          &.continueMo{
            left:153px;
          }
          &.ensure{
            left:100px;
          }
         }
      }
  	 	.demo-ruleForm{
  	 		margin-top:15px;
  	 		padding-right:100px;
  	 		border-top:1px solid #ccc;
  	 		padding-top:30px;
  	 		.el-button {
  	 			width:125px;
  	 			height:40px;
  	 			line-height:5px;
  	 			text-align:center;
  	 			background:#FC8701;
  	 			color:white;
  	 			margin-top:36px;
  	 			margin-bottom:23px;
  	 		}
  	 		#sendCode{
  	 			width:100px;
  	 			height:40px;
  	 			text-align:center;
  	 			text-indent:10px;
  	 			color:#FC8701;
  	 			border-radius:6px;
  	 			outline:none;
  	 	    border:1px solid #ccc;
  	 			margin-left:98px;
  	 			margin-bottom:20px;
  	 		}
  	 	}
  	 }
  	 .detail{
  	 	float:left;
  	 	width:252px;
  	 	height:439px;
  	 	border:1px solid #ccc;
  	 	text-align:center;
  	 	padding:50px 15px;
  	 	font-size:15px;
  	 }
  }
}
</style>
