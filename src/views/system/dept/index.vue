<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="16">
                <searchchild></searchchild>
            </el-col>
            <el-col :span="8">
              
            </el-col>
        </el-row>
        <div class="tabs">
            <tablechildren></tablechildren>
        </div>
    </div>
</template>

<script lang="ts" setup>
import searchchild from '@/components/searchild.vue';
import tablechildren from './tablechildren.vue'
</script>

<style lang="scss" scoped>
.but{
    margin-bottom:20px ;
}
</style>