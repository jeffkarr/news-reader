<template>
<div>
    <slot>
        <Animated enter="slideInLeft" leave="slideOutLeft">
            <b-col v-if="showSidebar" class="sidebar slideRight">
                <div class="sidebar-panel">
                    <b-list-group>
                        <b-list-group-item
                            v-for="category in newsCategories"
                            :key="category"
                            style="color:black"
                            @click="selectCategory(category)"
                            button>
                            <b-row>
                                <b-col cols="12" class="pt-1 text-left">
                                    <p class="my-0">{{category}}</p>
                                </b-col>
                            </b-row>
                        </b-list-group-item>
                    </b-list-group>
                </div>
            </b-col>
        </Animated>
    </slot>
</div>
</template>

<script>
export default {
    name: "SBar2",
    props: {
        newsCategories: {
            type: Array,
            required: true
        },
        showSidebar: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            open: true
        };
    },
    methods: {
        selectCategory(catSelected) {
            this.$emit("selectCategory", catSelected);
        }
    }
};
</script>

<style scoped>
    .sidebar {
        padding: 2px 3px 2px 3px;
        background-color: #226666;
        width: 320px;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        cursor: pointer;
    }
    .sidebar-panel {
        overflow-y: auto;
        margin-top: 4rem;
        background-color: #000;
        position: fixed;
        left: 0px;
        top: 0px;
        height: 100vh;
        z-index: 999;
        padding: 1rem;
        width: 320px;
        border-radius: 6px;
    }
    .list-group-item {  
        background-color: #66ffff;    
    }
    ::-webkit-scrollbar {
        width: 10px;
        margin-top: 60px;
        background-color: #226666;
    }
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #f5f5f5;
        border-radius: 10px;
        margin-top: 15px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-image: -webkit-gradient(
        linear,
        left bottom,
        left top,
        color-stop(0.44, rgb(122, 153, 217)),
        color-stop(0.72, rgb(73, 125, 189)),
        color-stop(0.86, rgb(28, 58, 148))
        );
    }
</style>
