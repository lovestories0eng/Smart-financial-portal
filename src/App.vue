<template>
  <div id="app">
    <Invagation></Invagation>
    <router-view></router-view>
  </div>
</template>

<script>
import Main from './components/Main'
import AddBlog from './components/AddBlog'
import Invagation from './components/Invagation'
import Person from './components/Person'


export default {
  name: 'App',
  components: {
    Main,AddBlog,Invagation,Person
  }
}
</script>

<style>

</style>
