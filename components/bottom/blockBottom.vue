<script setup lang="ts">
import { useItems } from '@/stores/store.js'
const info = useItems()?.appInfo;

defineProps({
    block: Object
})
</script>

<template>
    <div :class="key" v-for="(item, key) in block" :key="key">
        <div v-if="key === 'left' && info.leftItems" class="items">
            <item :items="{item, key}" v-for="(item, i) in info.leftItems" :key="i" />
        </div>
        <div v-else class="items">
            <item :items="{item, key}" v-for="(item, i) in info.rightItems" :key="i" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.left,
.right {
    display: flex;
    flex-direction: column;
    width: calc(50% - 1em);
    border: 2px solid #000;
    min-height: calc(100vh - 20em);
    overflow: hidden;
    .items {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 100%;
    }
}
.left {
    margin-right: 1em;
}
.right {
    margin-left: 1em;
}
@media (max-width: 1000px) {
    .left,
    .right {
        .items {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            width: 100%;
        }
    }
}
@media (max-width: 678px) {
    .left,
    .right {
        width: calc(50% - 0.5em);
        margin-left: 0;
        margin-right: 0;
        .items {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            width: 100%;
        }
    }
}
</style>
