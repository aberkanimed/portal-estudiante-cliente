<template>
    <nav id="sidebar" class="sidebar js-sidebar">
        <div class="sidebar-content js-simplebar">
            <a class="sidebar-brand" href="index.html">
                <span class="align-middle">Portal Estudiante</span>
            </a>

            <ul class="sidebar-nav">
                <li class="sidebar-header">
                    Pages
                </li>

                <router-link :to="{name: 'Dashboard'}" exact-active-class="active" class="sidebar-item">
                    <span class="sidebar-link">
                        <i class="align-middle" data-feather="sliders"></i> <span class="align-middle">Dashboard</span>
                    </span>
                </router-link>

                <router-link :to="{name: 'Estudiantes'}" exact-active-class="active" class="sidebar-item">
                    <span class="sidebar-link">
                        <i class="align-middle" data-feather="user"></i> <span class="align-middle">Estudiantes</span>
                    </span>
                </router-link>
            </ul>
        </div>
    </nav>
</template>