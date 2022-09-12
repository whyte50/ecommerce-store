<template>
    <div class="newsletter">
		<div class="contain">
			<h5>Subscribe to our newsletter and <br>receive exclusive offers every week</h5>
			<div class="form">
				<input type="email" placeholder="Enter your Email">
				<button class="rounded">JOIN MAILING LIST</button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '../../assets/stylesheet/main.scss';

@mixin lg {
  @media (min-width: 950px) {
    @content;
  }
}

.newsletter {
  width: 100%;
  height: 300px;
  background: #c7c7c71f;
  border-top: 1px solid #E4E4E4;

  display: flex;
  align-items: center;
  justify-content: center;

  @include lg {
    height: 113px;
  }
  .contain {
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
    width: 819px;
    h5 { font-size: clamp(16px, 2vw, 34px);
        @include lg { 
            font-size: 14px;
        }
    }

    @include lg{
      display: flex;
      justify-content: space-between;
      flex-direction: row;

      text-align: left;
    }

    .form {
      display: flex;
      align-items: center;
      flex-direction: column;

      margin-top: 14px;
      button { background-color: $brand; border-radius: 5px;}
      input {
        margin-bottom: 12px;
        border-radius: 5px;

        background-image: url('../../assets/img/enter.svg');
	      background-position: 200px 12px;
        background-repeat: no-repeat;
        background-size: 17px;
      }
      @include lg {
        flex-direction: row;
        margin: 0;
        input {
          height:34px;
          margin-right: 20px;
          margin-bottom: 0;
          width: 270px;
          background-position: 265px 10px;
        }
      }
    }
  }
}
</style>