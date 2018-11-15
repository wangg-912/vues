<template>
<div>
  <div v-for="(menu, key) in lists">
    <Submenu v-if="menu.children.length" :id="menu.id" :name="parentKey+'-'+menu.sort">
        <template slot="title">
            <Icon :type="menu.iconCls" />
            {{menu.text}}
        </template>
        <ChildrenNav :childrenNav="menu.children" :childrenKey="menu.sort"></ChildrenNav>
      </Submenu>
      <MenuItem v-else :id="menu.id" :name="parentKey+'-'+menu.sort"> <Icon :type="menu.iconCls" />{{menu.text}}</MenuItem>
  </div>

</div>

</template>
<script>
import ChildrenNav from "./ChildrenNav"
export default {
  props: {
    lists: Array,
    parentKey:Number
  },
  data() {
    return {

    };
  },
  components:{
    ChildrenNav
  },
  created(){
  },
  computed: {

  }
};
</script>

