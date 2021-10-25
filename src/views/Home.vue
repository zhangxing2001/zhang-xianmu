<template>
  <div class="about">
    <h1>Todolist</h1>
    <div class="about_wrap">
      <div class="abput_inp">
        <div class="asjxkas" @click="popo">
          <img v-show="boo1 == true" src="../../public/img/4.png" alt="" />
          <img v-show="boo1 == false" src="../../public/img/3.png" alt="" />
        </div>
        <input
          class="input2"
          type="text"
          placeholder="What needs to be done"
          @keyup.enter="add"
          v-model="title"
        />
      </div>
      <ul class="list_li">
        <li class="ajskxns" v-for="(item, index) in obj" :key="index">
          <div class="qxqw" @click="item.boo = !item.boo">
            <img
              v-show="item.boo == false"
              src="../../public/img/1.png"
              alt=""
            />
            <img
              v-show="item.boo == true"
              src="../../public/img/2.png"
              alt=""
            />
          </div>
          <span>{{ item.title }}</span>
          <span>
            <span class="assna" @click="skajnas(index)">×</span>
          </span>
        </li>
      </ul>
      <div class="ajxasbn" v-show="obj.length > 0">
        <span>{{ obj.length | sjaxbas }}</span>
        <span class="askjnsa" @click="lll('')"> All</span>
        <span @click="lll(false)">Active</span>
        <span @click="lll(true)">completed</span>
        <span @click="pop1o(false)">clear components</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      zhan: [],
      title: "",
      boo1: false,
      guolv: "all",
      obj: [],
    };
  },
  mounted() {
    this.obj = this.shuju;
  },
  filters: {
    sjaxbas(val) {
      if (val > 1) {
        return val + "items left";
      } else {
        return val + "item left";
      }
    },
  },

  methods: {
    add() {
      if (this.title == "" || this.title.trim() == "") return;
      this.zhan.push({
        id: new Date().getTime(),
        title: this.title,
        boo: false,
        quer: 1,
      });
      this.$store.commit("comitq", this.zhan);
      this.zhan = [];
      this.title = "";
    },
    kkk() {},
    lll(items) {
      this.obj = this.shuju;
      if (items === "") {
        return;
      } else if (!items) {
        var a = [];
        a = this.obj.filter((item) => {
          return item.boo == items;
        });
        this.obj = a;
      } else {
        var a = [];
        a = this.obj.filter((item) => {
          return item.boo == items;
        });
        this.obj = a;
      }
    },
    pop1o(item1) {
      this.$store.commit("hjh", item1);
    },
    popo() {
      this.boo1 = !this.boo1;
      this.$store.commit("jkajsn", this.boo1);
    },
    skajnas(index) {
      this.$store.commit("indexdel", index);
    },
    all() {
      this.$store.commit("all");
    },
  },
  computed: {
    ...mapState({
      shuju: (state) => state.zhangxing,
    }),
  },
  watch: {
    shuju: {
      deep: true,
      handler(val) {
        this.obj = val;
      },
    },
  },
};
</script>
<style lang="scss" scoped>
li {
  list-style: none;
}
.qxqw {
  height: 50px;
  width: 20px;
}
.asjxkas > img {
  height: 25px;
  width: 25px;
}
.acnas {
  height: 30px;
  width: 30px;
}
.assna {
  display: none;
  margin-top: 20px;
}
.ajskxns:hover .assna {
  display: block;
  height: 40px;
  display: flex;
}
.about {
  width: 500px;
  h1 {
    height: 40px;
    margin-top: 8px;
  }
  .about_wrap {
    background: #fff;
    .abput_inp {
      height: 50px;
      width: 100%;
      display: flex;
      border-bottom: 1px solid red;
      justify-content: space-between;
      align-items: center;
      .input1 {
        width: 20px;
        height: 20px;
        margin-left: 10px;
      }
      .input2 {
        height: 90%;
        width: 90%;
        outline: none;
        border: none;
      }
    }
    .list_li {
      height: 100%;
      width: 100%;
      li {
        height: 50px;
        display: flex;
        justify-content: space-between;
        margin: 0 10px;
        align-items: center;
      }
    }
    .ajxasbn {
      height: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 10px;
    }
  }
}
.asjxkas {
  height: 30px;
  width: 30px;
}
.askjnsa {
  padding: 3px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>
