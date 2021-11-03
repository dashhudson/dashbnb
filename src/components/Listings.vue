<template>
    <div>
        <h3>Listing</h3>
        {{ listings }}
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