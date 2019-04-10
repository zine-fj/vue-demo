<template>
  <div id="app">
    <h1>在线翻译</h1>
    <p class="text-muted">简单 / 易用 / 便捷</p>

    <TranslateForm v-on:formSubmit="translateText"></TranslateForm>
    <TranslateOutput v-text="translatedText"></TranslateOutput>
  </div>
</template>
<script>
import TranslateForm from "./components/TranslateForm";
import TranslateOutput from "./components/TranslateOutput";

export default {
  name: "App",
  data() {
    return {
      key:
        "trnsl.1.1.20190410T061757Z.ab9161e93b120729.acd8735643df9766475daae87b6eea829197c292&text",
      translatedText: ""
    };
  },
  components: {
    TranslateForm,
    TranslateOutput
  },
  methods: {
    translateText(text, language) {
      console.log(text);
      if (text) {
        this.$axios
          .get(
            `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${
              this.key
            }&lang=${language}&text=${text}`
          )
          .then(data => {
            this.translatedText = data.data.text[1];
            console.log(this.translatedText);
          });
      } else {
        this.translatedText = '请输入要翻译内容！'
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
  min-height: 400px;
  box-sizing: border-box;
}
</style>
