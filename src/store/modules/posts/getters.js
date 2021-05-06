export default {
    getSearchPosts: (state) => {
        return state.searchList;
    },
    getLoadingSearch: (state) => {
        return state.loadingSearch;
    },
    getAllPosts: (state) => {
        console.log(state.all);
        return state.all;
    },
    getLoadingAll: (state) => {
        return state.loadingAll;
    },
    getMusicPosts: (state) => {
        return state.music;
    },
    getLoadingMusic: (state) => {
        return state.loadingMusic;
    },
    getVideosPosts: (state) => {
        return state.videos;
    },
    getLoadingVideos: (state) => {
        return state.loadingVideos;
    },
    getNoSleepPosts: (state) => {
        return state.noSleep;
    },
    getLoadingNoSleep: (state) => {
        return state.loadingNoSleep;
    },
    getBadUiBattlesPosts: (state) => {
        return state.badUiBattles;
    },
    getLoadingBadUiBattles: (state) => {
        return state.loadingBadUiBattles;
    }
}