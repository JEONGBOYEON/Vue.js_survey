<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">CODE2</th>
          <th scope="col">NAME</th>
          <th scope="col">PRICE</th>
          <th scope="col">COLOR</th>
        </tr>
      </thead>
      <tbody>
        <tr class="body" v-for="(post) in posts" v-bind:key="post.code">
          <td>{{ post.code }}</td>
          <td>{{ post.name }}</td>
          <td>{{ post.price }}</td>
          <td>{{ post.color }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //response값이 list이기 때문에
      posts:  [],
    };
  },
  mounted() {
    this.$axios
      .get("http://localhost:8090/v0.0.3/crbs")
      .then(response => {
        //api의 response의 data의 car list를 가져오기
        console.log(response);
        this.posts = response.data.car;
      })
      .catch(error => {
        alert(error);
      });
  }
};
</script>

<style scoped>
div.search {
  margin-bottom: 2em;
}

table.centre {
  margin-left:  auto;
  margin-right: auto;
  width:        50em;
  border-collapse: collapse;
  border:1px solid #444444;
}

tr.header {
  height: 3em;
  text-align: center;
}

tr.body {
  height: 2em;
  text-align: center;
  align-content: center;
}

td {
  border-bottom:       1px solid #444444;
}
</style>