<template>
    <div>
        <h3>My Bookings</h3>
        <template v-if="loading">
            Loading ...
        </template>
        <template v-else>
        <List :items="bookings" empty-message="No Bookings Found" >
            <template #default="{ item: booking }">
              <Booking :key="booking.id" :value="booking" />
            </template>
        </List>
        </template>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import List from '../components/List.vue';
import Booking from '../components/Booking.vue';

export default {
    components: {
        List,
        Booking,
    },
    data() {
        return {
            loading: false,
        };
    },
    computed: {
        ...mapState(['bookings']),
    },
    mounted() {
        this.initPage();
    },
    methods: {
        ...mapActions(['getBookings']),
        async initPage() {
            this.loading = true;
            try {
                await this.getBookings();
            } catch(error) {
                console.log(error);
            } finally {
                this.loading = false;
            }
        }
    }
}
</script>
