<script setup lang="ts">
import { useItems } from '@/stores/store.js'
const d = useItems();
const info = d?.appInfo;

defineProps({
    item: Object
})
function deleteItem() {
    d.deleteItem()
}
function deleteLeftList(id) {
    d.deleteLeftList(id)
}
</script>
<template>
    <div :class="item.key">
        <div v-if="item.key === 'left'">
            <div class="items" v-if="info.selectLeftItems.length > 0">
                <div class="item" v-for="(item, id) in info.selectLeftItems" :key="id">
                    <span class="name">{{item.name}} ({{item.id}})</span>
                    <button @click="deleteLeftList(item.id)" >delete</button>
                </div>
                <div class="select" >Select: {{ info.count }}</div>
            </div>
            <div class="select" v-else> Select: N/a </div>
        </div>
        <div v-else>
            <div class="items one">
                <div v-if="!info.selectRightItem[0]">No select</div>
                <div class="item" v-else >
                    <span class="name">{{info.selectRightItem[0].name}} ({{info.selectRightItem[0].id}})</span>
                    <button style="margin-top: 10px; border: 1px solid; padding: 0.5em 1em;"  @click="deleteItem" >delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.left,
.right {
    border: 2px solid #000;
    padding: 1em;
    width: 35%;
    min-width: 300px;
    min-height: 19em;
    margin-bottom: 1em;
    position: relative;
    overflow: hidden;
    .select {
        position: absolute;
        bottom: 0.5em;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .items.one {
        display: flex!important;
        align-items: stretch;
        justify-content: center;
        .item {
            width: 30%;
        }
    }
    .items {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 100%;
        margin-bottom: 1em;
        .item {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 1em;
            margin: 0.5em;
            border: 1px solid;
            .name {
                font-size: 1em;
                font-weight: bold;
            }
            button {
                margin-top: 1em;
                border: 1px solid #252424;
                padding: 0.5em 1em;
            }
        }
    }
}
.left {
    margin-right: 1em;
}
.right {
    margin-left: 1em;

}
@media (max-width: 1150px) {
    .left,
    .right {
        .items {
            grid-template-columns: repeat(2, 1fr);
        }
        .items.one {
            .item {
                width: 100%;
            }
        }
    }
}
@media (max-width: 678px) {
    .left,
    .right {
        width: calc(50% - 0.5em);
        min-width: auto;
        margin-left: 0;
        margin-right: 0;
        .items {
            grid-template-columns: repeat(1, 1fr);
        }
    }
}
</style>
