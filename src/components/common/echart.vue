<template>
    <div class="echarts">
		<div :id="id" :style="styles"></div>
	</div>
</template>
<script>
	import echarts from 'echarts'
    export default {
        data() {
                return {
                    styleObject: {
                        width: '600px',
                        height: '300px'
                    }
                }
            },
            props: {
                id: {
                    type: String
                },
                opinion: {
                    type: Object
                },
                styles: {
                    type: Object
                }
            },
            mounted() {
                this.$nextTick(() => {
                    this.drawPie(this.id)
                })
            },
            methods: {
                drawPie(id) {
                    let that = this
                    this.charts = echarts.init(document.getElementById(id))
                    this.charts.setOption(
                        that.opinion
                    )
                    this.addLoadEvent(this.charts.resize)
                },
                addLoadEvent(fn) {
                    var old = window.onresize;
                    if (typeof window.onresize != 'function') {
                        window.onresize = fn;
                    } else {
                        window.onresize = function() {
                            old();
                            fn();
                        }
                    }
                }
            }
    }
</script>
<style scoped>
	
</style>