<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: inherit;
}
.ivu-layout {
  height: inherit;
}

.ivu-layout-header{
  padding: 0 20px
}
.layout-con{
        height: 100%;
        width: 100%;
    }
  .menu-item span{
      display: inline-block;
      overflow: hidden;
      width: 69px;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: bottom;
      transition: width .2s ease .2s;
  }
  .menu-item i{
      transform: translateX(0px);
      transition: font-size .2s ease, transform .2s ease;
      vertical-align: middle;
      font-size: 16px;
  }
  .collapsed-menu span{
      width: 0px;
      transition: width .2s ease;
  }
  .collapsed-menu i{
      transform: translateX(5px);
      transition: font-size .2s ease .2s, transform .2s ease .2s;
      vertical-align: middle;
      font-size: 22px;
  }
</style>
<template>
    <div class="layout">
        <Layout style="{height:100%}" value=true>
            <menu-header></menu-header>
            <Layout>
                <nav-menu></nav-menu>
                <Layout :style="{padding: '0 4px 4px'}">
                    <Content :style="{padding: '8px', minHeight: '280px', background: '#fff'}">
                        Content
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script>
import MenuHeader from './extends/MenuHeader';
import NavMenu from "./extends/Nav"
export default {
  components: {MenuHeader,NavMenu},
  data() {
    return {
      isCollapsed: false
    };
  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  }
};
</script>

