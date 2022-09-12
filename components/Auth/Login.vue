<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const full_name = ref();
const email = ref();
const password = ref();

const FULL_NAME = ref('');
const EMAIL_ADDRESS = ref('');
const PASSWORD = ref('');

const gFunc = SITE_ACTIONS();
const auth = SITE_AUTH();

const isLoginIN = ref(false)

const data1 = ref({
  title: 'Create an Account',
  changemode: 'Login',
  changemodetitle: 'Already have an account?'
})

const data2 = ref({
  title: 'Welcome Back!',
  changemode: 'Sign up',
  changemodetitle: `Don't have an account ?`
})

const downloadData = (query1, query2) => {
  if(isLoginIN.value === true) return query2;
  return query1
}
// console.log(downloadData(data1, data2).title)

onMounted(() => {
  const allInputs = document.querySelectorAll("input");
  allInputs.forEach(function(elem){
    elem.addEventListener("focusin", function(e){ e.target.parentNode.classList.add("Focus") })
    elem.addEventListener("focusout", function(e){ allInputs.forEach(function(el){ el.parentNode.classList.remove("Focus") })
      console.log('done')
    })
  })
  document.querySelector('body').style.overflowY = 'hidden';
})

onBeforeUnmount(() => { document.querySelector('body').style.overflowY = 'initial'; });

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
};

const fullNameIsComplete = () => {
  if (FULL_NAME.value.trim().indexOf(' ') != -1) {
    console.log(`${FULL_NAME.value} is finished`);
    document.getElementById('full_name').style.background = 'green';
    full_name.value.parentNode.classList.add('Focuss')
    full_name.value.addEventListener("focusout", () => full_name.value.parentNode.style.opacity = "50%")
  } else if (FULL_NAME.value.trim().indexOf(' ') == -1) {
    console.log('typing...')
    document.getElementById('full_name').style.background = '#E4E4E4';
    full_name.value.parentNode.classList.remove('Focuss')
    full_name.value.parentNode.style.opacity = "1"
    full_name.value.addEventListener("focusout", () => full_name.value.parentNode.style.opacity = "1")
  }
  
}

const emailIsVerified = () => {

  if (isValidEmailAddress(email.value.value) === true) {
    console.log('is Valid')
    document.getElementById('email').style.background = 'green';
    email.value.parentNode.classList.add('Focuss')
    email.value.addEventListener("focusout", () => email.value.parentNode.style.opacity = "50%")
  } else if (isValidEmailAddress(email.value.value) === false) {
    console.log('wrong')
    document.getElementById('email').style.background = '#E4E4E4';
    email.value.parentNode.classList.remove('Focuss')
    email.value.parentNode.style.opacity = "1"
    email.value.addEventListener("focusout", () => email.value.parentNode.style.opacity = "1")
  }

}

const passwordIsValid = () => {

  if (PASSWORD.value.length >= 9) {
    console.log('valid password');
    document.getElementById('password').style.background = 'green';
    password.value.parentNode.classList.add('Focuss')
    password.value.addEventListener("focusout", () => password.value.parentNode.style.opacity = "50%")
  } else if (PASSWORD.value.length < 6) {
    console.log('wrong')
    document.getElementById('password').style.background = '#E4E4E4';
    password.value.parentNode.classList.remove('Focuss')
    password.value.parentNode.style.opacity = "1"
    password.value.addEventListener("focusout", () => password.value.parentNode.style.opacity = "1")
  }

}

function confirmData(d, b, t) {
  console.log(d, b, t);
  // console.log(d.value, b.value, t.value);
  isLoginIN.value ? auth.loginUser(b, t) : auth.register(b, t, d)
}

</script>
<template>
    <div class="parent">
		<div class="LoginDiv1" id="LoginDiv1">
			<div class="head" id="HeadDiv1">
        		<div class="text"><h1>{{downloadData(data1, data2).title}}</h1></div>
		        <div class="icon" @click="gFunc.toggleLogin()">
		          <svg
		            xmlns="http://www.w3.org/2000/svg"
		            width="13.435"
		            height="13.436"
		            viewBox="0 0 13.435 13.436"
		          >
		            <g
		              id="Group_920"
		              data-name="Group 920"
		              transform="translate(-1314.368 -143.783)"
		            >
		              <line
		                id="Line_442"
		                data-name="Line 442"
		                y2="18"
		                transform="translate(1327.449 144.137) rotate(45)"
		                fill="none"
		                stroke="#292929"
		                stroke-width="1"
		              />
		              <line
		                id="Line_443"
		                data-name="Line 443"
		                y2="18"
		                transform="translate(1327.449 156.865) rotate(135)"
		                fill="none"
		                stroke="#292929"
		                stroke-width="1"
		              />
		            </g>
		          </svg>
		        </div>
      		</div>
      		<div class="body">
      			<form class="wrapper" @submit.prevent="confirmData(FULL_NAME, EMAIL_ADDRESS, PASSWORD)">
      				<div class="input-wrapper" v-if="isLoginIN === false">
      					<label>Full Name</label>
      					<input type="text" placeholder="Your first name and last name" ref="full_name" v-model="FULL_NAME" @keyup="fullNameIsComplete()">
      				</div>
      				<div class="input-wrapper">
      					<label>Email Address</label>
      					<input type="email" placeholder="Youremail@address.com" ref="email" v-model="EMAIL_ADDRESS" @keyup="emailIsVerified()">
      				</div>
      				<div class="input-wrapper">
      					<label>Password</label>
      					<input type="Password" placeholder="Length must be above 6 characters" ref="password" v-model="PASSWORD" @keyup="passwordIsValid()">
      				</div>
      				<div class="indicators">
      					<span style="width:10%" id="full_name" :class="{ login: isLoginIN }"></span>
      					<span style="width:60%" id="email"></span>
      					<span style="width:20%" id="password"></span>
      				</div>
      				<div class="seeCart">
			            <div class="subtotal">
			              <h1>{{downloadData(data1, data2).changemodetitle}}</h1>
			              <p @click="isLoginIN = !isLoginIN">{{downloadData(data1, data2).changemode}}</p>
			            </div>
			            <button type="submit">Next</button>
			        </div>
      			</form>
      		</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import '../assets/stylesheet/main.scss';
.parent {
    display: grid;
    grid-template-columns: 1fr 340px 1fr;
    grid-template-rows: 1fr auto 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    background: #29292941;
    height: 100vh; position: fixed;
    z-index: 11; width: 100%;
    .LoginDiv1 { grid-area: 2 / 2 / 3 / 3; display: flex; flex-direction: column; border-radius: .5em; background-color: #fff;}
}
.head {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    border-bottom: .1px solid rgba(204, 204, 204, 0.897);
    margin-bottom: .5em;
    .text {
        width: 85%;
        height: 100%;
        display: flex;
        align-items: center;
        h1 {
          margin-left: calc(3vw + 1em);
          font-family: 'Chonburi';
          font-size: clamp(1em, 1vw + 0.5em, 1.5em);
          @media (min-width: 768px) and (orientation: landscape) { margin: calc(1vw + 1em); margin-right: 0; }
        }
    }
    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 100%;
        // border-left: 1px solid #ccc;
        &:hover {
          cursor: pointer;
          // background: #ccc;
        }
    }
}
.body { padding: 1em 1.5em; max-height: 445px; 
    .wrapper { width: 100%; height: 100%;
         .seeCart {
            width: 100%;
            border-top: 1px solid #ccc;
            margin-top: 1.5em;
            .subtotal {
                width: 100%;
                margin-top: 1em;
                display: flex;
                align-items: center;
                justify-content: space-between;
                h1 {
                    font-size: 1em; font-family: 'Poppins';
                    font-weight: 700; margin-left: .5em;
                }
                p {
                    font-size: 1em; color: #EEAF2C;
                    font-weight: 800; margin-right: .5em;
                    cursor: pointer;
                }
            }
            button {
                width: 100%;
                height: 53px;
                font-family: 'Montserrat';
                font-weight: 500;
                margin-top: 1em;
                font-size: 0.8em;
                transition: all 0.5s;
                &:hover {background-color: darken($brand, 10%); color: #fff}
                
            }
        }
        .input-wrapper{
          width: 100%;
          height: 70px;
          border-radius: 6px;
          border: 1px solid #D2D2D2;

          display: flex; flex-direction: column;
          margin-bottom: 1em;
              label { font-family: 'Poppins'; font-weight: 600; font-size: 1em; margin-top: .3em; margin-left: 1em; }
              input { margin-left: .9em; margin-top: .3em; height: 1.2em; font-size: 1em; font-family: 'Montserrat'; border: 0; outline: 0; background: transparent; padding-left: 0; font-weight: 400; }
              &:hover { background-color: #F0F0F0; }
        }
        .indicators { display: flex; align-items: center;
            justify-content: space-around; width: 100%; margin-bottom: 1em;
            span { height: 3px; background-color: #E4E4E4; border-radius: 20em; }
        }
      .login { display: none; }
        
    }
    .confirmation {
      display: flex; align-items: center; flex-direction: column;
      padding-bottom: 1em; margin-top: 1em;
        svg { position: relative; left: -5px; }
        h4 { text-align: center; font-family: 'Poppins'; font-weight: 700; font-size: 1em; margin-top: 2em;
            a { text-decoration: none; color: #EEAF2C; }
        }
    }
}
.Focus{ background-color: #F0F0F0; border-bottom: 3px solid #EEAF2C; }
.Focuss{ background-color: #F0F0F0; }
</style>