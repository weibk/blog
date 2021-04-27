---
home: true
bgImage: '/bg.jpg'
bgImageStyle: {
	height: '680px'
}
---

<div class="hero-link-box">
	<a class="hero-link">
		<i class="fas fa-chevron-down" aria-hidden="true"></i>
	</a>
</div>


<style lang="css" scoped>
	.home-blog-hero {
		position: relative!important;
	}		
	.hero-link-box {
		transition: transform 0.25s ease-in-out 0.26s, opacity 0.25s ease-in-out 0.26s; 
		transform: translateY(0px); 
		opacity: 1;
		width: 100%;
    position: absolute;
    top: 500px;
    text-align: center;
    -webkit-animation: breathe-down-animation 1s linear 0s infinite alternate;
    animation: breathe-down-animation 1s linear 0s infinite alternate;
	}
	.hero-link-box .hero-link {
		display: inline-block;
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    border-radius: 50%;
    font-size: 1.6rem;
    text-align: center;
    cursor: pointer;
    box-shadow: var(--box-shadow);
    color: #fff;
		font-weight: 500;
	}
	.hero-link-box .hero-link i {
		color: #fff;
	}
	.fa-chevron-down:before {
    content: "\f078";
	}
</style>

<script>
  window.$crisp = [];
window.CRISP_WEBSITE_ID = "d55b1b42-cb4d-4e52-b553-68f0ef6fb320";
(function () {
    d = document;
    s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
})();

// 	window.onload = function (){
//   let hero = document.querySelector('.hero');
//   let herolink = document.querySelector('.hero-link-box');
//   let linkbox = document.querySelector('.hero-link');
//   hero.appendChild(herolink);
//   linkbox.addEventListener('click',function () {
//     document.body.scrollTop = 650;
//     document.documentElement.scrollTop = 680;
//   })
// }
</script>