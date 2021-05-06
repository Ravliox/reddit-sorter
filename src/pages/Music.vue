<template>
    <div id="music">
        <h1 class = "page-title">r/Music</h1>
        <Sorter :posts="getMusicPosts"/>
        <b-loading v-model="getLoadingMusic" :can-cancel="false"></b-loading>
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

       } 
    },
    methods: {
        ...mapActions('posts', ['getMusic'])
    },
    mounted() {
        console.log("test");
        this.getMusic();
    },
    computed: {
        ...mapGetters('posts', ['getMusicPosts', 'getLoadingMusic'])
    }
}
</script>

<style lang="scss">

</style>