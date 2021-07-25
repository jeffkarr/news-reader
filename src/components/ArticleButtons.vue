<template>
    <div class="btnPosition text-center">
        <b-col> 
            <b-button ref="prevArtBtn" size="lg" @click="emitPrevArticleReq()"><small>Previous Article</small></b-button>
        </b-col>
        <b-col class="mt-5"> 
            <b-button ref="nextArtBtn" size="lg" @click="emitNextArticleReq()"><small>Next Article</small></b-button>
        </b-col>
    </div>
</template>


<script>
    export default {
            name: "ArticleButtons",
            props: {
        },
        data() {
            return {};
        },
        methods: {
            emitPrevArticleReq() {
                this.$refs.prevArtBtn.blur();
                this.$emit("prevArticleReq");
            },
            emitNextArticleReq() {
                this.$refs.nextArtBtn.blur();
                this.$emit("nextArticleReq");
            }
        }
    };
</script>

<style scoped>
    .btnPosition {
        margin-top: 35vh;
    }
    .btn {
        width: 65%;
        background-color: #66ffff;
        color: black;
        box-shadow: 3px 3px 3px black;
    }
    /* .btn-secondary:focus {
        background-color: #66ffff;
    } */
</style>
