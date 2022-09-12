<script setup>

const cap = () => window.open("http://capstonbee.com")
const openFeedBack = () => {
	window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	SITE_ACTIONS().toggleFeedback()
}
</script>
<template>
    <section id="section">
		<div class="header" id="header">
			<div class="wrapper">
				<h1 style="display:flex; align-items: center">
				capston bee
					<!-- <svg xmlns="http://www.w3.org/2000/svg" style="margin-left: .6em;" width="20.828" height="11.414" viewBox="0 0 20.828 11.414">
						<path id="Icon_feather-chevron-down" data-name="Icon feather-chevron-down" d="M9,13.5l9,9,9-9" transform="translate(-7.586 -12.086)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
					</svg> -->
				</h1>
			</div>
		</div>

		<div class="interactive-component">
			<div class="wrapper">
				<img src="../../assets/img/picture.jpg">
			</div>
		</div>

		<div class="links">
			<!-- site links container -->

			<div class="links-container">
				<div class="h2"><h2>Shopping Online</h2></div>
				<div class="item">
					<NuxtLink to="/">My Cart</NuxtLink>
					<NuxtLink to="/">Collections</NuxtLink>
					<NuxtLink to="/">FAQs</NuxtLink>
					<NuxtLink to="/">Checkout</NuxtLink>
					<NuxtLink to="/">My Account</NuxtLink>
				</div>
			</div>

			<!-- site links container -->

			<div class="links-container">
				<div class="h2"><h2>Information</h2></div>
				<div class="item">
					<NuxtLink to="/">Find US</NuxtLink>
					<NuxtLink to="/">Shipping Policy</NuxtLink>
					<NuxtLink to="/">Collaborate with us</NuxtLink>
					<span @click="openFeedBack()">Site Feedback</span>
				</div>
			</div>

			<!-- site links container -->

			<div class="links-container">
				<div class="h2"><h2>Contact</h2></div>
				<div class="item">
					<a @click="cap">capstonbee.com</a>
					<a href="mailto:capstonbee@yahoo.com">capstonbee@yahoo.com</a>
					<a href="tel:+23409019381921">Hotline: +234 901 235 7895</a>
				</div>
			</div>

		</div>

		<div class="rights">
			<h3><span style="color: #EEAF2C">Bottles 'N' Cans</span> By <span style="color: #EEAF2C; text-decoration: underline;">Capstonbee</span> - © 2021. ALL RIGHTS RESERVED.</h3>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@import '../../assets/stylesheet/breakpoint.scss';
/*STYLING BEGINS*/
/*------------------------------------------------*/
/*BEGIN WITH THE ROOT ELEMENT*/

/*STYLING BEGINS*/
/*------------------------------------------------*/
/*BEGIN THE LINKS STYLING*/
*{margin: 0;}
h1, h2 { color: #292929; font-family: 'Chonburi';}
h1 {font-size: clamp(18px, 9vw, 39px);} h2 {font-size: 1.5em;}
h3 {font-family: 'Chonburi'; font-weight: 100;font-size: 18px; color: #292929;}
section{
	@include M-landscape{display: none};
	background: #c7c7c71f;
	@media (min-width:600px) {display: none}
}
.header {
	width: 100%;
	height: 114.5px;

	display: flex;
	align-items: center;
	justify-content: center;
	border-top: 1px solid rgba(204, 204, 204, 0.288);
	border-bottom: 2px solid rgba(204, 204, 204, 0.288);

	h1{font-size: 2em;}
}

.header .wrapper {
	display: flex;
	align-items: center;
	// justify-content: center;

	width: 100%;
	margin: 0 3em;
}

.interactive-component {
	display: flex;
	align-items: center;
	justify-content: center;

	overflow-y: auto;
	margin: 2em 0;
	width: 100%;
}

.interactive-component .wrapper {
	display: flex;
	flex-direction: column;
	align-items: flex-end;

	width: 100%;
	margin: 0 2em;
}

.interactive-component .wrapper img {
	width: 100%;
	height: 190px;
	border-radius: 8px;

	object-fit: cover;
	background: #282828;
	filter: grayscale(70%)
}

.interactive-component .wrapper div {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 1em;
	
	width: 220px;
}

.links {
	width: 100%;
	display: flex;
	flex-direction: column;
}

.links .links-container {
	width: 100%;

	display: flex;
	flex-direction: column;
}

.links .links-container .h2 {
	width: 100%;

	// border-top: 1px solid rgba(204, 204, 204, 0.993);
	// border-bottom: 1px solid rgba(204, 204, 204, 0.993);

	display: flex;
	align-items: center;
	cursor: pointer;
}

.links .links-container .h2 h2 {
	margin-left: 1.4em;
	height: 76px;
	display: flex;
	align-items: center;
	font-weight: 800;
}

.links .links-container .item {
	margin: 1em 0;
	width: fit-content;
}

.links .links-container .item a, .links .links-container .item span  {
	font-size: 1em;
	font-family: 'Montserrat';
	font-weight: 100;

	text-decoration: none;
	display: block; color: #292929;

	margin-bottom: 1em;
	margin-left: 2em;
}

.rights {
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;

	text-align: center;
	border-top: 1px solid #ccc;
	padding: 2em 0;
}

.rights h3 {margin: 0 2em; font-size: 18px;}

.active {
	height: 115px;
	overflow-y: hidden;
}
</style>

<!-- <style lang="scss" scoped>
@import '../../assets/stylesheet/breakpoint.scss';
/*STYLING BEGINS*/
/*------------------------------------------------*/
/*BEGIN WITH THE ROOT ELEMENT*/

/*STYLING BEGINS*/
/*------------------------------------------------*/
/*BEGIN THE LINKS STYLING*/
*{margin: 0;}
h1, h2 { color: #fff; font-family: 'Chonburi';font-weight: 100;}
h1 {font-size: clamp(18px, 9vw, 39px);} h2 {font-size: 1.5em;}
h3 {font-family: 'Chonburi'; font-weight: 100;font-size: 18px; color: #fff;}
section{
	@include M-landscape{display: none};
	background: #292929;
	@media (min-width:600px) {display: none}
}
.header {
	width: 100%;
	height: 114.5px;

	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid rgba(204, 204, 204, 0.993);

	h1{font-size: 1.99em;}
}

.header .wrapper {
	display: flex;
	align-items: center;
	// justify-content: center;

	width: 100%;
	margin: 0 2em;
}

.interactive-component {
	display: flex;
	align-items: center;
	justify-content: center;

	overflow-y: auto;
	margin: 2em 0;
	width: 100%;
}

.interactive-component .wrapper {
	display: flex;
	flex-direction: column;
	align-items: flex-end;

	width: 100%;
	margin: 0 2em;
}

.interactive-component .wrapper img {
	width: 100%;
	height: 120px;
	border-radius: 8px;

	object-fit: cover;
	background: #282828;
	filter: grayscale(70%);
}

.interactive-component .wrapper div {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 1em;
	
	width: 220px;
}

.links {
	width: 100%;
	display: flex;
	flex-direction: column;
}

.links .links-container {
	width: 100%;

	display: flex;
	flex-direction: column;
}

.links .links-container .h2 {
	width: 100%;

	border-top: .1px solid #ccc;
	border-bottom: .1px solid #ccc;

	display: flex;
	align-items: center;
	cursor: pointer;
}

.links .links-container .h2 h2 {
	margin-left: 1.4em;
	height: 76px;
	display: flex;
	align-items: center;
}

.links .links-container .item {
	margin: 3em 0;
	width: fit-content;
}

.links .links-container .item a, .links .links-container .item span  {
	font-size: 1em;
	font-family: 'Montserrat';
	font-weight: 100;

	text-decoration: none;
	display: block; color: #fff;

	margin-bottom: 1em;
	margin-left: 2em;
}

.rights {
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;

	text-align: center;
	border-top: 1px solid #ccc;
	padding: 2em 0;
}

.rights h3 {margin: 0 1em;}

.active {
	height: 115px;
	overflow-y: hidden;
}
</style> -->