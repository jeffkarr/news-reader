<template>
    <div id="app">
    <NavBar :category="category" @sidebarRequest="handleSidebarRequest" :articleNbrStr="articleNbrStr" :articlesMaxCnt="articlesMaxCnt"/>
    <b-container fluid style="height:90vh"> 
        <b-row class="mt-3">
            <b-col cols="2">
                <SBar2 :newsCategories="newsCategories" @selectCategory="setCategory" :showSidebar="showSidebar"/> 
            </b-col>
        </b-row>
    </b-container> 
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
// import MainContent from './components/MainContent.vue';
import SBar2 from './components/SBar2.vue';
// import ArticleButtons from './components/ArticleButtons.vue';

// import apiService from './apiService.js';

export default {
    name: 'App',
    components: {
        NavBar,
        // MainContent,
        SBar2
        // ArticleButtons
    },
    data() {
        return {
            drawer: false,
            showSidebar: false, 
            articles: [],
            // article: {},
            // articleIdx: 0,
            articleNbrStr: '1',
            articlesMaxCnt: '25',
            newsCategories: [
                'General',
                'Business',
                'Entertainment',
                'Health',
                'Science',
                'Sports',
                'Technology'
            ],
            category: '',
            // errors: [],
            // transitionObj: {
            //   hideOldArticle: null, 
            //   showNextArticle: null,
            //   showPrevArticle: null
            // },
            showMaxArticles: false,
            showMinArticles: false
        }
    },
    async created () {
        console.log('Inside created function of App.vue');

        // let self = this;
        // fetch('/api/getArticles')
        // .then(resp => resp.json())
        // .then(data => {
        //   console.log(data.data)
        //   self.articles = data.data;
        //   self.articlesMaxCnt = data.pagination.count
        // });

        // try {
        //   this.articles = await apiService.getNewArticles();
        //   this.article = this.articles[this.articleIdx];
        // } catch(err) {
        //   console.error(err);
        // }
        // this.transitionObj.hideOldArticle = false;
        // this.transitionObj.showNextArticle = true;

    },
    mounted () {},
    methods: {
        async setCategory(catSelected) {
        // this.articles = await apiService.getArticlesForSrc(srcObj.id);
        this.category = catSelected;
        this.showSidebar = false; 
        this.articleIdx = 0;
        this.articleNbrStr = '1';
        // this.loadFirstArticle();
        }, 
        handleSidebarRequest(request) {
        this.showSidebar = request;
        },
        // loadFirstArticle() {
        //     this.articleIdx = 0;
        //     this.articleNbrStr = (this.articleIdx + 1).toString();
        //     this.article = this.articles[this.articleIdx]; 
        //     this.transitionObj.hideOldArticle = true;  
        //     this.transitionObj.showPrevArticle = false;
        //     this.transitionObj.showNextArticle = false;
        //     setTimeout(() => {
        //         this.transitionObj.hideOldArticle = false;
        //         this.transitionObj.showPrevArticle = true;  
        //         this.transitionObj.showNextArticle = false;
        //     }, 1000); 
        // }, 
        // loadPrevArticle() {
        //     if (this.articleIdx === 0) {
        //         console.log('min articles reached')
        //         this.showMinArticles = true;
        //     } else {
        //         this.articleIdx -= 1;
        //         this.articleNbrStr = (this.articleIdx + 1).toString();
        //         this.article = this.articles[this.articleIdx]; 
        //         this.transitionObj.hideOldArticle = true;  
        //         this.transitionObj.showPrevArticle = false;
        //         this.transitionObj.showNextArticle = false;
        //         setTimeout(() => {
        //             this.transitionObj.hideOldArticle = false;
        //             this.transitionObj.showPrevArticle = true;  
        //             this.transitionObj.showNextArticle = false;
        //         }, 1000); 
        //     }
        // }, 
        // loadNextArticle() {
        //     if (this.articleIdx === this.articles.length) {
        //         console.log('max articles reached')
        //         this.showMaxArticles = true;
        //     } else {
        //         this.transitionObj.hideOldArticle = true;  
        //         this.transitionObj.showNextArticle = false;
        //         this.transitionObj.showPrevArticle = false;
        //         setTimeout(() => {
        //             this.articleIdx += 1;
        //             this.articleNbrStr = (this.articleIdx + 1).toString();
        //             this.article = this.articles[this.articleIdx]; 
        //             this.transitionObj.hideOldArticle = false;
        //             this.transitionObj.showPrevArticle = false;  
        //             this.transitionObj.showNextArticle = true;
        //         }, 1000); 
        //     }
        // }
    }
}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        background-color: #226666;
    }
</style>
