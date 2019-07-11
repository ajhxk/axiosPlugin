<template>
    <div>
       qqqq
    </div>
</template>

<script>
import {do1, do2, do3, do4} from '../api'

export default {
  name: 'split_pane_page',
  data () {
    return {
      offset: 0.6,
      offsetVertical: '250px',
      split1: 0.5
    }
  },
  mounted () {
    let len = 10
    for (let i = 0; i < len; i++) {
      do1().then(res => {
        console.log(`do1 time ${i} ok res is `, res)
      })
      do2().then(res => {
        console.log(`do2 time ${i} ok res is `, res)
      })
      do3().then(res => {
        console.log(`do3 time ${i} ok res is `, res)
      })
    }
    do4()
  },
  methods: {
    handleMoving (e) {
      console.log(e.atMin, e.atMax)
    }
  }
}
</script>

<style>
    .demo-split{
        height: 300px;
        border: 1px solid #dddee1;
    }
</style>
