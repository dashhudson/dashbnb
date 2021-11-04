<template>
    <div>
        <ControlBar title="Listings">
            Filter
        </ControlBar>
        <template v-if="loading">
            Loading ...
        </template>
        <template v-else>
            <List :items="listings" #default="{ item: listing }">
                <div>
                    <div>Property: {{ listing.property_type }}</div>
                    <div>Place: {{ listing.place_type }}</div>
                    <div>Occupancy: {{ listing.occupancy }}</div>
                </div>
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