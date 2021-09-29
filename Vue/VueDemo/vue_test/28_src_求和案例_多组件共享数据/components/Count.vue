<template>
  <div>
    <h2>当前求和为：{{ sum }}</h2>
    <h3>当前求和放大十倍后为：{{ bigSum }}</h3>
    <h3>我在{{ city }}城市的{{ company }}公司</h3>
    <h3 style="color:red">下方组件的总人数是：{{personList.length}}</h3>
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
    const x = mapState({ sum: "sum", city: "city", company: "company",personList:'personList' });
    console.log(x);
  },
  computed: {
    ...mapState(["sum", "city", "company",'personList']),
    ...mapGetters(["bigSum"]),
  },
  methods: {
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),
    ...mapActions(['jiaOdd','jiaWait'])//数组写法
  },
};
</script>
<style scoped>
button {
  margin-left: 5px;
}
</style>
