<template>
    <div id="all">
        <h1 class="page-title">r/All</h1>
        <Sorter :posts="getAllPosts"/>
        <b-loading v-model="getLoadingAll" :can-cancel="false"></b-loading>
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
        ...mapActions('posts', ['getAll'])
    },
    mounted() {
        console.log("test");
        this.getAll(false);
    },
    computed: {
        ...mapGetters('posts', ['getAllPosts', 'getLoadingAll'])
    }
}
</script>

<style lang="scss">

</style>