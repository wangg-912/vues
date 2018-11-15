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
      this.openNames = ['1'];
      this.$nextTick(()=>{
          this.$refs.menuss.updateOpened();
          this.$refs.menuss.updateActiveName()
      })

  },
}
</script>

