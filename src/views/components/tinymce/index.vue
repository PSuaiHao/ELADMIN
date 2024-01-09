<template>
  <el-form-item label="文章内容" prop="content">
  <editor id="tinymce" v-model="formData.content" :init="editorInit"></editor>
</el-form-item>
</template>
<script lang="ts" setup>
import tinymce from "tinymce/tinymce";
import "tinymce/themes/silver/theme";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/icons/default/icons";
import "tinymce/plugins/image";
import "tinymce/plugins/link";
import "tinymce/plugins/code";
import "tinymce/plugins/table";
import "tinymce/plugins/lists";
import "tinymce/plugins/contextmenu";
import "tinymce/plugins/wordcount";
import "tinymce/plugins/colorpicker";
import "tinymce/plugins/textcolor";
import {reactive,onMounted} from 'vue';
const formData=reactive({
  content:''
})
const editorInit = reactive({
  skin_url: "tinymce/skins/ui/oxide",
  content_css: "tinymce/skins/content/default/content.css",
  height: 300,
  plugins: "link lists image code table wordcount",
  toolbar:
    "bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat",
  branding: false,
  menubar: false,
  images_upload_handler: (blobInfo: any, success: any) => {
    // 文件六
    const file = blobInfo.blob();
    // 实例化File
    const files = new window.File([file], file.name, { type: file.type });
    // 实例化FormData格式
    const formDataUp = new FormData();
    formDataUp.append("img", files);
    // upLoad.value = "none";
    // let img = "";
    // // 上传图片
    // uploadFile(formDataUp).then((res) => {
    //   img = "http://8.141.145.150:3000" + res.data.url;
    //   success(img);
    // });
  },
});
onMounted(() => {
  tinymce.init({});
});

</script>
<!-- <template></template>
<script lang="ts" setup></script>
<style lang="scss" scoped></style> -->