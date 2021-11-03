<template>
    <div>
        <h3>Listing</h3>
        <List :items="listings" #default="{ item: listing }">
            <div>
                <div>Property: {{ listing.property_type }}</div>
                <div>Place: {{ listing.place_type }}</div>
                <div>Occupancy: {{ listing.occupancy }}</div>
            </div>
        </List>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import List from './List.vue';

export default {
    components: {
        List,
    },
    computed: {
        ...mapState(['listings']),
    },
    mounted() {
        this.getListings();
    },
    methods: {
        ...mapActions(['getListings']),
    }
}
</script>