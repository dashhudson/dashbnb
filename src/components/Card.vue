<template>
  <div class="card-content">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card-content {
  background-color: $white;
  display: flex;
  flex-grow: 1;
  margin-bottom: 16px;
  border-radius: $round-corner-small;
  padding: 16px;
  align-items: center;
  box-shadow: $shadow-card;
}
</style>
