<template>
    <HelloWorld :user="$route.params.user"/>
</template>

<script>
import HelloWorld from '../components/HelloWorld/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  }
}
</script>
