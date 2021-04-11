<template>
  <div>
    <h1>This is Nest Page!!</h1>
    <ul>
      <li>
        <router-link to="/nest">child1</router-link>
      </li>
      <li>
        <router-link to="/nest/child2">child2</router-link>
      </li>
      <li>
        <router-link to="/nest/child3">child3</router-link>
      </li>
    </ul>
    <div class="child-page">
      <router-view/>
    </div>
  </div>
</template>

<style>
.child-page {
  border: 2px solid #ddd;
  width: 100vw;
  padding: 20px;
}
</style>
