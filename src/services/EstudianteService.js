export default {
    getEstudiantes() {
      return apiClient.get('/api/estudiantes')
    }
}