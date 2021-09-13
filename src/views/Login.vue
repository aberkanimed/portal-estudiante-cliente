<template>
    <main class="d-flex w-100">
        <div class="container d-flex flex-column">
            <div class="row vh-100">
                <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                    <div class="d-table-cell align-middle">

                        <div class="text-center mt-4">
                            <h1 class="h2">Welcome back, Charles</h1>
                            <p class="lead">
                                Login to your account to continue
                            </p>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <div class="m-sm-4">
                                    <div class="text-center">
                                        <img src="../assets/img/avatars/avatar.jpg" alt="Charles Hall"
                                            class="img-fluid rounded-circle" width="132" height="132" />
                                    </div>
                                    <div class="text-center text-danger" role="alert">
                                        <ul>
                                            <li v-for="(error, index) in errors" :key="index">{{ error[0] }}</li>
                                        </ul>
                                    </div>
                                    <form @submit.prevent="login">
                                        <div class="mb-3">
                                            <label class="form-label">Email</label>
                                            <input class="form-control form-control-lg" type="email" name="email" v-model="form.email"
                                                placeholder="Enter your email" />
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Password</label>
                                            <input class="form-control form-control-lg" type="password" name="password" v-model="form.password"
                                                placeholder="Enter your password" />
                                            <small>
                                                <a href="#">Forgot password?</a>
                                            </small>
                                        </div>
                                        <div class="text-center mt-3">
                                            <button type="submit" class="btn btn-lg btn-primary">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                },
                errors: null,
            }
        },
        methods: {
            login () {
                this.$store.dispatch('login', this.form)
                .then(() => {
                    this.$router.push({ name: 'Estudiantes' })
                })
                .catch((err) => {
                    this.errors = err.response.data.errors;
                })
            }
        }
    }
</script>

<style>

</style>