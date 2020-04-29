import Vue from "vue";
import VueRouter from "vue-router";
import BoardList from "../components/board/BoardList.vue";

Vue.use(VueRouter); // 뷰 어플리케이션에 라우터 플러그인을 추가한다.

// 라우터 객체를 생성
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "BoardList",
      component: BoardList
    }
  ]
});
