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
     <Sider hide-trigger :style="{background: '#fff'}" width="250px" collapsible :collapsed-width="78" v-model="isCollapsed" class="menus" >
                    <Menu active-name="1-2" theme="light"  width="auto" :open-names="['1']" :class="menuitemClasses">
                      <Submenu v-for="(menu,key) in menuLists" :key="key" :id="menu.id" :name="key" >
                            <MenuItem name={{menu.text}} :id="menu.id"  v-if=menu.children.length == 0>{menu.text}</MenuItem>
                            <Submenu v-if=menu.children.length != 0 v-for="(cmenu,ckey) in menu" :key="ckey" :id="cmenu.id" :name="ckey">
                               <MenuItem name={{cmenu.text}} :id="menu.id" v-if=cmenu.children.length == 0>{menu.text}</MenuItem>
                               <Submenu v-for="(ccmenu,cckey) in cmenu" :key="cckey" :id="ccmenu.id" :name="cckey" >
                                  <MenuItem name={{ccmenu.text}} :id="menu.id" >{ccmenu.text}</MenuItem>
                               </Submenu>
                            </Submenu>
                      </Submenu>

                      <!-- <Submenu name="2">
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
                      </Submenu> -->

                  </Menu>
                </Sider>
</template>

<script>
export default {
  name:'menus',
  data() {
    return {
      isCollapsed: false,
      menuLists:[]
    };
  },
  created() {
    this.getMenuApi();
  },
  methods: {
    getMenuApi: function() {
      this.$axios.get("/api/menu")
      .then((res)=>{
        //TODO 成功之后的请求
        if(res.data.code == 200){
          this.menuLists = res.data.data;
        }
      })
      .catch((err)=>{
        console.log("错误"+err);
      })
    },

  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  }
};
</script>

