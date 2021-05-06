<template>
    <div class="header-component" @click="post.expanded = !post.expanded">
        <div class="rating">
            <b-icon icon="arrow-up-bold" size="is-large" type="is-success"></b-icon>
            <p class="ups"> {{ post.ups }} </p>     
        </div>
        <div class = "title-author">
            <h1 class="post-title">{{ post.title }}</h1>
            <p class="post-author">u/{{ post.author }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['post'],
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.header-component {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    transition: 0.5s all;

    .title-author {
        display: flex;
        flex-direction: column;
        width: 80%;
    }

    .post-title {
        font-size: 1.3rem;
        width: 100%;
    }

    .rating {
        display: flex;
        flex-direction: column;
        margin-right: 15px;

        .ups {
            text-align: center;
            font-size: 1rem;
        }
    }

    &:hover {
        background-color: darken(#fff, 10%);
        cursor: pointer;
    }
}

@media screen and (max-width: 450px) {
    .header-component {
        .post-title {
            font-size: 1rem;
        }

        .post-author {
            font-size: 0.8rem;
        }

        .rating {
            .ups {
                font-size: 0.7rem;
            }
        }
    }
}
</style>