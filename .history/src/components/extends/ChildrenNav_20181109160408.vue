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

    }
  },
   mounted(){
     debugger;
      this.$parent.$parent.openNames = ['1'];
      this.$parent.$parent.$nextTick(()=>{
          this.$parent.$parent.$refs.menuss.updateOpened();
          this.$parent.$parent.$refs.menuss.updateActiveName()
      })


  },
}
</script>

