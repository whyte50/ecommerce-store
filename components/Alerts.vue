<script setup>
const data = SITE_ACTIONS().alert.data;
const color = ref(data.STATE ? 'green' : `#ff7a7a`)

onMounted(() => {
    setTimeout(() => {
        SITE_ACTIONS().toggleAlert()
    },5500)
})

</script>
<template>
    <div class="root">
        <div class="error">
            <div class="response">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <circle id="Ellipse_207" data-name="Ellipse 207" cx="8" cy="8" r="8" :fill="data.STATE ? 'green' : `#ff7a7a`"/>
                </svg>
                <p>{{ data.HEADER }}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" class="close" height="24" viewBox="0 0 25 24" @click="SITE_ACTIONS().toggleAlert()">
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
</template>
<style lang="scss" scoped>
.root {
    width: 100%;
    display: flex;
    justify-content: center;

    .error {
        min-width: 300px; height: 45px;
        display: flex; align-items: center;
        justify-content: space-between;

        background: #fff; padding: 0 1.3em;
        border-radius: 30em; position: fixed;
        bottom: 1.5em; border: 1px solid v-bind(color);

        z-index: 21; margin: 0 2em;

        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
        .response {
            display: flex; align-items: center;
            p{ margin: 0 1em; }
        }
        .close { cursor: pointer; }
    }
}

</style>