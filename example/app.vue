<template>
    <div class="container">
        <nav>
            <ul>
                <li v-for="route in routes" :key="route.path">
                  <router-link :to="route.path">{{route.path}}</router-link>
                </li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>
<script>
import routes from './routers'
export default {
  data: function () {
    return {
      routes
    }
  },
  mounted: function () {

  },
  beforeDestroy: function () {

  },
  methods: {

  }
}
</script>
