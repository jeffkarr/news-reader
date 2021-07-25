<template>
    <b-navbar type="dark" fixed="top" sticky>
        <b-navbar-nav>
            <b-icon toggleable icon="layout-text-sidebar" font-scale="2" style="color:#66ffff;margin-left:20px;" @click="toggleSidebar"></b-icon>
            <b-navbar-brand style="color:#66ffff;margin-left:20px;font-style:italic;"> Here's the Latest {{category}} News</b-navbar-brand>
        </b-navbar-nav>
        <b-navbar-nav class="justify-content-center">
            <b-nav-text class="text-left">Article {{articleNbr}} of {{articlesMaxCnt}}</b-nav-text>
        </b-navbar-nav>
        <b-navbar-nav></b-navbar-nav>
    </b-navbar>
</template>

<script>
export default {
    props: {
        category: String,
        articleNbr: Number,
        articlesMaxCnt: Number
    },
    data() {
        return {
            showSidebar: false
        }
    },
    methods: {
        toggleSidebar() {
            if (this.showSidebar) {
                this.showSidebar = false;
            } else {
                this.showSidebar = true;
            }
            this.$emit('sidebarRequest', this.showSidebar);
        }  
    }
};
</script>

<style scoped>
    .navbar {
        justify-content: left;
        background-color: #000;
        height: 80px;
    };
    .navbar-brand, .navbar-text {
        font-style: italic;
        color: #66ffff !important;
    }
    .navbar-nav .navbar-text {
        font-size: 1.25rem;
        color: #66ffff !important;
    }
    .navbar-nav {
        width:33%;
        height: auto;
    }
</style>