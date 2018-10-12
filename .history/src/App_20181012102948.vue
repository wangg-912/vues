<template>
    <div id="app">
        <div class="tabs">
        <ul>
            <router-link :to="{ name : 'Home'}" tag="li" exact>
                <div>首页</div>
            </router-link>
            <router-link :to="{ name: 'Categories' }" tag="li">
                <div>分类</div>
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

