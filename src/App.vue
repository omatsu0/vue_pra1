<template>
  <div id="app">
    <ul class="links">
      <li>
        <router-link to="/" exact>HOME</router-link>
      </li>
      <li>
        <router-link to="/about">ABOUT</router-link>
      </li>
      <li>
        <router-link to="/detail">DETAIL</router-link>
      </li>
      <li>
        <router-link to="/nest">NEST</router-link>
      </li>
    </ul>
    <div class="page">
      <transition name="router">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}

#app {
  margin: 0;
  padding: 0;
}

.links {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  display: flex;
  list-style: none;
}

.links > li > a {
  display: block;
  color: #666;
  padding: 5px 20px;
  text-decoration: none;
  transition: background 0.4s;
}
.links > li > a:hover {
  background: #f6f6f6;
}
.links > li > a.router-link-active {
  background: transparent;
  color: teal;
  cursor: default;
}

.page {
  position: relative;
}
.page > * {
  position: absolute;
}

.router-enter-active {
  transition: all 1s;
  transition-delay: 0.5s;
}
.router-leave-active {
  transition: all 0.5s;
}
.router-enter,
.router-leave-to {
  opacity: 0;
}
</style>
