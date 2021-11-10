<template>
    <div class="list-container">
        <template v-for="(item, index) in items">
            <div :key="`item-${index}`" class="item-details">
                <div class="main-content-panel">
                    <slot :item="item" />
                </div>

                <div class="action-panel">
                    <slot name="action-content" :item="item" />
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    /**
     * items to display in the list
     */
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.list-container {
  overflow: auto;
}

.item-details {
  background-color: $white;
  display: flex;
  flex-grow: 1;
  margin-bottom: 16px;
  border-radius: $round-corner-small;
  padding: 1.375rem 0 1.25rem 0;
  align-items: center;
  box-shadow: $shadow-card;
}

.main-content-panel {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  display: flex;
  flex-direction: row;
}

.action-panel {
  margin-left: auto;
  margin-right: 1.5rem;
  display: flex;
  flex-direction: row;
}

</style>
