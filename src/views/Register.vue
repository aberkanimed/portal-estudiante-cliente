<template>
    <main class="d-flex w-100">
        <div class="container d-flex flex-column">
            <div class="row vh-100">
                <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                    <div class="d-table-cell align-middle">

                        <div class="text-center mt-4">
                            <h1 class="h2">Get started</h1>
                            <p class="lead">
                                Start creating the best possible user experience for you customers.
                            </p>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <div class="m-sm-4">
                                    <div class="text-center text-danger" role="alert">
                                        <ul>
                                            <li v-for="(error, index) in errors" :key="index">{{ error[0] }}</li>
                                        </ul>
                                    </div>
                                    <form @submit.prevent="register">
                                        <div class="mb-3">
                                            <label class="form-label">Name</label>
                                            <input class="form-control form-control-lg" type="text" v-model="form.name" name="name"
                                                placeholder="Enter your name" />
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Email</label>
                                            <input class="form-control form-control-lg" type="email" v-model="form.email" name="email"
                                                placeholder="Enter your email" />
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Password</label>
                                            <input class="form-control form-control-lg" type="password" v-model="form.password" name="password"
                                                placeholder="Enter password" />
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Confirme Password</label>
                                            <input class="form-control form-control-lg" type="password" v-model="form.confirm_password" name="confirm_password"
                                                placeholder="Confirm password" />
                                        </div>
                                        <div class="text-center mt-3">
                                            <button type="submit" class="btn btn-lg btn-primary">Register</button>
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
    import '../assets/js/app.js'

    export default {
        data() {
            return {
                form: {
                    name: 'John Doe',
                    email: 'john@doe.com',
                    password: 'password',
                    confirm_password: 'password',
                },
                errors: null,
            }
        },
        methods: {
            register() {
                this.$store
                .dispatch('register', this.form)
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