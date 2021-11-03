<template>
    <div>
        <h3>Listing</h3>
        <template v-for="listing in listings">
            <div v-if="listing" :key="listing.id">{{ listing }}</div>
        </template>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
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