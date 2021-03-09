<template>
  <div id="home">
    <div class="bg">
      <div class="right-search" style="">
        <h2 id="weather">weather</h2>
        <input type="text" v-model="city" @keyup.enter="searchWeacher" />
        <button v-clickDown @click="searchWeacher">按钮</button>
        <div>{{ city }}</div>
      </div>
      <ul>
        <li v-for="item in weatherList" :key="item.id">
          <div class="type">
            {{ item.type }}<i class="iconfont" :class="icontype(item.type)"></i>
          </div>
          <div class="date">{{ item.date }}</div>
          <div class="temperature">
            <p class="low">最{{ item.low }}</p>
            ~
            <p class="high">最{{ item.high }}</p>
          </div>
          <div class="fengli">{{ item.fengli || item.fl }}</div>
          <div class="fengxiang">风向：{{ item.fengxiang || item.fx }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      city: "开封",
      weatherList: [],
    };
  },
  directives: {
    clickDown: {
      inserted(el) {
        el.click();
      },
    },
  },
  methods: {
    searchWeacher() {
      var that = this;
      axios
        .get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
        .then((res) => {
          console.log(res);
          that.weatherList = res.data.data.forecast;
          that.weatherList.splice(0, 0, res.data.data.yesterday);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    icontype(weather) {
      switch (weather) {
        case "晴":
          return "icon-qingtian";
        case "多云":
          return "icon-duoyun";
        case "阴":
          return "icon-yintian";
        case "阵雨":
          return "icon-zhenyu";
        case "雷阵雨":
          return "icon-leizhenyu";
        case "小雨":
          return "icon-xiaoyu";
        case "中雨":
          return "icon-zhongyu";
        case "大雨":
          return "icon-dayu";
        case "暴雨":
          return "icon-dabaoyu";
        case "大暴雨":
          return "icon-dabaoyu";
        case "特大暴雨":
          return "icon-dabaoyu";
        case "雪":
          return "icon-xue";
        case "雾":
          return "icon-wu";
        default:
          return "icon-weizhi";
      }
    },
  },
};
</script>

<style scoped>
#home {
  position: relative;
}

.bg {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url("../../public/indexBg/animescape-2.jpg");
  background-size: cover;
  background-attachment: fixed;
  z-index: -1;
}

.right-search {
  position: absolute;
  width: 400px;
  height: 400px;
  right: 30%;
  top: 300px;
}
ul {
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: space-around;
  top: 30px;
}

li {
  display: inline-block;
  margin-top: 20px;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: rgba(100, 100, 100, 0.5);
  color: #fff;
  transition: all 0.2s;
}

p {
  display: inline;
}

i {
  font-size: 64px;
}

.type {
  display: inline-block;
  margin: 0 auto;
  font-size: 20px;
}

.date {
  font-size: 32px;
}

.temperature {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
}
</style>