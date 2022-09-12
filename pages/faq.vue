<script setup>
useHead({
  title: `FAQs`,
  meta: [
    {
        name: 'description',
        content: 'Information provided on this page has been designed to assist you to use our service more effectively.'
    }
  ]
})
</script>
<template>
    <div>
            <div class="root">
            <div class="details">
                <div class="brand">
                    <p style="font-weight: 300"> Jump to:<span id="title">Terms and Conditions</span></p>
                </div>
                
                <div class="category">
                    <p style="font-weight: 300"> Jump to: <span>Shipping Policy</span></p>
                </div>

                <div class="return">
                    <input type="button" value="Continue Shopping"/>
                </div>
            </div>
        </div>
        <div class="wrapper-wrapper">
            <div class="wrapper">
                <h1>Frequently Asked <span style="color: EEAF2C">Questions</span></h1>
            </div>
        </div>
        <div class="faq-container">
            <div class="section">
                <h2>General 
                    <svg xmlns="http://www.w3.org/2000/svg" width="90%" height="4" viewBox="0 0 1366 1">
                        <line id="Line_130" data-name="Line 130" x2="90%" transform="translate(0 0.5)" fill="none" stroke="#444444" stroke-width="32" opacity="0.19"/>
                    </svg>    
                </h2>
                <div class="wrapping">
                    <div class="faq-content">
                        <div class="question">
                            <h2>I have a complaint to make?</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15.075" height="14.247" viewBox="0 0 15.075 14.247">
                            <g id="Icon_feather-arrow-down" data-name="Icon feather-arrow-down" transform="translate(-6.086 -6.5)">
                                <path id="Path_260" data-name="Path 260" d="M18,7.5V19.747" transform="translate(-4.376 0)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                <path id="Path_261" data-name="Path 261" d="M19.747,18l-6.124,6.124L7.5,18" transform="translate(0 -4.376)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                            </g>
                            </svg>
                        </div>
                        <p class="answer">We are inspired when customers are satisfied with our service, which is why we always do our best to provide a great service. However, there may be a few lapses on our part, and we apologise for this. Feel free to complain about something (or anything), we’d gladly listen to and help you. Contact our customer service team today for any complaint you may have.</p>
                    </div>
                    <div class="faq-content">
                        <div class="question">
                            <h2>I have a complaint to make?</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15.075" height="14.247" viewBox="0 0 15.075 14.247">
                            <g id="Icon_feather-arrow-down" data-name="Icon feather-arrow-down" transform="translate(-6.086 -6.5)">
                                <path id="Path_260" data-name="Path 260" d="M18,7.5V19.747" transform="translate(-4.376 0)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                <path id="Path_261" data-name="Path 261" d="M19.747,18l-6.124,6.124L7.5,18" transform="translate(0 -4.376)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                            </g>
                            </svg>
                        </div>
                        <p class="answer">We are inspired when customers are satisfied with our service, which is why we always do our best to provide a great service. However, there may be a few lapses on our part, and we apologise for this. Feel free to complain about something (or anything), we’d gladly listen to and help you. Contact our customer service team today for any complaint you may have.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '~~/assets/stylesheet/main.scss';
.section{
    background: #c7c7c71f;
    h2 {
        font-size: clamp(40px, 8vw, 70px);
        font-weight: 100; font-family: 'Chonburi';
        margin: .5em 0; margin-left: clamp(0em, 9vw, 1em);
        display: flex; align-items: center;
        svg { margin-left: 1em; }
    }
}
.wrapper-wrapper {
    height: 100vh; display: flex;
    align-items: center; justify-content: center;
    max-height: 325px; padding: 0 2em; background: #c7c7c71f;
    @media (min-width: 840px) and (orientation: landscape) {
      max-height: 325px;
    }
}
.wrapper {
    display: flex; width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 { font-family: 'Chonburi';
    font-size: clamp(40px, 8vw, 100px); margin-bottom: .2em;
    line-height: 1; text-align: center; font-weight: 100;}
    
    button {
        outline: 0; border: 0; margin-bottom: 1em;
        width: 100%; max-width: 200px;
        overflow: hidden; display: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        background: $primary;
        @media (min-width: 840px) and (orientation: landscape) {
          max-width: fit-content;
        }
    }
    a { font-weight: 700; color: #EEAF2C; text-align: center; font-size: 1em; }
}
.faq-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid #ccc;
    .wrapping { border-top: 1px solid #ccc; background: #fff;
    padding-bottom: 2em;}
    .faq-content { margin: 0 clamp(0em, 5vw, 4em); margin-bottom: 2em;
        .question {
            display: flex; justify-content: space-between;
            align-items: center; min-width: 100%;
            border-top: 1px solid #ccc; min-height: 56px;
            border-bottom: 1px solid #ccc;
            h2 {
                font-family: 'Poppins';
                font-weight: 800;
                font-size: clamp(1em, 4vw ,1.2em);
                margin-left: 1.5em;
                line-height: .8;
            }
            svg { margin-right: 1.5em; }
            &:first-of-type { border-top: 0; }
        }
        .answer {
            margin-top: 1em; margin-left: 1em;
            font-family: 'Montserrat'; line-height: 1.5;
            font-weight: 400;
            // max-width: 950px;
            margin-right: clamp(0em, 5vw, 14em);
        }
    }
}
.root {
  width: 100%; display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  height: 90px; background: #c7c7c71f;
  overflow-x: auto;
  @media (min-width: 840px) and (orientation: landscape) {
    justify-content: center;
  }
  &::-webkit-scrollbar {
    width: 10px; height: 0px;
    border-top: 1px solid #ccc;
  }
}
.details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 740px;
    margin: 0 2em;
      span, a {
        margin-left: 0.4em;
        font-weight: 500;
        font-size: 1em;
      }
      .brand, .category { margin-right: 50px; }
      .return input[type='button'] {
        padding: 0.5em 1.2em;
        font-family: 'Poppins';
        font-size: 12px;
        color: #fff;
        width: 170px;
        border-radius: 6px;
        transition: all 0.5s;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background-image: url('../../assets/img/arrow-left.svg');
        background-repeat: no-repeat;
        background-color: #eeaf2c;
        background-position: 10px 8px;
        &:hover {
          cursor: pointer;
          background-color: darken(#eeaf2c, 50%);
        }
      }
      @media (min-width: 840px) and (orientation: landscape) {
        margin: 0;
      }
  }
</style>