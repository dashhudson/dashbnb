<template>
    <div>
        <ControlBar title="Listings">
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
              <div>
                <img :src="listing.images[0].url" />
              </div>
              <div>
                <div><h2> {{ listing.name }}</h2></div>
                <div>Property: {{ listing.property_type }}</div>
                <div>Place: {{ listing.place_type }}</div>
                <div>Occupancy: {{ listing.occupancy }}</div>
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

export default {
    components: {
        ControlBar,
        List,
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
</style>
