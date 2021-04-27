<template>
	<div class="abstract-item" :class="dclass" @click="$router.push(item.path)">
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
			},
      index:{
			  type:Number
      }
		},
    computed:{
		  dclass: function (){
		    let num = parseInt(this.index);
		    if((num + 1) % 3 == 1 ) {
		      return 'draw';
        }else if((num + 1) % 3 == 2) {
		      return 'center';
        }else {
		      return 'draw meet';
        }
      }
    }
	})
</script>

<style lang="stylus" scoped>
	//.abstract-item
	//  position relative
	//  margin: 0 auto 20px;
	//  padding: 16px 20px;
	//  width 100%
	//  overflow: hidden;
	//  border-radius: $borderRadius
	//  box-shadow: var(--box-shadow);
	//  box-sizing: border-box;
	//  transition all .3s
	//  background-color var(--background-color)
	//  cursor: pointer;
	//  > * {
	//    pointer-events: auto;
	//  }
	//  .reco-sticky
	//    position absolute
	//    top 0
	//    left 0
	//    display inline-block
	//    color $accentColor
	//    font-size 2.4rem
	//  &:hover
	//    box-shadow: var(--box-shadow-hover)
  //  &:hover
  //  img
  //    transform scale(1)
  //    filter blur(0)
	//  .title
	//    position: relative;
	//    font-size: 1.28rem;
	//    line-height: 46px;
	//    display: inline-block;
	//    a
	//      color: var(--text-color);
	//    .reco-lock
	//      font-size 1.28rem
	//      color $accentColor
	//    &:after
	//      content: "";
	//      position: absolute;
	//      width: 100%;
	//      height: 2px;
	//      bottom: 0;
	//      left: 0;
	//      background-color: $accentColor;
	//      visibility: hidden;
	//      -webkit-transform: scaleX(0);
	//      transform: scaleX(0);
	//      transition: .3s ease-in-out;
	//    &:hover a
	//      color $accentColor
	//    &:hover:after
	//      visibility visible
	//      -webkit-transform: scaleX(1);
	//      transform: scaleX(1);
	//  .tags
	//    .tag-item
	//      &.active
	//        color $accentColor
	//      &:hover
	//        color $accentColor
	//	.abstract-wrap
	//	  display -webkit-box
	//	  display flex
	//	  .page-cover
	//	    width 35%
	//	    min-width 120px
	//	    height auto
	//	    border-radius .25rem
	//	    margin-right 15px
	//	    overflow hidden
	//	    img
	//	      width 100%
	//	      height 100%
	//	img
	//	  transition .5s ease-out
	//	  transform scale(1.12)
	//	  filter blur(2px)
	//	  -o-object-fit cover
	//	  object-fit cover
	//	.abstract-box
	//	  display -webkit-box
	//	  display flex
	//	  -webkit-box-orient vertical
	//	  -webkit-box-direction normal
	//	  flex-direction column
	//	  -webkit-box-pack justify
	//	  justify-content space-between
	//	  -webkit-box-flex 1
	//	  flex 1
	//	.title
	//	  position relative
	//	  font-size 1.28rem
	//	  display inline-block
	//	.abstract
	//	  display -webkit-box
	//	  -webkit-line-clamp 3
	//	  overflow hidden
	//	  -webkit-box-orient vertical
	//	  margin-bottom 15px
	//@media (max-width: $MQMobile)
	//  .tags
	//    display block
	//    margin-top 1rem;
	//    margin-left: 0!important;
  .abstract-item {
    position: relative;
    margin: 0 auto 20px;
    padding: 16px 20px;
    width: 100%;
    overflow: hidden;
    border-radius: $ borderRadius;
    box-shadow: var(--box-shadow);
    box-sizing: border-box;
    transition: all .3s;
    background-color: var(--background-color);
    cursor: pointer
  }

  .abstract-item::before, .abstract-item::after {
    box-sizing: inherit;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .abstract-item {
    transition: color 0.25s;
  }
  .abstract-item::before, .abstract-item::after {
    border: 2px solid transparent;
    width: 0;
    height: 0;
  }

  .abstract-item > * {
    pointer-events: auto
  }

  .abstract-item .reco-sticky {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    color: $ accentColor;
  font-size: 2.4rem
  }

  .abstract-item:hover {
    box-shadow: var(--box-shadow-hover)
  }

  .abstract-item .title {
    position: relative;
    font-size: 1.28rem;
    line-height: 46px;
    display: inline-block
  }

  .abstract-item .title a {
    color: var(--text-color)
  }

  .abstract-item .title .reco-lock {
    font-size: 1.28rem;
    color: $ accentColor
  }

  .abstract-item .title:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: $ accentColor;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  transition: .3s ease-in-out
  }

  .abstract-item .title:hover a {
    color: $ accentColor
  }

  .abstract-item .title:hover:after {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1)
  }

  .abstract-item .tags .tag-item.active {
    color: $ accentColor
  }

  .abstract-item .tags .tag-item:hover {
    color: $ accentColor;
  }

  .abstract-item .abstract-wrap {
    display: -webkit-box;
    display: flex;
  }

  .abstract-item .abstract-wrap .page-cover {
    width: 35%;
    min-width: 120px;
    height: auto;
    border-radius: .25rem;
    margin-right: 15px;
    overflow: hidden;
  }

  .abstract-wrap .page-cover img {
    width: 100%;
    height: 100%;
    transition: .5s ease-out;
    transform: scale(1.12);
    filter: blur(2px);
    -o-object-fit: cover;
    object-fit: cover;
  }

  .abstract-item .abstract-box {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-flex: 1;
    flex 1
  }

  .abstract-item .abstract-box .title {
    position: relative;
    font-size: 1.28rem;
    display: inline-block;
  }

  .abstract-box .title:after {
    visibility: visible;
    transform: scaleX(1);
  }

  .abstract-box .title:hover:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #266bff;
    visibility: hidden;
    transform: scaleX(0);
    transition: .3s ease-in-out;
  }

  .abstract-item .abstract-box .abstract {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    overflow: hidden;
    -webkit-box-orient: vertical;
    margin-bottom: 15px;
  }

  .abstract-item:hover img {
    transform: scale(1);
    filter: blur(0);
  }

  .draw::before {
    top: 0;
    left: 0;
  }
  .draw::after {
    bottom: 0;
    right: 0;
  }
  .draw:hover {
    color: #60daaa;
  }
  .draw:hover::before, .draw:hover::after {
    width: 100%;
    height: 100%;
  }
  .draw:hover::before {
    border-top-color: #60daaa;
    border-right-color: #60daaa;
    transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
  }
  .draw:hover::after {
    border-bottom-color: #60daaa;
    border-left-color: #60daaa;
    transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;
  }

  .meet:hover {
    color: #fbca67;
  }
  .meet::after {
    top: 0;
    left: 0;
  }
  .meet:hover::before {
    border-top-color: #fbca67;
    border-right-color: #fbca67;
  }
  .meet:hover::after {
    border-bottom-color: #fbca67;
    border-left-color: #fbca67;
    transition: height 0.25s ease-out, width 0.25s ease-out 0.25s;
  }
  .center:hover {
    color: #6477b9;
  }
  .center::before, .center::after {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    -webkit-transform-origin: center;
    transform-origin: center;
  }
  .center::before {
    border-top: 2px solid #6477b9;
    border-bottom: 2px solid #6477b9;
    -webkit-transform: scale3d(0, 1, 1);
    transform: scale3d(0, 1, 1);
  }
  .center::after {
    border-left: 2px solid #6477b9;
    border-right: 2px solid #6477b9;
    -webkit-transform: scale3d(1, 0, 1);
    transform: scale3d(1, 0, 1);
  }
  .center:hover::before, .center:hover::after {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    transition: transform 0.5s, -webkit-transform 0.5s;
  }
</style>
