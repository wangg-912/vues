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
.layout-nav li:hover{
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
            <div class="layout-nav" >
                <MenuItem v-for="(list, index) in lists" :key="index" :name="list.id">
                    <Icon :type="list.icon" class="f16" color="info"></Icon>
                </MenuItem>
            </div>
        </Menu>
    </Header>
</template>

<script>
export default {
  data(){
    return {
      lists:[
        {'icon':'ios-navigate','id':1},
        {'icon':'ios-keypad','id':2},
        {'icon':'ios-analytics','id':3},
        {'icon':'ios-paper','id':4}
      ]
    };
  }

}
</script>

