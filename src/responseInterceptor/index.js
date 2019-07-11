export const injectResponseInterceptor = axios => {
  axios.interceptors.response.use(
    res => res,
    err => {
      console.log('interceptors: ', err)
    }
  )
}
