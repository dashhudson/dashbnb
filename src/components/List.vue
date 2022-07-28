<template>
    <div class="list-container">
        <template v-if="hasItems">
            <template v-for="(item, index) in items">
                <Card :key="`item-${index}`">
                    <div class="main-content-panel">
                        <slot :item="item" />
                    </div>

                    <div v-if="$slots['action-content']" class="action-panel">
                        <slot name="action-content" :item="item" />
                    </div>
                </Card>
            </template>
        </template>
        <template v-else>
            <div class="d-flex align-center justify-center">
                <div>{{ emptyMessage }}</div>
            </div>
        </template>
    </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'List',
  components: {
    Card,
  },
  props: {
    /**
     * items to display in the list
     */
    items: {
      type: Array,
      default: null,
    },
    emptyMessage: {
        type: String,
        default: 'No Items',
    },
  },
  computed: {
    hasItems() {
        return Array.isArray(this.items) && this.items?.length > 0;
    },
  }
};
</script>

<style lang="scss" scoped>
.list-container {
  overflow: auto;
}

.main-content-panel {
  width: 100%;
}

.action-panel {
  margin-left: auto;
  margin-right: 1.5rem;
  display: flex;
  flex-direction: row;
}

</style>
