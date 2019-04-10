<template>
  <div class="translate-form row">
      <form v-on:submit.prevent="formSubmit" class="well form-inline">
        <input class="form-control" type="text" v-model="textToTranslate" placeholder="请输入要翻译的内容..">
        <select v-model="language" class="form-control">
          <option
            v-for="(trans,index) of translateArr"
            :key="index"
            :value="trans.value"
          >{{trans.text}}</option>
        </select>
        <input type="submit" value="翻译" class="btn btn-primary">
      </form>
  </div>
</template>

<script>
export default {
  name: "translate-form",
  data() {
    return {
      textToTranslate: "",
      language: "en",
      translateArr: [
        { value: "en", text: "English" },
        { value: "ru", text: "Russian" },
        { value: "ko", text: "Korean" },
        { value: "ja", text: "Japanese" }
      ]
    };
  },
  methods: {
    formSubmit(e) {
      this.$emit("formSubmit", this.textToTranslate, this.language);
      e.preventDefault();
    }
  }
};
</script>

<style>
    .form-inline {
        margin: 0 auto;
    }
    select {
        margin: 0 10px;
    }
</style>
