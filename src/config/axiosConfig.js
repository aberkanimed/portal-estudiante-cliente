import axios from 'axios'
import router from '../router'
import store from '../store'

const base = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})

base.interceptors.response.use( response => response, error => {
  if (error.response.status === 401) {
      router.push('/login')
      store.dispatch('logout')
  }
  return Promise.reject(error)
})

export default base