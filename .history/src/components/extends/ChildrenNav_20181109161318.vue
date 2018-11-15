<template>
  <div>
      <MenuItem v-for="child in childrenNav" :id="child.id" :name="chilidrenKey+'-'+child.sort">
      <Icon :type="child.iconCls" />
      {{child.text}}
      </MenuItem>
  </div>
</template>
<script>
export default {
  props:{
    childrenNav:Array,
    chilidrenKey:Number
  },
  data(){
    return{
        count:1
    }
  },
   mounted(){
     debugger;
     if(this.count === 1){
       this.$emit('openMenu', ['1'])
     }
  },
}
</script>

