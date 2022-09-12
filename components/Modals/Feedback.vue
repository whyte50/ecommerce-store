<script setup>

// RESTRICT BACKGROUND SCROLL : FOCUSED MOSTLY ON MOBILE BREAKPOINT
onMounted(() => (document.querySelector('body').style.overflowY = 'hidden'));
onBeforeUnmount(() => (document.querySelector('body').style.overflowY = 'initial'));
</script>

<template>
  <div class="pArent">
    <div class="Div1"></div>
    <div class="Div1">
      <div class="head">
        <div class="text"><h1>Site FeedBack</h1></div>
        <div class="icon" @click="SITE_ACTIONS().toggleFeedback()">
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
        <div class="body-content">
            <h4>Share your thoughts / reviews with us</h4>
            <form>
                <input type="text" placeholder="title">
                <textarea cols="30" rows="10" placeholder="message"></textarea>
            </form>
            <div class="seeCart">
                <button>share with us</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~~/assets/stylesheet/main.scss';
.pArent {
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  grid-template-rows: auto 95vh;
  grid-column-gap: 0px;
  width: 100%;
  grid-row-gap: 0px;
  position: absolute;
  // max-height: 100vh;
  background: #29292969;
  z-index: 10;
}

.Div1 {
  grid-area: 2 / 1 / 3 / 4;
  background: #fff;
  .head {
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    .text {
      width: 85%;
      height: 100%;
      display: flex;
      align-items: center;
      h1 {
        margin-left: calc(3vw + 1em);
        font-family: 'Chonburi';
        font-size: clamp(1em, 3vw + 0.5em, 1.5em);
        @media (min-width: 768px) and (orientation: landscape) { margin: calc(1vw + 1em); }
      }
    }
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 100%;
      border-left: 1px solid #ccc;
      &:hover {
        cursor: pointer;
        background: #ccc;
      }
    }
  }
}
.body {
  width: 100%;
  height: 100%;
  background: #fff;
  overflow-y: auto;
  .body-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: calc(3vw + 1em);

    input, textarea {
        border: 1px solid #ccc;
        outline: 0; width: 90%;
        margin-top: 2em; padding-left: 1.2em;

        font-family: 'Montserrat';
        font-size: 1em;
    }

    input { height: 40px }
    textarea { padding-top: 1em; margin-top: 1em; }

    @media (min-width: 768px) and (orientation: landscape){ margin: calc(1vw + 1em); }
    .seeCart {
      width: 100%;
      border-top: 1px solid #ccc;
      margin-top: 2em;
      margin-bottom: 12em;

      @media (min-width: 768px) and (orientation: landscape) { margin-bottom: 6em; }

      button {
        width: 100%;
        border-radius: 0;
        height: 53px;
        font-family: 'Montserrat';
        font-weight: 500;
        margin-top: 2em;
        font-size: 0.8em;
        transition: all 0.5s;
        &:hover {background-color: darken($brand, 10%); color: #fff}
        
      }
    }
  }
}
@media (min-width: 600px) {
  .pArent {
    display: grid;
    grid-template-columns: repeat(2, 1fr) repeat(3, auto);
    grid-template-rows: repeat(3, 1fr);
  }

  .Div1 {
    grid-area: 1 / 3 / 4 / 6;
    width: 330px;
    height: 100vh;
    border-radius: 0;
    @media (min-height: 1300px) {
      max-height: 400px;
    }
    .head {
      height: 90px;
    }
  }
}
</style>