<script setup lang="ts">
import { useItems } from '@/stores/store.js'
const info = useItems();

defineProps({
    items: Object
})
function add(id, type) {
    info.add(id,type)
}
function deleteLeftList(id) {
    info.deleteLeftList(id);
}
function deleteItem() {
    info.deleteItem();
}
function availability(id) {
    for (let i = 0; i < info.appInfo.selectLeftItems.length; i++) {
        if (info.appInfo.selectLeftItems[i].id === id) {
            return true;
        }
    }
    return false;
}
</script>
<template>
    <div class="item">
        <span class="name" v-html="items.item.name"></span>
        <div v-if="items.key === 'left'">
            <div v-if="availability(items.item.id)">
                <button @click="deleteLeftList(items.item.id)" >delete </button>
            </div>
            <button v-else :disabled="info.appInfo.status" @click="add(items.item.id, items.key)" >add </button>
        </div>
        <div v-else>
            <div v-if="info.appInfo.selectRightItem[0]?.id === items.item?.id">
                <button @click="deleteItem()" >delete</button>
            </div>
            <button v-else @click="add(items.item.id, items.key)" >add </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1em;
    margin: 0.5em;
    border: 1px solid;
    span {
        font-size: 1em;
        font-weight: bold;
    }
    button {
        margin-top: 1em;
        border: 1px solid #252424;
        padding: 0.5em 1em;
    }
    button:disabled,
    button[disabled]{
        color: #ccc;
        border: 1px solid #ccc;
        cursor: not-allowed;
    }
}
</style>
