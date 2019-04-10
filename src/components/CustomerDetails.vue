<template>
  <div class="details container">
      <router-link to='/' class="btn btn-default">返回</router-link>
    <h1 class="page-header">{{customer.name}}

        <span class="pull-right">
            <router-link class="btn btn-primary" :to="/edit/+customer.id">编辑</router-link>
            <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
        </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-earphone"> {{customer.phone}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-envelope"> {{customer.email}}</span>
      </li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-earphone"> {{customer.education}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-earphone"> {{customer.graduationschool}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-earphone"> {{customer.profession}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-tag"> {{customer.profile}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "details",
  data() {
    return {
      customer: {}
    };
  },
  methods: {
    fetchCustomers(id) {
      this.$http.get(`http://localhost:3000/users/${id}`).then(data => {
        console.log(data);
        this.customer = data.data;
      });
    },
    deleteCustomer(id) {
        console.log(id)
        this.$http.delete(`http://localhost:3000/users/${id}`)
        .then((data)=>{
            console.log(data)
            this.$router.push({path: '/',query:{alert: '删除用户成功'}})
        })
    }
  },
  created() {
    this.fetchCustomers(this.$route.params.id);
  }
};
</script>

<style>
</style>
