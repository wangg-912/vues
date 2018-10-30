<style>
  .layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: inherit;
}
</style>
<template>
  <Layout :style="{padding: '0 4px 4px'}" class="content-box">
      <Content :style="{padding: '8px', minHeight: '280px', background: '#fff'}">
          <div class="containers">
            <div v-for="(item, key) in newsListShow">
              <news-cell
              :newsDate="item"
              :key="key"
              ></news-cell>
            </div>
          </div>
      </Content>
  </Layout>
</template>
<script>
import Api from "../../axios/api.js"
import NewsCell from "./NewCell";
export default {
  name: 'containers',
  data () {
    return {
      newsListShow: [],
    }
  },
  components:{
    NewsCell
  },
  created() {
    this.setNewsApi();
  },
  methods:{
    setNewsApi: function() {
      this.$http.post('/api/vehicle',this.qs.stringify({'type':'top','id':'123456'}),{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(function(res){
            this.newsListShow = res.data["data"];
          }.bind(this))
          .catch(function(err){
            if(err.response) {
              console.log("错误"+err.response)
            }
                //bind(this)可以不用
          }.bind(this));
    },
  }
}
</script>

