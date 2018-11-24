<style>
import func from './vue-temp/vue-editor-bridge';
.ivu-layout{
  height: inherit
}
.ivu-menu.ivu-menu-vertical{
  height: 100%;
}
</style>

<template>
  <Row>
    <Menu :theme="theme2" active-name="1-2" :open-names="open" ref="leftMenu">
        <Submenu v-for="(menu,index) in menuLists" :key="index" :id="menu.id" :name = "menu.sort">
          <template slot="title">
                <Icon :type="menu.iconCls" />
                {{menu.text}}
            </template>
        </Submenu>
        <!-- <Submenu name="1">
            <template slot="title">
                <Icon type="ios-paper" />
                内容管理
            </template>
            <MenuItem name="1-1">文章管理</MenuItem>
            <MenuItem name="1-2">评论管理</MenuItem>
            <MenuItem name="1-3">举报管理</MenuItem>
            <Submenu name="4">
                <template slot="title">举报操作</template>
                <MenuItem name="4-1">新增举报</MenuItem>
                <MenuItem name="4-2">删除操作</MenuItem>
            </Submenu>
        </Submenu> -->
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-people" />
                用户管理
            </template>
            <MenuItem name="2-1">新增用户</MenuItem>
            <MenuItem name="2-2">活跃用户</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-stats" />
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
    </Menu>
  </Row>
</template>
<script>
export default {
  data(){
    return {
      open:[],
      menuLists:[],
      theme2: 'light'
    }
  },
  created(){
    this.getMenuData();
  },
  methods:{
    setMenu() {

    },
    getMenuData(){
      this.$axios.get("/api/menu")
      .then((res)=>{
        if(res.data.code == 200){
          this.menuLists = res.data.data;
          console.log(this.menuLists);
          this.setMenu();
        }
      })
      .catch((err)=>{
        console.log("错误"+err);
      })
    }
  }
}
</script>

