<template>
  <div class="group-list">
	<v-tap :title="'团队列表'">
		<div class="right solt-div" slot="right"><span class="slot-span">已成团：24767</span><span  class="slot-span">未成团：23</span></div>
	</v-tap>
  </div>
</template>

<script>
import vTap from '../common/tap.vue'
  export default {
  components:{vTap}
  }
</script>

<style scoped lang="less">
.group-list{
	.solt-div{
		margin-right:32px;
		.slot-span{
			display: inline-block;
			margin-left: 15px;
		    padding: 0 10px;
		    height: 29px;
		    line-height: 29px;
		    background: #13ce66;
		    border-radius: 100px;
		    text-align: center;
		    font-family: PingFangSC-Medium;
		    font-size: 13px;
		    color: #fff;
		}
	}
	
}
</style>
