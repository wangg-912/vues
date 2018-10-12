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
            <div class="layout-nav">
                <MenuItem name="1">
                    <Icon type="ios-navigate" class="f16"></Icon>
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="ios-keypad" class="f16"></Icon>
                </MenuItem>
                <MenuItem name="3">
                    <Icon type="ios-analytics" class="f16"></Icon>
                </MenuItem>
                <MenuItem name="4">
                    <Icon type="ios-paper" class="f16"></Icon>
                </MenuItem>
            </div>
        </Menu>
    </Header>
</template>

<script>
export default {
  data(){
    return ;
  }

}
</script>

