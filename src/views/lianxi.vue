<template>
  <ul>
    <li>
        <div class="sh">
            <div class="zi">好物</div>
        </div>
        <div class="chao">京东超市</div>
    </li>
  </ul>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
ul{
    width: 600px;
    height: 300px;
    background-color: #ec8d97;
    li{
        .sh{
            width: 100%;
            height: 200px;
            background-color: aquamarine;
            .zi{
                height: 80px;
                margin-bottom: -40px;
                background-color: #da4ec9;
            }
        }
        .chao{
            height: 100px;
            width: 100%;
            background-color: #faebc4;
        }
    }
}
</style>