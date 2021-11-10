<template>
    <div class="login-page">
        <div class="login-form">
            <input type="text" v-model="email" placeholder="Your email" />
            <input type="password" v-model="password" placeholder="Password" />
            <button @click="onLoginClick">Login</button>
            <div v-if="error">
                {{ error }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            email: null,
            password: null,
            error: null,
        };
    },
    methods: {
        ...mapActions(['login']),
        async onLoginClick() {
            this.error = null;
            try {
                await this.login({ email: this.email, password: this.password });
            } catch (error) {
                this.error = error.response.data.message;
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.login-page {
    width: 100%;
    max-width: 400px;
    margin: auto;

    .login-form {
        display: flex;
        flex-direction: column;
        margin-top: 320px;
        width: 400px;
        padding: 48px;
        border-radius: 6px;
        background-color: $white;
        box-shadow: $shadow-login;

        &> * {
            margin-top: 12px;
        }

        input {
          width: 100%;
          border-radius: 20px;
          margin-bottom: 16px;
          color: #ADADAD;
        }

        button {
          font-size: 18px;
          color: #FFFFFF;
          border-radius: 20px;
          background-color: $gold;
        }
    }
}
</style>
