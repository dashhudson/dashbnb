<template>
    <div class="control-bar">
        <div class="control-bar-left">
            <div v-if="title" class="title">{{ title }}</div>
        </div>
        <div class="control-bar-right">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: null,
        },
    },
}
</script>

<style lang="scss" scoped>
.control-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;

    .title {
        font-size: 20pt;
        font-weight: normal;
        line-height: 1.25em;
    }
}
</style>