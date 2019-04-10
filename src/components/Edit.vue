<template>
    <div class="edit container">
        <Alert v-if="alert" v-bind:message="alert"></Alert>
        <h1 class="page-header">编辑用户</h1>
        <form v-on:submit="updateCustomer">
            <div class="well">
                <h4>用户信息</h4>
                <div class="form-group">
                    <label>姓名</label>
                    <input type="text" class="form-control" placeholder="name" v-model="customer.name">
                </div>
                <div class="form-group">
                    <label>电话</label>
                    <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
                </div>
                <div class="form-group">
                    <label>邮箱</label>
                    <input type="text" class="form-control" placeholder="email" v-model="customer.email">
                </div>
                <div class="form-group">
                    <label>学历</label>
                    <input type="text" class="form-control" placeholder="education" v-model="customer.education">
                </div>
                <div class="form-group">
                    <label>毕业学校</label>
                    <input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool">
                </div>
                <div class="form-group">
                    <label>职业</label>
                    <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
                </div>
                <div class="form-group">
                    <label>个人简介</label>
                    <!-- <input type="text" class="form-control" placeholder="profile" v-model="customer.profile"> -->
                    <textarea rows="10" class="form-control" v-model="customer.profile"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">保存</button>
            </div>
        </form>
    </div>
</template>

<script>
import Alert from './Alert'
export default {
    name: 'edit',
    data() {
        return {
            customer: {},
            id: this.$route.params.id,
            alert: '',
        }
    },
    components: {
        Alert
    },
    methods: {
        updateCustomer(e) {
            if(!this.customer.name || !this.customer.phone || !this.customer.email) {
                this.alert = '请添加对应信息！'
            } else {
                let upCustomer = {
                    name: this.customer.name,
                    phone: this.customer.phone,
                    email: this.customer.email,
                    education: this.customer.education,
                    graduationschool: this.customer.graduationschool,
                    profession: this.customer.profession,
                    profile: this.customer.profile
                };

                this.$http.put(`http://localhost:3000/users/${this.id}`,upCustomer)
                .then((res)=>{
                    console.log(res)
                    this.$router.push({name: 'customerLink',query: {alert:"用户信息修改成功"}})
                })
            }
            e.preventDefault()
        },

        getInfo() {
            this.$http.get(`http://localhost:3000/users/${this.id}`)
            .then((data)=>{
                console.log(data)
                this.customer = data.data;
            })
        }
    },
    created() {
        this.getInfo()
    }
}
</script>

<style>

</style>
