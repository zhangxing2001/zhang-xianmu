<template>
  <div class="about">
    <h1>Todolist</h1>
    <div class="about_wrap">
      <div class="abput_inp">
        <div @click="askjx" class="asjxkas">
          <img src="../../public/img/4.png" v-show="boo == false" alt="" />
          <img src="../../public/img/3.png" v-show="boo == true" alt="" />
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
        <li class="ajskxns" v-for="(item, index) in list" :key="item.id">
          <div class="qxqw" @click="item.boo1 = !item.boo1">
            <img
              src="../../public/img/1.png"
              v-show="item.boo1 == false"
              alt=""
            />
            <img
              src="../../public/img/2.png"
              v-show="item.boo1 == true"
              alt=""
            />
          </div>
          <span>{{ item.title }}</span>
          <span>
            <span @click="opo(index)" class="assna">×</span>
          </span>
        </li>
      </ul>
      <div class="ajxasbn">
        <span>{{ list.length }} items left</span>
        <span class="askjnsa" @click="zhangxin = 'p1'"> All</span>
        <span @click="zhangxin = 'p2'">Active</span>
        <span @click="zhangxin = 'p3'">completed</span>
        <span @click="deld">clear components</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      boo: false,
      title: "",
      zhangxin: "p1",
      list: [],
      list1: [
        {
          id: new Date().getTime(),
          title: "wowow",
          boo1: false,
        },
      ],
    };
  },
  mounted() {
    this.list = this.list1;
  },
  watch: {
    zhangxin(value) {
      if (value == "p1") {
        this.list = this.list1;
      } else if (value == "p2") {
        this.list = this.list1.filter((item) => !item.boo1);
      } else {
        this.list = this.list1.filter((item) => item.boo1);
      }
    },

    list1: {
      handler(value) {
        if (this.zhangxin == "p1") {
          this.list = value;
          console.log(this.list);
        } else if (this.zhangxin == "p2") {
          this.list = this.list1.filter((item) => !item.boo1);
        } else {
          this.list = this.list1.filter((item) => item.boo1);
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    askjx() {
      this.boo = !this.boo;
      this.list1.filter((item) => {
        item.boo1 = this.boo;
      });
    },
    deld() {
      this.list = this.list.filter((item) => {
        return !item.boo1;
      });
    },
    add() {
      if (this.title == "" || this.title.trim() == "") return;
      this.list1.push({
        id: new Date().getTime(),
        title: this.title,
        boo1: false,
      });
      this.title = "";
    },
    opo(index) {
      this.list1.splice(index, 1);
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
