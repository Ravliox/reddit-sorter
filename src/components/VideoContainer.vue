<template>
    <div class ="video-container">
        <video :src="url" controls="true"></video>
    </div>
</template>

<script>
export default {
    props: ['url']
}
</script>

<style lang="scss" scoped>
.video-container {
    & > video {
        width: 900px;
        height: 506px;
    }
}
</style>