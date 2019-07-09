<template>
    <div>
       qqqq
    </div>
</template>

<script>
import {do1} from '../api'
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
    do1()
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
