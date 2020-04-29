# Vue.js-Test

## npm Install
```shell
apt-get install npm
```
## vue/cli Install
```shell
npm i -g @vue/cli
```
## 프로젝트 생성 Install
```shell
vue create
```
## bootstrap Install
```shell
npm install vue bootstrap-vue bootstrap
```
## axios Install
```shell
npm install --save axios
```

## Scrpit
``` javascript
<script>
export default {
  data() {
    return {
      //response값이 list이기 때문에
      posts:  []ç,   

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
```

## Template
``` html
<template>
  <div>
    <table class="centre">
      <tr class="header">
        <td>CODE</td>
        <td>NAME</td>
        <td>PRICE</td>
        <td>COLOR</td>
      </tr>  
      <tr class="body" v-for="(post) in posts" v-bind:key="post.code">
        <td>{{ post.code }}</td>
        <td>{{ post.name }}</td>
        <td>{{ post.price }}</td>
        <td>{{ post.color }}</td>
      </tr>
    </table>
  </div>
</template>
```
