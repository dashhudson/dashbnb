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
  display: flex;
  flex-grow: 1;
  border-radius: 0.25rem;
  padding: 1.375rem 0 1.25rem 0;
  align-items: center;
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

.item-details:nth-child(odd) {
  background-color: #f8f8f8;
}
</style>
