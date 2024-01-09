<template>
    <div>
        <searchild @add="add" @sear="sear"></searchild>
        <div class="centre">
            <ListRol class="Listleft" :list="list"></ListRol>
            <Rigth class="Rigth" :text="text"></Rigth>

        </div>
        <Addandmodify v-if="dialogVisible" @confirm="confirm" @cancel="cancel" :dialogVisible="dialogVisible">
        </Addandmodify>
    </div>
</template>

<script setup lang="ts">
import searchild from '@/components/searchild.vue'
import Rigth from './components/Rigth.vue'
import * as api from '@/api/api'
import ListRol from './components/ListRol.vue'
import { ref } from 'vue'
import * as TS from '@/utils/defind'
import Addandmodify from './components/Addandmodify.vue'
const inof = ref<TS.rolesAPI>({
    page: 0,
    size: 10,
    sort: 'level%2Casc',
    blurry: ''
})
const dialogVisible = ref<boolean>(false)
const pida = ref({
    pid: 0
})
const text = ref([])
const list = ref([])

const sear = (user: string) => {
    console.log(user);
    inof.value.blurry = user

    getrolesAPI()
}

const getrolesAPI = async () => {
    let res = await api.rolesAPI({ page: inof.value.page, size: inof.value.size, sort: inof.value.sort, blurry: inof.value.blurry })
    list.value = res.content
}
getrolesAPI()

const getlazyAPI = async () => {
    let res = await api.lazyAPI(pida.value)
    text.value = res
}
getlazyAPI()

const add = () => {
    dialogVisible.value = true
}
const confirm = () => {
    dialogVisible.value = false
}
const cancel = () => {
    dialogVisible.value = false
}
</script>

<style lang="scss" scoped>
.centre {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;

    .Listleft {
        width: 69%;
    }

    .Rigth {
        width: 30%;
    }
}</style>