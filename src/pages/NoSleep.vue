<template>
    <div id="no-sleep">
        <h1 class="page-title">r/NoSleep</h1>
        <Sorter :posts="getNoSleepPosts"/>
        <b-loading v-model="getLoadingNoSleep" :can-cancel="false"></b-loading>
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
        ...mapActions('posts', ['getNoSleep'])
    },
    mounted() {
        console.log("test");
        this.getNoSleep();
    },
    computed: {
        ...mapGetters('posts', ['getNoSleepPosts', 'getLoadingNoSleep'])
    }
}
</script>

<style lang="scss">

</style>