<template>
    <div class="listing-item">
        <div>
            <img :src="value.images[0].url" />
        </div>
        <div>
            <div><h2> {{ value.name }}</h2></div>
            <div>Property: {{ value.property_type }}</div>
            <div>Place: {{ value.place_type }}</div>
            <div>Occupancy: {{ value.occupancy }}</div>
        </div>
        <Rating class="listing-rating" :value="value.rating" />
        <div class="book-now-area d-flex flex-column align-end">
            <Price class="book-price" :value="value.price" />
            <Button>BOOK NOW</Button>
        </div>
    </div>
</template>

<script>
import Rating from './Rating.vue';
import Price from './Price.vue';
import Button from './Button.vue';

export default {
    components: {
        Rating,
        Price,
        Button,
    },
    props: {
        value: {
            type: Object,
            default: null,
        },
    },
}
</script>

<style lang="scss" scoped>
.listing-item {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;

  h2 {
    margin-top: 0px;
  }
  img {
    object-fit: cover;
    height: 150px;
    width: 150px;
    margin-right: 20px;
  }

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