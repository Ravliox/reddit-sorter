<template>
    <div id="sorter">
        <div class="post" v-for="(post, index) in posts" :key="index">
            <HeaderComponent :post="post" />
            <div class="content" v-if="post.expanded">
                <div v-if="post.media_embed" v-html="post.media_embed.content"></div>
                <TextContainer v-if="post.is_self" :text="post.selftext_html"/>
                <VideoContainer v-if="post.is_video" :url="post.media.reddit_video.fallback_url" />
                <img v-if="post.url.split('.jpg').length === 2 || 
                    post.url.split('.png').length === 2 ||
                    post.url.split('.gif').length === 2"
                    :src="post.url">
                <a :href="post.url" v-if="
                    !post.media_embed &&
                    !post.is_self && 
                    !post.is_video && 
                    !(post.url.split('.jpg').length === 2) &&
                    !(post.url.split('.png').length === 2) &&
                    !(post.url.split('.gif').length === 2)">{{post.url}}</a>
            </div> 
        </div>
   
    </div>
</template>

<script>
import TextContainer from './TextContainer'
import VideoContainer from './VideoContainer'
import HeaderComponent from './HeaderComponent'

export default {
    props: ['posts'],
    components: {
        TextContainer,
        VideoContainer,
        HeaderComponent
    },
    data() {
       return {
       } 
    }
}
</script>

<style lang="scss">
.post:not(:last-child) {
    margin-bottom: 20px;
    border-bottom: 1px solid gray;
}

.content {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;

    iframe {
        width: 900px;
        height: 506px;
    }

    img {
        height: 500px;
    }
}

@media screen and (max-width: 450px) {
.content {
    iframe {
        width: 100vw;
        height: 285px;
    }

    img {
        height: auto;
        width: 100vw;
    }
}
}
</style>