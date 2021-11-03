<template>
    <div class="login-page">
        <h3>Reservations Login</h3>
        <div class="login-form">
            <input type="text" v-model="email" placeholder="Username" />
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

    .login-form {
        display: flex;
        flex-direction: column;
        &> * {
            margin-top: 12px;
        }
    }
}
</style>