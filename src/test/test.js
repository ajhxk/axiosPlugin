
(function () {
  const axios = {}
  let urlTimer = {}
  function _axios (config) {
    return new Promise(function (resolve, reject) {
      clearTimeout(urlTimer[config.url])
      urlTimer[config.url] = setTimeout(function () {
        axios(config).then(resolve, reject)
      }, 500)
    })
  }

  _axios({url: '/123'})
  _axios({url: '/123'})

  _axios({url: '/567'})
})()
