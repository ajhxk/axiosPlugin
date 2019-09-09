<template>
  <div>

    <div class="title">header中携带token:</div>
    <button @click="dotesterPlace">get dotesterPlace</button>
    <button @click="dotesterpostPlace">post dotesterpostPlace</button>
    <button @click="dotesterPlaces">dotesterPlaces</button><br>

    <div class="title">params 中携带token</div>
    <button @click="dotester2Upload">post dotester2Upload</button>
    <button @click="dotester2getupload">get dotester2getupload</button>
    <button @click="dotester2Uploads">dotester2Upload3</button><br>

    <div class="title">测试重连次数:</div>
    <button @click="dotesterErr402">dotesterErr402</button><br>
  </div>
</template>

<script>
import api from '../api';

export default {
  name: 'SplitPanePage',
  data () {
    return {
      offset: 0.6,
      offsetVertical: '250px',
      split1: 0.5,
    };
  },
  mounted () {},
  methods: {
    dotesterErr402 () {
      api
        .testererr401()
        .then(
          res => console.log('res:', res.data.data),
          err => console.log('err:', err.response.data)
        );
    },
    dotesterPlace () {
      api
        .testergetPlace()
        .then(
          res => console.log('res:', res.data.data),
          err => console.log('err:', err.response.data)
        );
    },
    dotesterpostPlace () {
      api
        .testerpostPlace()
        .then(
          res => console.log('res:', res.data.data),
          err => console.log('err:', err.response.data)
        );
    },
    dotesterPlaces () {
      api
        .testergetPlace()
        .then(
          res => console.log('res:', res.data.data),
          err => console.log('err:', err.response.data)
        );
      api
        .testergetPlace1()
        .then(
          res => console.log('res:', res.data.data),
          err => console.log('err:', err.response.data)
        );
      api
        .testergetPlace2()
        .then(
          res => console.log('res:', res.data.data),
          err => console.log('err:', err.response.data)
        );
      api
        .testergetPlace3()
        .then(
          res => console.log('res:', res.data.data),
          err => console.log('err:', err.response.data)
        );
    },
    dotester2Upload () {
      api.tester2Upload()
        .then(res => console.log('res', res.data.data), err => console.log('err', err.response.data));
    },
    dotester2getupload () {
      api.tester2getupload()
        .then(res => console.log('res', res.data.data), err => console.log('err', err.response.data));
    },
    dotester2Uploads () {
      api.tester2Upload1()
        .then(res => console.log('res', res.data.data), err => console.log('err', err.response.data));
      api.tester2Upload2()
        .then(res => console.log('res', res.data.data), err => console.log('err', err.response.data));
      api.tester2Upload3()
        .then(res => console.log('res', res.data.data), err => console.log('err', err.response.data));
    },
  },
};
</script>

<style>
.demo-split {
  height: 300px;
  border: 1px solid #dddee1;
}
.title{
  padding: 16px;
}
</style>
