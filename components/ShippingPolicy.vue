<script setup>
// RESTRICT BACKGROUND SCROLL : FOCUSED MOSTLY ON MOBILE BREAKPOINT
// onMounted(() => {document.querySelector('body').style.overflowY = 'hidden'});
// onBeforeUnmount(() => { document.querySelector('body').style.overflowY = 'initial'; });
</script>
<template>
    <div class="wrapper">
        <div class="roott">
            <div class="container">
                <div class="content">
                    <h3>Shipping Policy.</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" class="close" height="24" viewBox="0 0 25 24" @click="$emit('toggle')">
                        <g id="Group_1075" data-name="Group 1075" transform="translate(0 0.13)">
                            <ellipse id="Ellipse_208" data-name="Ellipse 208" cx="12.5" cy="12" rx="12.5" ry="12" transform="translate(0 -0.13)" fill="#f5f5f5"/>
                            <g id="Group_1083" data-name="Group 1083">
                            <line id="Line_513" data-name="Line 513" y2="11.559" transform="translate(16.472 7.398) rotate(45)" fill="none" stroke="#707070" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                            <line id="Line_514" data-name="Line 514" x1="0.003" y2="11.335" transform="translate(16.474 15.414) rotate(135)" fill="none" stroke="#707070" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
            <div class="container b">
                <div class="item">
                    <div>
                        <h4>I have a complaint to make?</h4>
                        <p>We are inspired when customers are satisfied with our service, which is why we always do our best to provide a great service. However, there may be a few lapses on our part, and we apologise for this. Feel free to complain about something (or anything), we’d gladly listen to and help you. Contact our customer service team today for any complaint you may have.</p>
                    </div>
                </div>
                <div class="item">
                    <div>
                        <h4>I have a complaint to make?</h4>
                        <p>We are inspired when customers are satisfied with our service, which is why we always do our best to provide a great service. However, there may be a few lapses on our part, and we apologise for this. Feel free to complain about something (or anything), we’d gladly listen to and help you. Contact our customer service team today for any complaint you may have.</p>
                    </div>
                </div>
                <div class="item">
                    <div>
                        <h4>I have a complaint to make?</h4>
                        <p>We are inspired when customers are satisfied with our service, which is why we always do our best to provide a great service. However, there may be a few lapses on our part, and we apologise for this. Feel free to complain about something (or anything), we’d gladly listen to and help you. Contact our customer service team today for any complaint you may have.</p>
                    </div>
                </div>
                <div class="item">
                    <div>
                        <h4>I have a complaint to make?</h4>
                        <p>We are inspired when customers are satisfied with our service, which is why we always do our best to provide a great service. However, there may be a few lapses on our part, and we apologise for this. Feel free to complain about something (or anything), we’d gladly listen to and help you. Contact our customer service team today for any complaint you may have.</p>
                    </div>
                </div>
                <div class="item">
                    <div>
                        <h4>I have a complaint to make?</h4>
                        <p>We are inspired when customers are satisfied with our service, which is why we always do our best to provide a great service. However, there may be a few lapses on our part, and we apologise for this. Feel free to complain about something (or anything), we’d gladly listen to and help you. Contact our customer service team today for any complaint you may have.</p>
                    </div>
                </div>
                <div class="item">
                    <div>
                        <h4>I have a complaint to make?</h4>
                        <p>We are inspired when customers are satisfied with our service, which is why we always do our best to provide a great service. However, there may be a few lapses on our part, and we apologise for this. Feel free to complain about something (or anything), we’d gladly listen to and help you. Contact our customer service team today for any complaint you may have.</p>
                    </div>
                </div>
                <div class="end"></div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container {
    width: 100%;
    height: 81.5px;

    display: flex;
    align-items: center;
    justify-content: center;

    // border-top: 1px solid #ccc;
    .content { display: flex; align-items: center; justify-content: space-between; width: 100%; margin: 0 3em }
    svg { cursor: pointer; border: 1px solid #ccc; }
    h3 { font-family: "Chonburi"; font-weight: 100; }
}
.b {
    height: 100%;
    display: block;
    .item {
        width: 100%;

        padding: 2em 0;
        border-bottom: 1px solid lighten(#000, 90%);
        div { margin: 0 3em; max-width: 1200px;}
        h4 { margin-bottom: .7em; }
        p { font-weight: 200; }
    }
    overflow-y: auto;
    border-top: 1px solid #ccc;

    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: #444444;
    }
}
.wrapper {
    height: 100vh; background: #29292948;
    width: 100%; position: fixed; bottom: 0; z-index: 3;
    right: 0; left: 0; display: flex; align-items: center;
}
.roott {
    min-height: 300px; background: #fff;
    height: 80vh; width: 100%;
    border: 1px solid #ccc;

    position: relative; overflow-y: hidden;
    border-radius: 1em; margin: 0 1em;
    
    @media (min-width: 768px) {
        max-height: 550px;height: 80vh;
        margin: 0 9em;
        bottom: 0;
    }
}

</style>