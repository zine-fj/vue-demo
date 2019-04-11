<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p>作者：{{blog.author}}</p>
    <p>分类：</p>
    <ul>
      <li v-for="category in blog.categories" :key="category">{{category}}</li>
    </ul>
    <!-- <button v-on:click="btnEdit()" class="btn btn-edit">编辑</button> -->
    <router-link  class="btn btn-edit" :to="/edit/+this.id">编辑</router-link>
    <button v-on:click="btnDelete()" class="btn btn-delete">删除</button>
  </div>
</template>

<script>
export default {
  name: "single-blog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  methods: {
    btnDelete() {
      this.$http
        .delete(`https://vue-blog-51b07.firebaseio.com/posts/${this.id}.json`)
        .then(data => {
          console.log(data)
          this.$router.push({path: '/'})
        });
    },
    // btnEdit(){
    //     console.log(this.id)
    // }
  },
  created() {
    this.$http
      .get(`https://vue-blog-51b07.firebaseio.com/posts/${this.id}.json`)
      .then(data => {
        this.blog = data.data;
      });
  }
};
</script>
<style>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border: 1px dotted #aaa;
}
#single-blog .btn {
  width: 50px;
  height: 30px;
  line-height: 30px;
  background: #fff;
  border: none;
  margin: 0 10px;
  
  cursor: pointer;
}
#single-blog .btn:hover {
box-shadow: 0 0 10px #ddd;
}
#single-blog a {
    display: inline-block;
    text-decoration: none;
    text-align: center;
}
</style>
