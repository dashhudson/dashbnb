<template>
  <div class="listing-item">
    <div>
      <img v-if="imageUrl" :src="imageUrl" />
    </div>
    <div class="listing-item-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.listing-item {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 208px;

  img {
    object-fit: cover;
    width: 300px;
    height: 100%;
    margin-right: 12px;
  }

  .listing-item-content {
    width: 100%;
  }
}
</style>
