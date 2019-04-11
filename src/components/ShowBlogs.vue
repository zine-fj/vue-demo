<template>
    <div v-theme:column="'wide'" id="show-blogs">
        <h1>博客总览</h1>
        <input type="text" v-model="search" placeholder="搜索">
        <div v-for="(blog,index) in filteredBlogs" class="single-blog" :key='index'>
            <router-link :to="'/blog/'+blog.id">
                <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
            </router-link>
            <article>{{blog.content | snippet}}</article>
        </div>
    </div>
</template>

<script>
export default {
    name: 'show-blogs',
    data() {
        return {
            blogs: [],
            search: ''
        }
    },
    created() {
        // this.$http.get('https://jsonplaceholder.typicode.com/posts')
        this.$http.get('https://vue-blog-51b07.firebaseio.com/posts.json')
        .then((data)=>{
            return data.data
        })
        .then((data)=>{
            let blogsArray = [];
            for(let key in data) {
                data[key].id = key;
                blogsArray.push(data[key]);
            }
            this.blogs = blogsArray.reverse()
        })
    },
    computed: {
        filteredBlogs() {
            return this.blogs.filter((blog)=>{
                return blog.title.match(this.search)
            })
        }
    },
    filters: {
        toUppercase(value){
            return value.toUpperCase();
        }
    },
    directives: {
        'rainbow': {
            bind(el,binding,vnode) {
                el.style.color = `#${Math.random().toString(16).slice(2,8)}`
            }
        }
    }
}
</script>

<style>
#show-blogs {
    max-width: 800px;
    margin: 0 auto;
}
.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    border: 1px dotted #aaa;
}
#show-blogs a {
    color: #444;
    text-decoration: none;
}
input[type='text'] {
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
}
</style>
