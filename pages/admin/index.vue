<template>
    <div>
        <div class="circle-bg">
            <div class="circle-color fixed">
                <div class="gradient-circle"></div>
                <div class="gradient-circle two"></div>
            </div>
        </div>
        <Navbar ref="navbar" />
        <PageHeader title="ورود به پنل مدیریتی" />
        <div class="TAR DRTL container py-4">
            {{ isAuthenticated }}
            <form @submit.prevent="userLogin">
                <div class="row">
                    <public-input class="py-3 px-2" v-model="login.phone" key="title" placeholder="نام کاربری را وارد کنید."
                        title="نام کاربری" />
                    <public-input class="py-3 px-2" v-model="login.password" key="description"
                        placeholder="کلمه عبور را وارد کنید." title="کلمه عبور" />
                </div>
                <button type="submit" class="btn primary btn-block btn-lg my-3">ورود</button>
            </form>
        </div>
    </div>
</template>
        

<script>

export default {
    layout: "dark",
    data() {
        return {
            login: {
                phone: '',
                password: ''
            }
        }
    },
    methods: {
        async userLogin() {
            try {
                let response = await this.$auth.loginWith('local', { data: this.login })
                console.log(response)
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>
