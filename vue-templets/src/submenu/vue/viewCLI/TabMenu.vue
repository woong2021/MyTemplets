<template>
  		<article>
				<div id="tabs">
					<ul class="tab-menu">
						<li v-for= '(tab, index) in tabs' v-bind:class="{active:currentTab===index}">
							<a href="#" v-on:click="currentTab = index">{{ tab }}</a>
						</li> 
					</ul>
					<div class="tab-content">
						<div v-show="currentTab == 0">tab cont1</div>
						<div v-show="currentTab == 1">tab cont2</div>
					</div>
				</div>
			</article>	
</template>

<script>
export default {
	name: 'tabs',
	data(){
		return{
			currentTab: 0,
			tabs: ['공영주차장 지도검색','공영주차장 주소검색']
		}
	}
}
</script>

<style scope lang="scss">
	#tabs{
		.tab-menu{
			display: flex;

			li{
				padding: 10px 0;
				width: 50%;
				text-align: center;
				border: 1px solid $color;

				a{
					color: $color;
				}

				&.active{
					background-color: $color;

					a{
						color:$white;
					}
				}
			}
		}
	}
</style>