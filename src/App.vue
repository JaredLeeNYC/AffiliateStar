<template>
  <div id="app">
    <CHeader/>
    <Home/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import CHeader from "./components/CHeader";
import Home from "./views/Home";

export default {
  name: "App",
  components: {
    HelloWorld,
    CHeader,
    Home
  }
};
</script>

<style>
</style>
