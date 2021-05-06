<template>
    <div id="search" @keypress.enter="getSearchBar(searchValue)">
        <div class="search-bar-container">
            <input placeholder="Search for a subreddit" class="search-bar" v-model="searchValue">
            <button class="search-button" @click="getSearchBar(searchValue)"><b-icon icon="magnify" size="is-medium"></b-icon></button>
        </div>
        <b-loading v-model="getLoadingSearch" :can-cancel="false"></b-loading>
        <p class="search-error" v-if="getSearchPosts === null">Nothing found</p>
        <Sorter v-else :posts="getSearchPosts" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Sorter from '../components/Sorter'

export default {
    components: {
        Sorter
    },
    data() {
        return {
            searchValue: ""
        }
    },
    methods: {
        ...mapActions('posts', ['getSearchBar', 'clearSearchBar'])
    },
    computed: {
        ...mapGetters('posts', ['getSearchPosts', 'getLoadingSearch'])
    },
    mounted() {
        this.clearSearchBar();
    }
}
</script>

<style lang="scss">
.search-bar-container {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 35px; 

    .search-bar {
        display: flex;
        width: 40%;
        border: 1px solid gray;
        border-radius: 10px;
        margin-right: 5px;
    }

    .search-button {
        background-color: transparent;
        border: 0;
        border-radius: 10px;
        transition: 0.5s all;
    }

    .search-button:hover {
        background-color: darken(#fff, 20%);
    }

}

.search-error {
    text-align: center;
    font-size: 2.5rem;
}

@media screen and (max-width: 450px) {
    .search-bar-container {
        .search-bar {
            width: 60%;
        }
    }
}
</style>