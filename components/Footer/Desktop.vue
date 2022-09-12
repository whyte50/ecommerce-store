<script setup>
const cap = () => window.open("http://capstonbee.com")
</script>

<template>
  	<div class="name-wrapper">
		<h3>capstonbee.</h3>
	</div>
	<div class="main-root">
		<div class="space"></div>
		<div class="root-container maximum">
			<div class="flex-container">
				<div class="social-media-wrapper-root">
					<div class="social-media-wrapper">
            <NuxtLink to="/">
              <img src="../../assets/img/logo.png">
            </NuxtLink>
						<svg id="Group_284" data-name="Group 284" xmlns="http://www.w3.org/2000/svg" width="114.391" height="17.5" viewBox="0 0 114.391 17.5">
							<a href="#">
							  <g id="_002-facebook-logo" data-name="002-facebook-logo">
							    <path id="Path_70" data-name="Path 70" d="M31.092,0,28.845,0a3.946,3.946,0,0,0-4.156,4.264V6.23H22.43a.353.353,0,0,0-.353.353V9.432a.353.353,0,0,0,.353.353h2.259v7.188a.353.353,0,0,0,.353.353H27.99a.353.353,0,0,0,.353-.353V9.785h2.641a.353.353,0,0,0,.353-.353V6.584a.354.354,0,0,0-.353-.353H28.344V4.563c0-.8.191-1.208,1.234-1.208h1.514A.353.353,0,0,0,31.445,3V.357A.353.353,0,0,0,31.092,0Z" transform="translate(-22.077)" fill="#c5c5c5"/>
							  </g>
							</a>
							<a href="#">
							  <g id="_004-linkedin-logo" data-name="004-linkedin-logo" transform="translate(45.334 1.146)">
							    <path id="LinkedIn" d="M15.589,18.691v5.763H12.248V19.077c0-1.351-.483-2.273-1.693-2.273a1.828,1.828,0,0,0-1.714,1.222,2.286,2.286,0,0,0-.111.815v5.613H5.388s.045-9.107,0-10.051H8.73v1.425l-.022.032H8.73v-.032a3.318,3.318,0,0,1,3.012-1.661C13.94,14.167,15.589,15.6,15.589,18.691ZM1.891,9.558a1.742,1.742,0,1,0-.044,3.474h.022a1.742,1.742,0,1,0,.022-3.474ZM.2,24.454H3.54V14.4H.2Z" transform="translate(0 -9.558)" fill="#c5c5c5"/>
							  </g>
							</a>
							<a href="#">
							  <g id="instagram_1_" data-name="instagram (1)" transform="translate(96.891)">
							    <path id="Path_74" data-name="Path 74" d="M12.287,0H5.213A5.219,5.219,0,0,0,0,5.213v7.073A5.219,5.219,0,0,0,5.213,17.5h7.073A5.219,5.219,0,0,0,17.5,12.287V5.213A5.219,5.219,0,0,0,12.287,0ZM15.74,12.287a3.453,3.453,0,0,1-3.453,3.453H5.213a3.453,3.453,0,0,1-3.453-3.453V5.213A3.453,3.453,0,0,1,5.213,1.76h7.073A3.453,3.453,0,0,1,15.74,5.213v7.073Z" fill="#c5c5c5"/>
							    <path id="Path_75" data-name="Path 75" d="M137.526,133a4.526,4.526,0,1,0,4.526,4.526A4.531,4.531,0,0,0,137.526,133Zm0,7.292a2.766,2.766,0,1,1,2.766-2.766A2.766,2.766,0,0,1,137.526,140.292Z" transform="translate(-128.776 -128.776)" fill="#c5c5c5"/>
							    <ellipse id="Ellipse_5" data-name="Ellipse 5" cx="1.085" cy="1.085" rx="1.085" ry="1.085" transform="translate(12.2 3.173)" fill="#c5c5c5"/>
						  	</g>
						  </a>
						</svg>
					</div>
				</div>
			</div>
			<div class="txt-flex-container">
				<div class="container-wrapper">
					<div class="container">
						<h5>Shopping Online</h5>
						<NuxtLink to="/collections">Collections</NuxtLink>
						<NuxtLink to="/">My Cart</NuxtLink>
						<NuxtLink to="/faq">Shipping and Delivery</NuxtLink>
						<NuxtLink to="/">Checkout</NuxtLink>
						<NuxtLink to="/">My Account</NuxtLink>
					</div>
					<div class="container">
						<h5>Information</h5>
						<NuxtLink to="javascript:void(0)">Find Us</NuxtLink>
						<NuxtLink to="https://capstonbee.com">Collaborate with Us</NuxtLink>
						<NuxtLink @click="SITE_ACTIONS().toggleFeedback()">Site Feedback</NuxtLink>
						<NuxtLink to="/faq">FAQs</NuxtLink>
					</div>
					<div class="container">
						<h5>Contact</h5>
						<NuxtLink to="https://capstonbee.com" target="_blank">capstonbee.com</NuxtLink>
						<NuxtLink to="mailto:capstonbee@yahoo.com">capstonbee@yahoo.com</NuxtLink>
						<NuxtLink to="tel:+23409019381921">Hotline: +234 901 235 7895</NuxtLink>
					</div>
				</div>
			</div>
		</div>
		<div class="rights">
			<h5>Bottles 'N' Cans BY Capstonbee - © 2021. ALL RIGHTS RESERVED.</h5>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../assets/stylesheet/breakpoint.scss';
@import '../../assets/stylesheet/main.scss';
h5 {font-weight: 700}

@mixin sm {
  @media (max-width: 400px) {
    @content;
  }
}
.off{
  display: none;
  @include desktop { display: flex;}
}
.rights {
	width: 100%;
	height: 60px;

	display: flex;
	justify-content: center;
	align-items: center;
  	margin-top: 1em;
  @media (min-width:1024px) { color: $secondary;margin: 0; background:#fff}
  h5 {
    font-size: 75%;
    text-align: center;
	margin: 0 1em;
  }
}

.name-wrapper {
	width: 100%;
	height: 63px;

	display: flex;
	align-items: center;
	justify-content: center;

	border: 1px solid #ccc;
	h3 {
		margin-top: 175px;color: white;
	}
	@media (min-width:1024px) { display: none }
}

.main-root {
	background-color: #282828;
	color: white;
    border-top: 1px solid #ccc;
  .space {
    width: 100%;
    height: 113px;
    border-bottom: 1px solid;
	@media (min-width:1024px) { display: none; }
  }
  .root-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    height: 850px;

    @include sm {
      display: flex;
      flex-direction: column;
      height: 1040px;

      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1em;
    }
  }
}

.flex-container {
	display: flex;
	flex-direction: column;
	width: 50%;
	min-width: 200px;
	max-width: 200px;
	border-right: 1px solid #ddd;

  @include sm {
    flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		max-width: none;
		width: 100%;
		height: 400px;
  }
  .social-media-wrapper-root {
    height: 300px;

    display: flex;
    align-items: center;
    justify-content: center;
    @include sm {margin-left: 2em}
    .social-media-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      a:focus {border: 0;}
    }
  }
  .image {
    width: 100%;
    overflow-x: hidden;
    border-top: 1px solid #ccc;
    @include sm {
      display: none;
    }
  }
}
.container {
	display: flex;
	flex-direction: column;
	max-width: 200px;
  h5 {
    margin-bottom: 1.7em;
	font-family: 'Chonburi';
	font-weight: 100;
  }
  a, span {
    margin-bottom: 1.7em;
    color: #fff;
    font-weight: normal;
	font-family: 'Montserrat';
	font-size: .75em;
    &:hover { color: $brand; cursor: pointer;}
    @include sm {margin-bottom: 1.4em;}
  }
}

.txt-flex-container {
	width: 50%;
	height: 100%;

	padding-left: 2em;
	display: flex;
	align-items: center;
  @include sm {
    width: 88%;
	border-top: 1px solid #ccc;
  }
  .container-wrapper {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
	margin-right: 2em;
    @include sm {margin-left: 2em;height: 90%;}
  }
}

@media (min-width:635px) {
	.image { display: none; }
	.flex-container {
		border: 0;
		max-width: 300px;
	}
	.txt-flex-container .container-wrapper {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		flex-wrap: wrap;

		width: 100%;
		max-width: 780px;
	}
	.txt-flex-container {
		width: 100%;
		height: 100%;
		min-height: 305px;

		padding-left: 2em;
		display: flex;
		border-left: 1px solid #ccc;
		align-items: center;
	}
	.main-root .root-container {
		height: initial;
		width: 100%;
	}
	.container {margin-top: 2em;
  @media (min-width:1024px) { margin: 0}}
	.name-wrapper h3 {
		margin-top: 0;
		color: black;
		margin-left: 2em;
	}
	.name-wrapper { justify-content: flex-start; height: 70px; }
	.main-root .space {height: 70px;}
}

.name-wrapper, .main-root {display: none;}
@include M-landscape {
	.main-root {display: block;}
}
@media (min-width:600px) {
	.main-root {display: flex; flex-direction: column; align-items:center;}
}
</style>