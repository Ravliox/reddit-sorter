export default {
    setSearchList: (state, data) => {
        state.searchList = extractPosts(data);
        state.loadingSearch = false;
    },
    loadSearch: (state) => {
        state.loadingSearch = true;
    },
    clearSearch: (state) => {
        state.searchList = [];
    },
    nullSearch: (state) => {
        state.searchList = null;
        state.loadingSearch = false;
    },
    setAllPosts: (state, data) => {
        state.all = extractPosts(data);
        state.loadingAll = false;
    },
    loadAllPosts: (state) => {
        state.loadingAll = true;
    },
    setMusicPosts: (state, data) => {
        state.music =  extractPosts(data);
        state.loadingMusic = false;
    },
    loadMusicPosts: (state) => {
        state.loadingMusic = true;
    },
    setVideosPosts: (state, data) => {
        state.videos = extractPosts(data);
        state.loadingVideos = false;
    },
    loadVideosPosts: (state) => {
        state.loadingVideos = true;
    },
    setNoSleepPosts: (state, data) => {
        state.noSleep = extractPosts(data);
        state.loadingNoSleep = false;
    },
    loadNoSleepPosts: (state) => {
        state.loadingNoSleep = true;
    },
    setBadUiBattlesPosts: (state, data) => {
        state.badUiBattles = extractPosts(data);
        state.loadingBadUiBattles = false;
    },
    loadBadUiBattlesPosts: (state) => {
        state.loadingBadUiBattles = true;
    }
}

function extractPosts(postLists) {
    return postLists.slice(0, 10).map(obj => obj.data).sort((post1, post2) => post2.ups - post1.ups).map(obj => ({...obj, expanded: false}));
}