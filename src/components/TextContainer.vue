<template>
    <div class = "text-container">
        <p v-html="text"></p>
    </div>
</template>

<script>
export default {
    props: ['text']
}
</script>

<style lang="scss" scoped>
.text-container {
    p {
        font-size: 0.9rem;
    }
}
</style>