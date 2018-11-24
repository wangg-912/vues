<style>
.ivu-layout{
  height: inherit
}
.ivu-menu.ivu-menu-vertical{
  height: 100%;
  overflow: auto
}
</style>

<template>
  <Row>
    <Menu ref="leftMenu" :theme="theme2" active-name="4" :open-names="open" >
        <Submenu v-for="(menu,index) in menuLists" :key="index" :id="menu.id" :name = "menu.sort">
          <template slot="title">
                <Icon :type="menu.iconCls" />
                {{menu.text}}
            </template>
            <template>
              <div v-for="cmenu in menu.children">
                  <Submenu v-if="cmenu.children.length" :id="cmenu.id" :name = "cmenu.sort">
                    <template slot="title">
                      <Icon :type="cmenu.iconCls" />
                    {{cmenu.text}}
                    </template>
                    <template>
                      <div v-for="(smenu, si) in cmenu.children" :key="si">
                        <MenuItem :id="smenu.id" :name = "smenu.sort">
                          <Icon :type="smenu.iconCls" />
                          {{smenu.text}}
                      </MenuItem>
                      </div>
                    </template>
                  </Submenu>
                  <MenuItem v-else :id="cmenu.id" :name = "cmenu.sort">
                      <Icon :type="cmenu.iconCls" />
                      {{cmenu.text}}
                  </MenuItem>
              </div>
            </template>

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
  /* updated(){
    debugger;
     this.setMenu();
  }, */
  methods:{
    setMenu() {
      this.open = ["1"];
      this.$nextTick(function() {
        this.$refs.leftMenu.updateOpened();
        this.$refs.leftMenu.updateActiveName();
      })
    },
    getMenuData(){
      this.$axios.get("/api/menu")
      .then((res)=>{
        if(res.data.code == 200){
          this.menuLists = res.data.data;
          console.log(this.menuLists);
         // var t = setTimeout(()=>{
            this.setMenu();
          //},1000)
        }
      })
      .catch((err)=>{
        console.log("错误"+err);
      })
    }
  }
}
</script>

