<template>
  <div class="home">
	<v-tap :title="'HOME'">
		<div class="right" slot="right">000000000</div>
	</v-tap>
	<div class="home-wrapper">
		<div class="left-wrapper">
			<div class="rect clear">
				<v-rect class="left rect-item" :num="'365465万'" :type="'销售额'" :color="'#20A0FF'"></v-rect>
				<v-rect class="left rect-item" :num="'365465万'" :type="'销售额'" :color="'#F7BA2A'"></v-rect>
				<v-rect class="left rect-item" :num="'365465万'" :type="'销售额'" :color="'#4ACBDD'"></v-rect>
				<v-rect class="left rect-item" :num="'365465万'" :type="'销售额'" :color="'#13CE66'"></v-rect>
			</div>
			<div class="persent-wrapper">
				<h3 class="title">Team share statistics</h3>
				<div class="echarts2">
			       <v-Echarts v-if="!!opinion2" :id='"mian1"' :opinion="opinion2" :styles="{width:'260px',height:'260px'}"></v-Echarts>
			       <div class="dd">团队占比</div>
			    </div>
			    <ul class="list-persent">
			    	<li class="clear"><label class="left">北京办公室</label><span style="color:#4ACBDD" class="right">35%</span></li>
			    	<li class="clear"><label class="left">广州办公室</label><span style="color:#F7BA2A" class="right">45%</span></li>
			    	<li class="clear"><label class="left">成都办公室</label><span style="color:#13CE66" class="right">20%</span></li>
			    </ul>
			</div>
			<div class="todolist1">
				<h3 class="title">My to-do list</h3>
				<div style="border-top:1px solid #bfcbd9">
					<v-todo-list :title="'待操作任务'" :list="todo.todo1"></v-todo-list>
					<v-todo-list :title="'待操作任务'" :list="todo.todo1"></v-todo-list>
				</div>				
			</div>
		</div>
		<div class="right-wrapper">
			<div class="echarts1">
			<h3 class="title">Sales performance statistics</h3>
		      <v-Echarts v-if="!!opinion1" :id='"mian2"' :opinion="opinion1" :styles="{width:'100%',height:'420px'}"></v-Echarts>
		    </div>
		</div>
    </div>
  </div>
</template>

<script>
import vTap from '../common/tap.vue'
import vEcharts from '../common/echart.vue'
import vRect from '../common/rectdata.vue'
import vTodoList from './todolist.vue'
let pageArray = [];
  export default {
  	components:{vTap,vEcharts,vRect,vTodoList},
  	data(){
  		return{
  			opinion1: null,
      		opinion2: null,
      		todo:{
      			todo1:[{text:'HSBT-CDZY-18010 HSBT-CDZY-18010    Paris',new:true},{text:'HSBT-CDZY-18010   Paris',new:false},{text:'HSBT-CDZY-18010   Paris',new:true}]
      		}
  		}
  	},
	created() {
		pageArray[parseInt(this.$route.query.page)] = this.items
		setTimeout(() => {
			this.opinion1 = {
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						label: {
							backgroundColor: '#777'
						}
					}
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: [{
					type: 'category',
					boundaryGap: false,

					data: ['1月', '2月', '3月','4月','5月','6月','7月'],
					axisLabel: {
						textStyle: {
							color: '#999'
						}
					},
					axisLine: {
						lineStyle: {
							color: '#ccc'
						}
					},
					axisTick: {
						show: false
					}
				}],
				yAxis: [{
					type: 'value',
					splitNumber: 4,
					splitLine: {
						show: false
					},

					axisLabel: {
						textStyle: {
							color: '#999'
						}
					},
					axisLine: {
						lineStyle: {
							color: '#ccc'
						}
					},
					axisTick: {
						show: false
					}
				}],
				series: [{
					name: '邮件营销',
					type: 'line',
					stack: '总量',
					itemStyle: {
						normal: {
							color: 'rgba(97,202,222,0.50)',
							borderWidth: 5,
							opacity: 1
						},
						emphasis: {
							color: 'rgba(97,202,222,0.50)'
						}
					},
					lineStyle: {
						normal: {
							color: 'rgba(97,202,222,0.50)'
						}
					},
					areaStyle: {
						normal: {
							color: 'rgba(97,202,222,0.50)',
							opacity: 1
						}
					},
					data: [33200, 13250, 23010,33200, 13250, 23010,13000]
				}, {
					name: '联盟广告',
					type: 'line',
					stack: '总量',
					itemStyle: {
						normal: {
							color: 'rgba(97,202,222,0.4)',
							borderWidth: 5,
							opacity: 1
						},
						emphasis: {
							color: 'rgba(97,202,222,0.40)'
						}
					},
					lineStyle: {
						normal: {
							color: 'rgba(97,202,222,0.4)'
						}
					},
					areaStyle: {
						normal: {
							color: 'rgba(97,202,222,0.4)',
							opacity: 1
						}
					},
					data: [8208, 33500, 13667,8208, 33500, 13660,5896]
				}]
			}
		}, 20)
		setTimeout(() => {
			this.opinion2 = {
				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b}: {c} ({d}%)"
				},
				color: ['#4ACBDD', '#F7BA2A','#13CE66'],
				series: [{
					name: '访问来源',
					type: 'pie',
					radius: ['60%', '70%'],
					avoidLabelOverlap: false,

					label: {
						normal: {
							show: false,
							position: 'center'
						},

					},
					data: [{
						value: 335,
						name: '北京办公室'
					}, {
						value: 310,
						name: '广州办公室'
					},{
						value: 310,
						name: '成都办公室'
					}]
				}]
			}
		}, 50)

	}
}
</script>

<style scoped lang="less">
.home{
	.home-wrapper{
		display:flex;
		padding:36px 32px 0;
		.left-wrapper{
			flex:0 0 310px;
			.rect{
				width:100%;
				.rect-item{
					margin-bottom:20px;
					margin-right:20px;
				}
				.rect-item:nth-child(even){
					margin-right:0px;
				}
			}
			.persent-wrapper{
				background: #FFFFFF;
				border: 1px solid #EFEFEF;
				box-shadow: 0 2px 4px 0 rgba(176,176,176,0.50);
				border-radius: 4px;
				padding:30px 0 49px;
				.title{

					font-family: '微软雅黑';
					font-size: 22px;
					height:30px;
					line-height:30px;
					color: #1F2D3D;
					text-align:center;
				}
				.echarts2{
					position: relative;
				}
				.list-persent{
					width:193px;
					margin:0 auto;
					li{
						margin-top:9px;
						label{
							font-family: PingFangSC-Regular;
							font-size: 15px;
							color: #44576C;
							span{
								font-family: PingFangSC-Medium;
								font-size: 15px;

							}
						}
					}
				}
			}
			.todolist1{
				margin-top:19px;
				width:310px;
				padding:21px 37px 28px;
				background: #FFFFFF;
				border: 1px solid #EFEFEF;
				box-shadow: 0 2px 4px 0 rgba(176,176,176,0.50);
				border-radius: 4px;
				.title{
					font-size: 22px;
					color: #1F2D3D;
					margin-bottom:21px;
				}
			}
		}
		.right-wrapper{
			flex:1;
			margin-left:20px;
		}
		.echarts1{
			width: 100%;
			height: 480px;
			background: #FFFFFF;
			border: 1px solid #EFEFEF;
			box-shadow: 0 2px 4px 0 rgba(176,176,176,0.50);
			border-radius: 4px;
			.title{
				font-size: 22px;
				color: #1F2D3D;
				margin:30px 0 0 37px;
			}
		}
		
		.dd{
		  width: 100px;
		  height: 30px;
		  line-height: 30px;
		  position: absolute;
		  left: 50%;
		  top: 50%;
		  margin-top: -15px;
		  margin-left: -50px;
		  font-family: PingFangSC-Regular;
		  font-size: 15px;
		  color: #44576C;
		}
	}
	

}

</style>
