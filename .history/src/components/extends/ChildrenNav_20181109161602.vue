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
    chilidrenKey:Number,
    len:Number
  },
  data(){
    return{
        count:1
    }
  },
   mounted(){
     debugger;
     if(this.count === this.len){
       this.$emit('openMenu', ['1'])
     }
     this.count ++;
  },
}
</script>

