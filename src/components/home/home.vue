<template>
	<div class="home">
		<swiper  :list="demo06_list" loop auto></swiper><!--  -->
		<div>
			<img class="previewer-demo-img" v-for="(item, index) in list" :src="item.src" width="100" @click="show(index)">
			<div v-transfer-dom>
			  <previewer :list="list" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
			</div>
		</div>
	</div>
</template>

<script>
	//引入组件
	import { Previewer, TransferDom,XHeader,Swiper } from 'vux'
	import { dCode } from '../../data/fetchData';
	
	const baseList = [{
	  url: 'javascript:',
	  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
	  title: '送你一朵fua'
	}, {
	  url: 'javascript:',
	  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
	  title: '送你一辆车'
	}, {
	  url: 'javascript:',
	  img: 'https://static.vux.li/demo/5.jpg', // 404
	  title: '送你一次旅行',
	  fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
	}]
	const urlList = baseList.map((item, index) => ({
	  url: 'http://m.baidu.com',
	  img: item.img,
	  fallbackImg: item.fallbackImg,
	  title: `${item.title}`
	}))
	
	export default {
		directives: {
			TransferDom
		 },
		components: {
			Previewer,
			XHeader,
			Swiper
		 },
		data() {
			return {
			    list: [{
					msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
					src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
					w: 800,
					h: 400
				  },
				  {
					msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
					src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
					w: 1200,
					h: 900
				  }, {
					msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwwcynw2j20p00b4js9.jpg',
					src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwwcynw2j20p00b4js9.jpg'
				  }],
				  options: {
					getThumbBoundsFn (index) {
					  // find thumbnail element
					  let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
					  // get window scroll Y
					  let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
					  // optionally get horizontal scroll
					  // get position of element relative to viewport
					  let rect = thumbnail.getBoundingClientRect()
					  // w = width
					  return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
					  // Good guide on how to get element coordinates:
					  // http://javascript.info/tutorial/coordinates
					}
				  }	,
				  demo06_list: urlList
			}
		},
		methods:{
			logIndexChange (arg) {
			  console.log(arg)
			},
			show (index) {
			  this.$refs.previewer.show(index)
			}
			
		},
		created(){
			/*this.$vux.alert.show({
				 
			  title: '好了抓紧写主页！',
			  content: 'Do you agree?',
			  onShow () {
				console.log('Plugin: I\'m showing')
			  },
			  onHide () {
				console.log('Plugin: I\'m hiding')
			  }
			
			})*/
			dCode(1).then(data=>{
				console.log(data)
			})
		}
	}
</script>


<style scoped>
.copyright {
  font-size: 12px;
  color: #ccc;
  text-align: center;
}
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p{
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}
.black {
  background-color: #000;
}
.title{
  line-height: 100px;
  text-align: center;
  color: #fff;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.vux-indicator.custom-bottom {
  bottom: 30px;
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.fadeInUp {
  animation-name: fadeInUp;
}
.swiper-demo-img img {
  width: 100%;
}
</style>
