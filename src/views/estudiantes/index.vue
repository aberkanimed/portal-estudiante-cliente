<template>
    <h1 class="h3 mb-3">Estudiantes</h1>
    <div class="row">
        <div class="col-12">
            <estudiantes-list :estudiantes="estudiantes"></estudiantes-list>
        </div>
    </div>
</template>

<script>
    import EstudiantesList from '@/components/EstudiantesList.vue'
    import EstudianteService from '@/services/EstudianteService.js'

    export default {
        components: {
            EstudiantesList
        },
        data() {
            return {
                estudiantes: {}
            }
        },
        created() {
            EstudianteService
            .getEstudiantes()
            .then(({ data }) => {
                this.estudiantes = data.data
            })
            .catch((error) => {
                console.log(error)
            })
        }

    }
</script>

<style>

</style>