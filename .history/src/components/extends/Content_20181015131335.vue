<style>
  .layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: inherit;
}
</style>
<template>
  <Layout :style="{padding: '0 4px 4px'}" class="content">
      <Content :style="{padding: '8px', minHeight: '280px', background: '#fff'}">
          Content
      </Content>
  </Layout>
</template>
<script>
export default {

}
</script>

