<template>
    <div id="videos">
        <h1 class="page-title">r/Videos</h1>
        <Sorter :posts="getVideosPosts"/>
        <b-loading v-model="getLoadingVideos" :can-cancel="false"></b-loading>
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
        ...mapActions('posts', ['getVideos'])
    },
    mounted() {
        console.log("test");
        this.getVideos();
    },
    computed: {
        ...mapGetters('posts', ['getVideosPosts', 'getLoadingVideos'])
    }
}
</script>

<style lang="scss">

</style>