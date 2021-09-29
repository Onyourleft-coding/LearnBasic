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
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <!-- <button @click="JIA(n)">+</button> -->
    <!-- <button @click="JIAN(n)">-</button> -->
    <!-- <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button> -->
    <button @click="jiaOdd(n)">当前求和为奇数再加</button>
    <button @click="jiaWait(n)">等一等再加</button>
  </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
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
    // 借助mapState生成计算属性，从state中读取数据，（数组写法）
    // ...mapState({sum:'sum',cith:'city',company:'company'})
    ...mapState(["sum", "city", "company"]),

    // 借助mapGetters生成计算属性，从getters中读取数据，（对象写法）
    // ...mapGetters({ bigSum: "bigSum" }),
    ...mapGetters(["bigSum"]),
  },
  methods: {
    // 我们自己写方法
    // increment() {
    //   this.$store.commit("JIA", this.n);
    // },
    // decrement() {
    //   this.$store.commit("JIAN", this.n);
    // },
    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),
    // ...mapMutations(["JIA", "JIAN"]),//数组写法

    // --------------------------------
// 我们自己写方法
    // incrementOdd() {
    //   this.$store.dispatch("jiaOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("jiaWait", this.n);
    // },
// 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
    // ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
    ...mapActions(['jiaOdd','jiaWait'])//数组写法
  },
};
</script>
<style scoped>
button {
  margin-left: 5px;
}
</style>
