<template>
    <div id="app">
        <div class="tabs">
        <ul>
            <router-link :to="{ name : 'Login'}" tag="li" exact>
                <span>登陆</span>
            </router-link>
            <router-link :to="{ name: 'Main' }" tag="li">
                <span>主页</span>
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

