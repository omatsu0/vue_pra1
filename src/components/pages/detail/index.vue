<template>
  <div>
    <h1>This is Detail Page!!</h1>
    <ul>
      <li class="detail-item" v-for="l in list" :key="l.id" @click="move(l.id)">
        <span>{{l.id}} {{l.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: "001", name: "Aさん" },
        { id: "002", name: "Bさん" },
        { id: "003", name: "Cさん" },
        { id: "004", name: "Dさん" },
        { id: "005", name: "Eさん" }
      ]
    };
  },
  methods: {
    move(id) {
      this.$router.push(`/detail/${id}`);
    }
  }
};
</script>