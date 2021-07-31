<template>
  <b-container style="height:88vh;">
    <Animated enter="zoomIn" leave="zoomOut">
        <h4 v-if="showMinArticles" class="text-white">This is the first article in this category.</h4>
    </Animated>
    <Animated enter="zoomIn" leave="zoomOut">
        <h4 v-if="showMaxArticles" class="text-white">You have reached the last article in this category.</h4>
    </Animated>
    <Animated enter="zoomIn" leave="zoomOut">
        <b-card
            v-if="(transitionObj.hideOldArticle ===false  && transitionObj.showNextArticle===true)"
            :title="article.title"
            :img-src="checkImgAvailable"
            img-top
            class="my-2 ml-2 border-light"
            :class="cardClass"
            :article="article"
        >
            <b-card-text>{{article.description}}</b-card-text>
            <b-button @click="goToArticleUrl(article.url)" variant="primary">Read More</b-button>
        </b-card>
    </Animated>
    <Animated enter="zoomIn" leave="zoomOut">
        <b-card
            v-if="(transitionObj.hideOldArticle ===false  && transitionObj.showPrevArticle===true)"
            :title="article.title"
            :img-src="checkImgAvailable"
            img-top
            class="my-2 ml-2 border-light"
            :class="cardClass"
            :article="article"
        >
            <b-card-text>{{article.description}}</b-card-text>
            <b-button @click="goToArticleUrl(article.url)" variant="primary">Read More</b-button>
        </b-card>
    </Animated>
  </b-container>
</template>

<script>

export default {
    name: "MainContent",
    components: {},
    props: {
        article: Object,
        transitionObj: Object,
        showMinArticles: Boolean,
        showMaxArticles: Boolean
    },
    data() {
        return {
            cardClass: null,
            notFoundArr: [
                `${require('../assets/images/imgNotFoundGarage.png')}`,
                `${require('../assets/images/sunset_photo_not_found.png')}`,
                `${require('../assets/images/old_wooden_sign_image_not_found.jpg')}`,
                `${require('../assets/images/black_pic_frame_img_not_found.jpg')}`
            ]
        };
    },
    async created() {},
    beforeUpdate() {},
    computed: {
        checkImgAvailable: function() {
            if ( 
                !this.article.image ||
                (this.article.image && this.article.image == "null") || 
                (this.article.image && this.article.image =="")
            ) {
                let notFoundImgPath = this.getNotFoundImage();
                return notFoundImgPath;
            } else {
                return this.article.image;
            } 
        }
    },
    methods: {
        goToArticleUrl(url) {
            window.open(url, "_blank");
        },
        getNotFoundImage: function () {
            let randomNumber = Math.floor(Math.random() * 4);
            return this.notFoundArr[randomNumber];
        }
    }
};
</script>

<style scoped>
    a {
        color: #00ffff;
    }
    .card {
        background-color: #66ffff;
        max-width: auto;
        max-height: 85vh;
        color: black;
        box-shadow: 5px 5px 5px black;
    }
    img.card-img-top {
        height: 60vh;
    }
    .fadeOut {
        opacity: 0;
        transition: opacity 0.65s linear;
        -moz-transition: opacity 0.65s linear;
        -webkit-transition: opacity 0.65s linear;
    }
    .fadeIn {
        opacity: 1;
        transition: opacity 0.85s linear;
        -moz-transition: opacity 0.85s linear;
        -webkit-transition: opacity 0.85s linear;
    }
    #overlay {
        position: fixed;
        display: none;
        max-width: auto;
        max-height: 85vh;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        z-index: 2;
    }

</style>

