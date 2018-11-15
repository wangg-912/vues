<style>
  .layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 260px;
  margin: 0 auto;
  margin-right: 20px;
}
.m-icon:hover{
  color: #1890ff
}
.f16{
  font-size: 18px;
}
</style>
<template>
  <Header class="menu-header">
        <Menu mode="horizontal" theme="dark">
            <div class="layout-logo"></div>
            <div class="layout-nav" id="header_menu">
                <MenuItem class="header-menu" v-for="(list, key) in lists" :key="key" :id="list.id" >
                    <Icon :type="list.icon"  @click="showMenu" class="f16 m-icon"></Icon>
                </MenuItem>
            </div>
        </Menu>
    </Header>
</template>

<script>
export default {
  name:"headerMenu",
  data(){
    return {
      lists:[]
    };
  },
  created(){
      this.$axios.get("/api/head").then((res)=>{
        if(res.data.code == 200){
          this.lists = res.data
        }
      }).then((err)=>{
        console.log("错误"+err);
      })
  },
  methods:{
    showMenu(evet) {
      alert("事件扩展")
    }
  }

}
</script>

