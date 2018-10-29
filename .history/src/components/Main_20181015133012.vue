<style scoped>
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
    <div class="layout">
        <Layout style="{height:100%}" value=true>
            <menu-header></menu-header>
            <Layout class="ivu-layout-has-sider">
                <nav-menu></nav-menu>
                <Layout :style="{padding: '0 4px 4px'}">
                    <Content :style="{padding: '8px', minHeight: '280px', background: '#fff'}">
                        Content
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script>
import MenuHeader from './extends/MenuHeader';
import NavMenu from './extends/Nav'
export default {
  components: {MenuHeader, NavMenu},
};
</script>

