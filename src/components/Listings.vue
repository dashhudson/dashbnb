<template>
    <div>
        <ControlBar>
          <select>
            <option>All Listings</option>
            <option>Cottage</option>
            <option>House</option>
            <option>Hotel</option>
            <option>Resort</option>
          </select>
        </ControlBar>
        <template v-if="loading">
            Loading ...
        </template>
        <template v-else>
        <List :items="listings" >
            <template #default="{ item: listing }">
              <div class="listing-item">
                <div>
                  <img :src="listing.images[0].url" />
                </div>
                <div>
                  <div><h2> {{ listing.name }}</h2></div>
                  <div>Property: {{ listing.property_type }}</div>
                  <div>Place: {{ listing.place_type }}</div>
                  <div>Occupancy: {{ listing.occupancy }}</div>
                </div>
                <Rating class="listing-rating" :value="listing.rating" />
              </div>
            </template>
        </List>
        </template>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import List from './List.vue';
import ControlBar from './ControlBar.vue';
import Rating from './Rating.vue';

export default {
    components: {
        ControlBar,
        List,
        Rating,
    },
    data() {
        return {
            loading: false,
        };
    },
    computed: {
        ...mapState(['listings']),
    },
    mounted() {
        this.initPage();
    },
    methods: {
        ...mapActions(['getListings']),
        async initPage() {
            this.loading = true;
            try {
                await this.getListings();
            } finally {
                this.loading = false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.item-details {
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

.listing-item {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.listing-rating {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
