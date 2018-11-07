<template>
  <div id="app">
    <router-view></router-view>
	<tabbar class="footer">
      <tabbar-item link="/" :class="footer == 'home' ? 'active' : 'noact'">
				<img slot="icon" src="./assets/icon_nav_button.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/cart" :class="footer == 'cart' ? 'active' : 'icon-home'">
				<img slot="icon" src="./assets/icon_nav_article.png">
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item link="/me" :class="footer == 'me' ? 'active' : 'icon-home'">
				<img slot="icon" src="./assets/icon_nav_cell.png">
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  name: 'App',
components: {
	Tabbar,
	TabbarItem
 },
 		created(){
			var footer = location.href.split('#/')[1];
			console.log(footer)
			if(footer == ''){
				footer = 'home';
			}
			this.footer = footer;
		}
}
</script>

<style scoped lang="less">
	@import '~vux/src/styles/1px.less';
	@import '~vux/src/styles/close.less';
</style>