<template>
<div>
  <div v-for="(menu, key) in lists">
    <Submenu v-if="menu.children.length" :id="menu.id" :name="parentKey+'-'+menu.sort" :children="menu.children" >
        <template slot="title">
            <Icon type="ios-filing" />
            {{menu.text}}
        </template>
        <!-- <div :childrens="menu" v-for="cmenu in childrens">
          <MenuItem :id="cmenu.id" :name="menu.sort+'-'+cmenu.sort">
            <Icon type="ios-filing" />
            {{cmenu.text}}
          </MenuItem>
        </div> -->
        <!-- <MenuItem name="3-1">Option 7</MenuItem>
            <MenuItem name="3-2">Option 8</MenuItem> -->
        <Submenu name="3">
            <template slot="title">Submenu</template>
            <MenuItem name="3-1">Option 7</MenuItem>
            <MenuItem name="3-2">Option 8</MenuItem>
        </Submenu>
      </Submenu>
      <MenuItem v-else :id="menu.id" :name="parentKey+'-'+menu.sort"> <Icon type="ios-filing" />{{menu.text}}</MenuItem>
  </div>

</div>

</template>
<script>
export default {
  props: {
    lists: Array,
    parentKey:Number
  },
  data() {
    return {

    };
  },
  created(){
  },
  computed: {

  }
};
</script>

