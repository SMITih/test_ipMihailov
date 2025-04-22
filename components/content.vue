<script setup lang="ts">
import BlockBottom from "~/components/bottom/blockBottom.vue";
import BlockTop from "~/components/top/blockTop.vue";

const block = ref({left: {}, right: {}})
defineProps({
    info: Object
})
</script>

<template>
    <div class="wrapper">
        <div class="top-block">
            <block-top v-for="(item, key) in block" :key="key" :item="{item: item, key: key}"/>
        </div>
        <div class="bottom-block">
            <BlockBottom :block="block" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    padding: 5px;
    .top-block {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
    }
    .bottom-block {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
    }
}
</style>

