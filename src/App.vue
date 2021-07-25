<template>
    <div id="app">
    <NavBar @sidebarRequest="handleSidebarRequest" :category="category" :articleNbr="articleNbr" :articlesMaxCnt="articlesMaxCnt"/>
    <b-container fluid style="height:90vh"> 
        <b-row class="mt-3">
            <b-col cols="2">
                <SBar2 @selectedCatEmitted="setCategory" :newsCategories="newsCategories" :showSidebar="showSidebar"/> 
            </b-col>
            <b-col cols="8">
                <MainContent :article="article" :transitionObj="transitionObj" :showMinArticles="showMinArticles" :showMaxArticles="showMaxArticles"/>
            </b-col>
            <b-col cols="2">
                <ArticleButtons v-if="articles.length > 0" @prevArticleReq="loadPrevArticle" @nextArticleReq="loadNextArticle" />
            </b-col>
        </b-row>
    </b-container> 
    </div>
</template>

<script>
    import NavBar from './components/NavBar.vue';
    import MainContent from './components/MainContent.vue';
    import SBar2 from './components/SBar2.vue';
    import ArticleButtons from './components/ArticleButtons.vue';

    export default {
        name: 'App',
        components: {
            NavBar,
            MainContent,
            SBar2,
            ArticleButtons
        },
        data() {
            return {
                showSidebar: false, 
                category: 'General',
                newsCategories: [
                    'General',
                    'Business',
                    'Entertainment',
                    'Health',
                    'Science',
                    'Sports',
                    'Technology'
                ],
                articles: [],
                article: {},
                articleIdx: 0,
                articleNbr: 1,
                articlesMaxCnt: 0,
                errors: [],
                transitionObj: {
                    hideOldArticle: null, 
                    showNextArticle: null,
                    showPrevArticle: null
                },
                showMinArticles: false,
                showMaxArticles: false
            }
        },
        async created () {
            console.log('Inside created function of App.vue');
            let self = this;
            fetch('/api/getArticles')
            .then(resp => resp.json())
            .then(data => {
                self.articles = data.data;
                self.articlesMaxCnt = data.pagination.count;
                self.loadFirstArticle();
            });

        },
        mounted () {},
        methods: {
            async setCategory(catSelected) {
                this.category = catSelected;
                this.showSidebar = false; 
                this.getArticlesByCategory(this.category);
                this.articleIdx = 0;
                this.articleNbr = 1;
            }, 
            handleSidebarRequest(request) {
                this.showSidebar = request;
            },
            getArticlesByCategory(catSelected) {
                let self = this;
                fetch(`/api/getArticlesByCategory/${catSelected.toLowerCase()}`)
                .then(resp => resp.json())
                .then(data => {
                self.articles = data.data;
                self.articlesMaxCnt = data.pagination.count
                self.loadFirstArticle();
                });
            },
            loadFirstArticle() {
                this.articleIdx = 0;
                this.articleNbr = (this.articleIdx + 1);
                this.article = this.articles[this.articleIdx]; 
                this.transitionObj.hideOldArticle = true;  
                this.transitionObj.showPrevArticle = false;
                this.transitionObj.showNextArticle = false;
                setTimeout(() => {
                    this.transitionObj.hideOldArticle = false;
                    this.transitionObj.showPrevArticle = true;  
                    this.transitionObj.showNextArticle = false;
                }, 1000); 
            }, 
            loadPrevArticle() {
                if (this.articleIdx === 0) {
                    console.log('min articles reached')
                    this.showMinArticles = true;
                    setTimeout(() => {
                        this.showMinArticles = false;
                    }, 5000);

                } else {
                    this.articleIdx -= 1;
                    this.articleNbr = (this.articleIdx + 1);
                    this.article = this.articles[this.articleIdx]; 
                    this.transitionObj.hideOldArticle = true;  
                    this.transitionObj.showPrevArticle = false;
                    this.transitionObj.showNextArticle = false;
                    setTimeout(() => {
                        this.transitionObj.hideOldArticle = false;
                        this.transitionObj.showPrevArticle = true;  
                        this.transitionObj.showNextArticle = false;
                    }, 1000); 
                }
            }, 
            loadNextArticle() {
                if (this.articleIdx + 1 === this.articlesMaxCnt) {
                    console.log('max articles reached')
                    this.showMaxArticles = true;
                    setTimeout(() => {
                        this.showMaxArticles = false;
                    }, 5000);
                } else {
                    this.transitionObj.hideOldArticle = true;  
                    this.transitionObj.showNextArticle = false;
                    this.transitionObj.showPrevArticle = false;
                    setTimeout(() => {
                        this.articleIdx += 1;
                        this.articleNbr = (this.articleIdx + 1);
                        this.article = this.articles[this.articleIdx]; 
                        this.transitionObj.hideOldArticle = false;
                        this.transitionObj.showPrevArticle = false;  
                        this.transitionObj.showNextArticle = true;
                    }, 1000); 
                }
            }
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
