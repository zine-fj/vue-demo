<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
        <div class="background">
            <h1>欢迎大家品尝 pizza!</h1>
            <h2>这里有你非常喜欢的 pizza!</h2>
            <button @click="goTomenu" class="btn btn-success">let's order!</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    goTomenu() {
      // 跳转到上一次浏览的页面
      // this.$router.go(-1)

      // 指定跳转的地址
      // this.$router.replace('/menu');
      // this.$router.replace({name: 'adminLink'})

      // 通过push进行跳转
      this.$router.push("/menu");
      this.$router.push({ name: "adminLink" });
    }
  }
};
</script>

<style>
#home {
    background: url('../../src/assets/like5.jpg') no-repeat;
    background-size: 100% 100%;
    height: 85vh;
    padding: 10%;
}
h1,h2 {
    margin: 6%;
}
.background {
    background: #eee;
    opacity: 0.8;
    max-width: 70vw;
    margin: 0 auto;
    padding: 20px 0;
}
</style>
