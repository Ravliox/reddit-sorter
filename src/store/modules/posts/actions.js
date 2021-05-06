import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

export default {
    getSearchBar(context, name) {
        context.commit("loadSearch");
        Vue.http.get(`https://www.reddit.com/r/${name}.json?raw_json=1`).then(response => {
            context.commit('setSearchList', response.data.data.children);
        }, error => {
            context.commit('nullSearch');
        })
    },
    clearSearchBar(context) {
        context.commit("clearSearch");
    },
    getAll(context) {
        context.commit("loadAllPosts");
        Vue.http.get(`https://www.reddit.com/r/all.json?raw_json=1`).then(response => {
            context.commit("setAllPosts", response.data.data.children);
        })
    },
    getNoSleep(context) {
        context.commit("loadNoSleepPosts");
        Vue.http.get(`https://www.reddit.com/r/nosleep.json?raw_json=1`).then(response => {
            context.commit("setNoSleepPosts", response.data.data.children);
        })
    },
    getMusic(context) {
        context.commit("loadMusicPosts");
        Vue.http.get(`https://www.reddit.com/r/music.json?raw_json=1`).then(response => {
            context.commit("setMusicPosts", response.data.data.children);
        })
    },
    getVideos(context) {
        context.commit("loadVideosPosts");
        Vue.http.get(`https://www.reddit.com/r/videos.json?raw_json=1`).then(response => {
            context.commit("setVideosPosts", response.data.data.children);
        })
    },
    getBadUiBattles(context) {
        context.commit("loadBadUiBattlesPosts");
        Vue.http.get(`https://www.reddit.com/r/badUiBattles.json?raw_json=1`).then(response => {
            context.commit("setBadUiBattlesPosts", response.data.data.children);
        })
    }
}