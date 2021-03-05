<template>
  <div>
    <Navigation />
    <RouterView />
  </div>
</template>

<script>
import Navigation from '@/components/navigation/Navigation'

export default {
  components: {
    Navigation
  }
}
</script>

<style>
</style>
