<template>
<div>
    <slot>
        <Animated enter="slideInLeft" leave="slideOutLeft">
            <b-col v-if="showSidebar" class="sidebar slideRight">
                <div class="sidebar-panel">
                    <b-list-group>
                        <b-list-group-item
                            v-for="category in newsCategories"
                            :key="category" button @click="categorySelected(category)">
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
        showSidebar: {
            type: Boolean,
            required: true
        },
        newsCategories: {
            type: Array,
            required: true
        }
    },
    data() {
        return {}
    },
    methods: {
        categorySelected(selectedCat) {
            this.$emit("selectedCatEmitted", selectedCat);
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
</style>
