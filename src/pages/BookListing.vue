<template>
  <Card>
    <template v-if="currentListing">
      <div class="booklisting-content d-flex flex-column flex-grow">
        <div>
          <div class="name">{{ currentListing.name }}</div>
          <div class="d-flex flex-row align-center">
            <Rating :value="currentListing.rating" />
            <div class="address">
              {{ currentListing.address.city }}, {{ currentListing.address.state }},
              {{ currentListing.address.country }}
            </div>
          </div>
        </div>
        <div class="booklisting-cols d-flex flex-row flex-grow">
          <div class="listing">
            <img :src="currentListing.images[0].url" />
            <ListingSummary class="listing-summary" :value="currentListing" />
            <h3>About this space</h3>
            {{ currentListing.description }}
          </div>
          <div class="form">
            <BookingForm />
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="loading">Loading ...</template>
    <template v-else>Current Listing Not Found</template>
  </Card>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Card from '../components/Card.vue';
import Rating from '../components/Rating.vue';
import BookingForm from '../components/BookingForm.vue';
import ListingSummary from '../components/ListingSummary.vue';

export default {
  components: {
    BookingForm,
    Card,
    ListingSummary,
    Rating,
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapGetters(['currentListing']),
  },
  async created() {
    const id = this.$route.params.id;
    this.loading = true;
    try {
      this.getListing({ id });
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  },
  beforeDestroy() {
    this.updateCurrentListing(null);
  },
  methods: {
    ...mapActions(['getListing']),
    ...mapMutations(['updateCurrentListing']),
  },
};
</script>

<style lang="scss" scoped>
.booklisting-content {
  padding: 24px;

  .booklisting-cols {
    margin-top: 16px;
    .listing {
      width: 100%;
      padding-right: 8px;

      .listing-summary {
        margin-top: 26px;
      }
    }
    .form {
      width: 100%;
      padding-left: 8px;
    }
  }
}

.name {
  font-size: 24px;
  color: $grey-text;
  padding-bottom: 8px;
}

.address {
  font-size: 16px;
  color: $grey-text;
  padding-left: 16px;
}

img {
  object-fit: cover;
  width: 475px;
}
</style>
