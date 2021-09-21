<template>
    <div class="wrapper">
        <!-- Side Nav Bar -->
        <app-nav :toggleSideBar="toggleSideBar"></app-nav>

        <!-- Main -->
        <div class="main">
            <!-- NavBar -->
            <nav class="navbar navbar-expand navbar-light navbar-bg">
                <a class="sidebar-toggle" @click="toggleSideBar = !toggleSideBar">
                    <i class="hamburger align-self-center"></i>
                </a>

                <div class="navbar-collapse collapse">
                    <ul class="navbar-nav navbar-align">
                        <li class="nav-item dropdown">
                            <a class="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#"
                                data-bs-toggle="dropdown">
                                <i class="align-middle" data-feather="settings"></i>
                            </a>

                            <a class="nav-link dropdown-toggle d-none d-sm-inline-block" href="#"
                                data-bs-toggle="dropdown">
                                <img src="../assets/img/avatars/avatar.jpg" class="avatar img-fluid rounded me-1"
                                    alt="Charles Hall" /> <span class="text-dark">Charles Hall</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="#"><i class="align-middle me-1"
                                        data-feather="user"></i> Profile</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#"><i class="align-middle me-1"
                                        data-feather="settings"></i> Settings</a>
                                <div class="dropdown-divider"></div>
                                <button class="dropdown-item" @click="logout">Log out</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <!-- Content -->
            <main class="content">
                <div class="container-fluid p-0">
                    <router-view></router-view>
                </div>
            </main>

            <!-- footer -->
            <footer class="footer">
                <div class="container-fluid">
                    <div class="row text-muted">
                        <div class="col-6 text-start">
                            <p class="mb-0">
                                <a class="text-muted" href="#" target="_blank"><strong>Don Bosco
                                        F5</strong></a> &copy;
                            </p>
                        </div>
                        <div class="col-6 text-end">
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <a class="text-muted" href="#" target="_blank">Support</a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="text-muted" href="#" target="_blank">Help
                                        Center</a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="text-muted" href="#" target="_blank">Privacy</a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="text-muted" href="#" target="_blank">Terms</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<style>
    @import '../assets/css/app.css';
</style>

<script>
    import '../assets/js/app.js';
    import AppNav from '@/components/AppNav.vue'

    export default {
        name: 'Home',
        components: {
            AppNav
        },
        data() {
            return {
                toggleSideBar: false
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('logout')
            }
        }
    }
</script>