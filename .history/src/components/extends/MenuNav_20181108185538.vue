<template>
<div>
  <div v-for="(menu, key) in lists">
    <Submenu v-if="menu.children.length" :id="menu.id" :name="parentKey+'-'+menu.sort">
        <template slot="title">
            <Icon type="ios-filing" />
            {{menu.text}}
        </template>
        <div v-for="cmenu in menu">
          <MenuItem :id="cmenu.id" :name="menu.sort+'-'+cmenu.sort">
            <Icon type="ios-filing" />
            {{cmenu.text}}
          </MenuItem>
        </div>

        <!-- <Submenu name="3">
            <template slot="title">Submenu</template>
            <MenuItem name="3-1">Option 7</MenuItem>
            <MenuItem name="3-2">Option 8</MenuItem>
        </Submenu> -->
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
      lists:this.lists,
      parentKey:this.parentKey
    };
  },
  created(){
  },
  computed: {

  }
};
</script>

