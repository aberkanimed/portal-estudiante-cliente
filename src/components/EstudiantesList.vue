<template>
    <div class="card flex-fill">
        <div class="card-header">
            <h5 class="card-title mb-0">Listado Estudiantes</h5>
        </div>
        <table v-if="estudiantes.length" class="table table-hover my-0">
            <thead>
                <tr>
                    <th>NOMBRE</th>
                    <th class="d-none d-md-table-cell">EMAIL</th>
                    <th class="d-none d-md-table-cell">FECHA ALTA</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="estudiante in estudiantes" :key="estudiante.id">
                    <td>{{ estudiante.name }}</td>
                    <td class="d-none d-md-table-cell">{{ estudiante.email }}</td>
                    <td class="d-none d-md-table-cell">{{ estudiante.created_at }}</td>
                    <td>
                        <div class="btn-group btn-group-sm" role="group" aria-label="Large button group">
                            <button type="button" class="btn btn-primary">View</button>
                            <button type="button" class="btn btn-success">Edit</button>
                            <button type="button" class="btn btn-danger">Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="card-header" v-else>
            <span class="card-subtitle text-muted">No hay estudiantes</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            estudiantes: {
                type: Object,
                requiered: true
            }
        }
    }
</script>

<style>
</style>