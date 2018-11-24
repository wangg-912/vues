<style>
.ivu-layout{
  height: inherit
}
.ivu-menu.ivu-menu-vertical{
  height: 100%;
}
</style>

<template>
  <Row>
    <Menu ref="leftMenu" :theme="theme2" active-name="1-2" :open-names="open" >
        <Submenu v-for="(menu,index) in menuLists" :key="index" :id="menu.id" :name = "menu.sort">
          <template slot="title">
                <Icon :type="menu.iconCls" />
                {{menu.text}}
            </template>
            <template>
            <div v-if="menu.children.length" v-for="(cmenu, ci) in menu.children" :key="ci" :id="cmenu.id">
                <Submenu :name = "cmenu.sort">
                  <template slot="title">
                    <Icon :type="cmenu.iconCls" />
                  {{cmenu.text}}
                  </template>
                  <Submenu  v-if="cmenu.children.length" v-for="(smenu, si) in cmenu.children" :key="si" :id="smenu.id" :name = "smenu.sort">
                        <template slot="title">
                          <Icon :type="smenu.iconCls" />
                        {{smenu.text}}
                        </template>
                        <MenuItem :id="smenu.id" :name = "smenu.sort">
                          <Icon :type="smenu.iconCls" />
                          {{smenu.text}}
                      </MenuItem>
                  </Submenu>
                  <MenuItem v-else :id="cmenu.id" :name = "cmenu.sort">
                      <Icon :type="cmenu.iconCls" />
                      {{cmenu.text}}
                  </MenuItem>
                </Submenu>
                <MenuItem v-else :id="menu.id" :name = "menu.sort">
                    <Icon :type="menu.iconCls" />
                    {{menu.text}}
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

