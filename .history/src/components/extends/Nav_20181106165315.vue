<style>
.ivu-layout {
  height: inherit;
}

.ivu-layout-header {
  padding: 0 20px;
}
.layout-con {
  height: 100%;
  width: 100%;
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>

<template>
     <Sider hide-trigger :style="{background: '#fff'}" width="250px" collapsible :collapsed-width="78" v-model="isCollapsed" >
                    <Menu active-name="1-2" theme="light"  width="auto" :open-names="['1']" :class="menuitemClasses">
                      <Submenu name="1">
                          <template slot="title">
                              <Icon type="ios-analytics" />
                              Navigation One
                          </template>
                          <MenuGroup title="Item 1">
                              <MenuItem name="1-1">Option 1</MenuItem>
                              <MenuItem name="1-2">Option 2</MenuItem>
                          </MenuGroup>
                          <MenuGroup title="Item 2">
                              <MenuItem name="1-3">Option 3</MenuItem>
                              <MenuItem name="1-4">Option 4</MenuItem>
                          </MenuGroup>
                      </Submenu>
                      <Submenu name="2">
                          <template slot="title">
                              <Icon type="ios-filing" />
                              Navigation Two
                          </template>
                          <MenuItem name="2-1">Option 5</MenuItem>
                          <MenuItem name="2-2">Option 6</MenuItem>
                          <Submenu name="3">
                              <template slot="title">Submenu</template>
                              <MenuItem name="3-1">Option 7</MenuItem>
                              <MenuItem name="3-2">Option 8</MenuItem>
                          </Submenu>
                      </Submenu>
                      <Submenu name="4">
                          <template slot="title">
                              <Icon type="ios-cog" />
                              Navigation Three
                          </template>
                          <MenuItem name="4-1">Option 9</MenuItem>
                          <MenuItem name="4-2">Option 10</MenuItem>
                          <MenuItem name="4-3">Option 11</MenuItem>
                          <MenuItem name="4-4">Option 12</MenuItem>
                      </Submenu>
                  </Menu>
                </Sider>
</template>

<script>
import Api from "../../axios/api.js"
export default {
  data() {
    return {
      isCollapsed: false
    };
  },
  created() {
    this.getMenuApi();
  },
  methods: {
    getMenuApi: () => {
      console.log(this.$http)
    },

  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  }
};
</script>

