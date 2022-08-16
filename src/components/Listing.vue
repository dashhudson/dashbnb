<template>
  <ListingItem :imageUrl="value.images[0].url">
    <div>
      <div class="address">
        {{ value.address.city }}, {{ value.address.state }}, {{ value.address.country }}
      </div>
      <div class="name">{{ value.name }}</div>
      <ListingSummary :value="value" />
    </div>
    <Rating class="listing-rating" :value="value.rating" />
    <div class="book-now-area d-flex flex-column align-end">
      <Price class="book-price" :value="value.price" />
      <Button @click.native="onBookNowClick(value)">BOOK NOW</Button>
    </div>
  </ListingItem>
</template>

<script>
import Rating from './Rating.vue';
import Price from './Price.vue';
import Button from './Button.vue';
import ListingItem from './ListingItem.vue';
import ListingSummary from './ListingSummary.vue';
import { mapMutations } from 'vuex';

export default {
  components: {
    ListingItem,
    Rating,
    Price,
    Button,
    ListingSummary,
  },
  props: {
    value: {
      type: Object,
      default: null,
    },
  },
  methods: {
    ...mapMutations(['updateCurrentListing']),
    onBookNowClick(listing) {
      this.updateCurrentListing(listing);
      this.$router.push({ name: 'BookListing' });
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 0px;
}

.name {
  font-size: 24px;
  color: $grey-text;
  padding-bottom: 8px;
}

.address {
  font-size: 16px;
  color: $grey-text;
  padding-bottom: 8px;
}

.listing-rating {
  position: absolute;
  top: 0;
  right: 0;
}
.book-now-area {
  position: absolute;
  bottom: 0;
  right: 0;

  .book-price {
    padding-bottom: 10px;
  }
}
</style>
