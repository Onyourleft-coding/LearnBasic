<template>
  <div>
    <h2>当前求和为：{{ sum }}</h2>
    <h3>当前求和放大十倍后为：{{ bigSum }}</h3>
    <h3>我在{{ city }}城市的{{ company }}公司</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  mounted() {
    // console.log("count", this.$store);
    const x = mapState({ sum: "sum", city: "city", company: "company" });
    console.log(x);
  },
  computed: {
    // 靠自己去亲自去写计算属性：sum\city\company
    // sum() {
    //   return this.$store.state.sum;
    // },
    // city() {
    //   return this.$store.state.city;
    // },
    // company() {
    //   return this.$store.state.company;
    // },
    // 解构赋值
    // 借助mapState生成计算属性，从state中读取数据，（对象写法）
    // ...mapState({ sum: "sum", city: "city", company: "company" }),

    // 借助mapState生成计算属性，从state中读取数据，（数组写法）
    ...mapState(["sum", "city", "company"]),

    // 借助mapGetters生成计算属性，从getters中读取数据，（对象写法）
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
    // ...mapGetters({ bigSum: "bigSum" }),
    ...mapGetters(['bigSum'])
  },
  methods: {
    increment() {
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },
};
</script>
<style scoped>
button {
  margin-left: 5px;
}
</style>
