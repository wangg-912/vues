<template>
    <div id="app">
        <div class="tabs">
        <ul>
            <router-link :to="{ name : 'Home'}" tag="li" exact>
                <span>首页</span>
            </router-link>
            <router-link :to="{ name: 'HelloWorld' }" tag="li">
                <span>分类</span>
            </router-link>
        </ul>
    </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

