<template>
  <div class="customers container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">用户管理系统</h1>
    <input placeholder="搜索..." type="text" v-model="search" class="form-control" />
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(customer,index) of customerFilter" :key="index">
          <td>{{customer.name}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.email}}</td>
          <td>
            <router-link :to="/customer/+customer.id" class="btn btn-default">详情</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from "./Alert";
export default {
  name: "customers",
  data() {
    return {
      customers: [],
      alert: "",
      search: ""
    };
  },
  components: {
    Alert
  },
  methods: {
    fetchCustomers() {
      this.$http.get("http://localhost:3000/users").then(data => {
        console.log(data)
        this.customers = data.data.reverse();
      });
    }
  },
  computed: {
    customerFilter() {
      return this.customers.filter((customer) => {
        return customer.name.match(this.search);
      });
    }
  },
  created() {
    console.log(this.$route.query.alert);
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    this.fetchCustomers();
  }
};
</script>

<style>
</style>
