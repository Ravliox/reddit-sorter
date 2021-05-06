<template>
    <div id="bad-ui-battles">
        <h1 class="page-title">r/BadUiBattles</h1>
        <Sorter :posts="getBadUiBattlesPosts"/>
        <b-loading v-model="getLoadingBadUiBattles" :can-cancel="false"></b-loading>
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
        ...mapActions('posts', ['getBadUiBattles'])
    },
    mounted() {
        console.log("test");
        this.getBadUiBattles();
    },
    computed: {
        ...mapGetters('posts', ['getBadUiBattlesPosts', 'getLoadingBadUiBattles'])
    }
}
</script>

<style lang="scss">

</style>