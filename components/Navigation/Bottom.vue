<script setup>

const Menu =  defineAsyncComponent({ loader: () => import('~~/components/Modals/Menu.vue'),
delay: 500 })
const feedback = defineAsyncComponent({ loader: () => import('~~/components/Modals/Feedback.vue')})
const cart = defineAsyncComponent({ loader: () => import('~~/components/Modals/Cart.vue')})
const screenWidth = () => {
	if(window.innerWidth < 700) return true;
	return false
}

fetchCollections();

const scroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: "end" });
    document.getElementById(id).style.outline = '1px solid #EEAF2C'
    if (document.getElementById(id).style.outline = '1px solid #EEAF2C') setTimeout(() => {
        document.getElementById(id).style.outline = '1px solid black'
    }, 2000);
}
</script>

<template>
	<div class="roort">
			<div class="ontop maximum">
			<div class="root-nav">
				<div class="section1">
					<div class="toggle-logo">
						<svg xmlns="http://www.w3.org/2000/svg" @click="SITE_ACTIONS().toggleMenu()" width="70" viewBox="0 0 70 82" style="cursor: pointer;">
							<g id="Group_547" data-name="Group 547" transform="translate(-0.439 -64)">
								<g id="Rectangle_848" data-name="Rectangle 848" transform="translate(0.439 64)" fill="#fff" stroke="#707070" stroke-width="0">
								<rect width="70" height="82" stroke="none"/>
								<rect x="0.5" y="0.5" width="69" height="81" fill="none"/>
								</g>
								<path id="Icon_material-menu" data-name="Icon material-menu" d="M4.5,27.45h27V24.375H4.5Zm0-7.687h27V16.688H4.5ZM4.5,9v3.075h27V9Z" transform="translate(17.22 86.333)" fill="#444"/>
							</g>
						</svg>
						
						<NuxtLink to="/" id="logo">
							<img src="/logo.svg" alt="logo" width="100">
						</NuxtLink>
					</div>
					<div class="menus">
						<a 
						style="font-family: 'Montserrat'; font-weight: 800; font-size: 12px; cursor: pointer"
						@click="scroll('topnav-search')"
						>search.</a>
						<NuxtLink to="/#featured-products" style="color: #202124; font-weight: 600;">featured.</NuxtLink>
						<NuxtLink to="https://capstonbee.com" target="_blank">CAPSTONBEE.</NuxtLink>
					</div>
				</div>
				<div class="section2">
					<div class="first">
						<a @click="SITE_ACTIONS().toggleMenu()">menu</a>
						<NuxtLink to="#" class="button user" @click="SITE_ACTIONS().toggleLogin()">
							<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 31 31">
								<path id="Icon_material-account-circle" data-name="Icon material-account-circle" d="M18,3A15,15,0,1,0,33,18,15.005,15.005,0,0,0,18,3Zm0,4.5A4.5,4.5,0,1,1,13.5,12,4.494,4.494,0,0,1,18,7.5Zm0,21.3a10.8,10.8,0,0,1-9-4.83c.045-2.985,6-4.62,9-4.62s8.955,1.635,9,4.62a10.8,10.8,0,0,1-9,4.83Z" transform="translate(-2.5 -2.5)" fill="none" stroke="#000" stroke-width="1"/>
							</svg>
							{{ SITE_AUTH().user.name.length > 1 ? SITE_AUTH().user.name : 'Account' }}
						</NuxtLink>
						<NuxtLink to="/collections" class="explore">explore</NuxtLink>
					</div>
					<div class="first second">
						<button class="rounded" @click="SITE_ACTIONS().toggleLogin()">Login</button>
					</div>
					<div class="cart">
						<svg xmlns="http://www.w3.org/2000/svg" width="20.6" height="21.304" viewBox="0 0 20.6 21.304" @click="SITE_ACTIONS().toggleCart()">
							<g id="Group_397" data-name="Group 397" transform="translate(-1310.9 -125.546)">
								<circle id="Ellipse_151" v-if="DB_CART().CART.length !== 0" data-name="Ellipse 151" cx="6.5" cy="6.5" r="6.5" transform="translate(1318.5 125.546)" fill="#ab0000"/>
								<g id="Icon_feather-shopping-bag" data-name="Icon feather-shopping-bag" transform="translate(1307 127.75)">
								<path id="Path_216" data-name="Path 216" d="M6.825,3,4.5,6.1V16.95A1.55,1.55,0,0,0,6.05,18.5H16.9a1.55,1.55,0,0,0,1.55-1.55V6.1L16.125,3Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"/>
								<path id="Path_217" data-name="Path 217" d="M4.5,9H18.45" transform="translate(0 -2.9)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"/>
								<path id="Path_218" data-name="Path 218" d="M18.2,15A3.1,3.1,0,0,1,12,15" transform="translate(-3.625 -5.8)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"/>
								</g>
							</g>
						</svg>
					</div>
				</div>
			</div>
			<ClientOnly>
				<transition name="list">
					<div v-if="SITE_ACTIONS().menu">
						<Menu />
					</div>
				</transition>
				<Teleport to="#cart" :disabled="screenWidth()">
					<transition name="cart">
						<div v-if="SITE_ACTIONS().feedback">
							<feedback />
						</div>
					</transition>
					<transition name="cart">
						<div v-if="SITE_ACTIONS().cart">
							<cart />
						</div>
					</transition>
				</Teleport>
			</ClientOnly>
			
		</div>
	</div>
</template>

<!-- TRANSITION -->
<style lang="scss" scoped>
.cart-enter-active, .cart-leave-active, .list-enter-active, .list-leave-active {
  transition: all 0.5s ease-in-out;
  transform: translate(0, 0);
}
.cart-enter-to, .cart-leave-from, .list-enter-to, .list-leave-from { transform: translate(0, 0);}
.list-enter-from, .list-leave-to {
	transform: translate(-100vw, 0);
	@media (min-width: 768px) and (orientation: landscape) { transform: translate(0, calc(-100vh + 106px)); }
}
.cart-enter-from, .cart-leave-to { transform: translate(0, 900px) }

</style>

<style lang="scss" scoped>
@import '../../assets/stylesheet/main.scss';
@import '../../assets/stylesheet/breakpoint.scss';
.root-nav {
	width: 100%;
	display: flex;
	justify-content: space-between;
	height: 85px;
	background: #fff;
	position: relative;
	z-index: 1;

	@include desktop {
		border-top: 0;
	}
}
.button { display: flex; align-items: center; margin: 0 1.5em; svg { margin-right: .5em; } }
.ontop {
	// position: sticky;
	top: 0;
	z-index: 1;
	width: 100%;
	@include desktop {
		top: -1px;
	}
}
.roort{
    width: 100%;
    display: flex;
    justify-content: center;
	border-bottom: 1px solid rgba(204, 204, 204, 0.37);
}

/*left div*/
#logo {
	color: black;
	transition: .5s;
	min-width: calc(100% - 70px);
	text-align: center;
	&:focus{ padding: 0; border: 0; }
	&:hover{color: $brand; padding: 0 30px};
	@media (max-width: 768px) {
		&:focus{ border: 0; padding: 0 }
	}
	@media (min-width: 1024px) { min-width: auto; text-align: left; margin-left: .7em; }
	@media (min-width: 1440px) { margin-left: 0; position: relative;
    left: -18px; }
}
.section1 {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	.toggle-logo {
		display: flex;
		align-items: center;
		width: 100%;
		img {
			@media (min-width: 1024px) { 
				position: relative;
				left: 20px; top: 5px;
			}
		}
		svg {
			@media (min-width: 1024px) { display: none; }
		}
		.mobile {
			margin-left: 1em;
			font-family: seaweed script;
			font-weight: 900;
			font-size: 2.3em;
			@media (min-width: 600px) { display: none; }
		}
		@media (min-width: 1024px) { width: auto; }
	}
	.menus {
		display: none;
		@media (min-width: 1024px) {
			width: 230px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-left: 50px;
		}
	}
	@media (min-width: 1024px) { margin-left: 1.4em; width: auto;}
	@media (min-width: 1440px) { margin-left: 0; }
}

.section2 {
	display: flex;
	align-items: center;
	justify-content: space-between;
	.first{
		display: none;
		.explore {
			font-family: seaweed script;
			font-size: 1.4em; font-weight: 100;
			&:focus { border: 0; }
		}
		@media (min-width: 1024px) {
			display: flex;
			align-items: center;
			margin-right: 1.4em;
			button { margin: 0 1.5em; }
		}
	}
	.second {
		display: flex;
		align-items: center;
		height: 100%;
		.rounded {
			min-height: 100%;
			width: 121px;
			border-radius: 0;
			display: none;
			background: transparent;
			color: $secondary;
			transition: .3s ease all;
			@media (min-width: 460px) { display: unset;}
			&:hover { 
				background-color: $brand;
				color: #fff;
			}
		}
		@media (min-width: 1024px) {
			display: none;
			height: auto;
			.featured {margin-left: 1.4em;}
		}
	}
	.cart {
		cursor: pointer;
		width: 86px;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	@media (min-width: 1024px) {
		.cart {
			cursor: pointer;
			width: initial;
		}
		margin-right: 2em;
	}
	@media (min-width: 1440px) { margin-right: 0; }
}
.user {
	padding: 1em 1.7em; border-radius: .3em;
	background: #f8f8f8;
}
</style>