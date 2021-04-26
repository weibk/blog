<template>
	<div class="abstract-item" @click="$router.push(item.path)">
		<reco-icon v-if="item.frontmatter.sticky" icon="reco-sticky" />
		<div class="abstract-wrap">
			<div class="page-cover">
				<img :src="imgUrl" alt="封面图">
			</div>
			<div class="abstract-box">
				<div class="title">
					<reco-icon v-if="item.frontmatter.keys" icon="reco-lock" />
					<router-link :to="item.path">{{item.title}}</router-link>
				</div>
				<div class="abstract" v-html="item.excerpt"></div>
				<PageInfo :pageInfo="item" :currentTag="currentTag">
				</PageInfo>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		defineComponent
	} from 'vue-demi'
	import {
		RecoIcon
	} from '@vuepress-reco/core/lib/components'
	import PageInfo from './PageInfo'
	export default defineComponent({
		components: {
			PageInfo,
			RecoIcon
		},
		props: {
			item:{
				type:Object
			},
			currentPage:{
				type:Number
			},
			currentTag:{
				type:String
			},
			imgUrl:{
				type:String,
				default:'https://cdn.jsdelivr.net/gh/weibk/blog_asset@1.0/images/10.jpg'
			}
		}	
	})
</script>

<style lang="stylus" scoped>
	.abstract-item
	  position relative
	  margin: 0 auto 20px;
	  padding: 16px 20px;
	  width 100%
	  overflow: hidden;
	  border-radius: $borderRadius
	  box-shadow: var(--box-shadow);
	  box-sizing: border-box;
	  transition all .3s
	  background-color var(--background-color)
	  cursor: pointer;
	  > * {
	    pointer-events: auto;
	  }
		&:hover
		  img 
		    transform scale(1)
		    filter blur(0)
	  .reco-sticky
	    position absolute
	    top 0
	    left 0
	    display inline-block
	    color $accentColor
	    font-size 2.4rem
	  &:hover
	    box-shadow: var(--box-shadow-hover)
	  .title
	    position: relative;
	    font-size: 1.28rem;
	    line-height: 46px;
	    display: inline-block;
	    a
	      color: var(--text-color);
	    .reco-lock
	      font-size 1.28rem
	      color $accentColor
	    &:after
	      content: "";
	      position: absolute;
	      width: 100%;
	      height: 2px;
	      bottom: 0;
	      left: 0;
	      background-color: $accentColor;
	      visibility: hidden;
	      -webkit-transform: scaleX(0);
	      transform: scaleX(0);
	      transition: .3s ease-in-out;
	    &:hover a
	      color $accentColor
	    &:hover:after
	      visibility visible
	      -webkit-transform: scaleX(1);
	      transform: scaleX(1);
	  .tags
	    .tag-item
	      &.active
	        color $accentColor
	      &:hover
	        color $accentColor
		.abstract-wrap
		  display -webkit-box
		  display flex
		  .page-cover 
		    width 35%
		    min-width 120px
		    height auto
		    border-radius .25rem
		    margin-right 15px
		    overflow hidden
		    img 
		      width 100%
		      height 100%
		img 
		  transition .5s ease-out
		  transform scale(1.12)
		  filter blur(2px)
		  -o-object-fit cover
		  object-fit cover
		.abstract-box 
		  display -webkit-box
		  display flex
		  -webkit-box-orient vertical
		  -webkit-box-direction normal
		  flex-direction column
		  -webkit-box-pack justify
		  justify-content space-between
		  -webkit-box-flex 1
		  flex 1
		.title 
		  position relative
		  font-size 1.28rem
		  display inline-block
		.abstract 
		  display -webkit-box
		  -webkit-line-clamp 3
		  overflow hidden
		  -webkit-box-orient vertical
		  margin-bottom 15px
	@media (max-width: $MQMobile)
	  .tags
	    display block
	    margin-top 1rem;
	    margin-left: 0!important;
</style>
