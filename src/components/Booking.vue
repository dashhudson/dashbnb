<template>
    <ListingItem :image-url="imageUrl">
        <div v-if="value.listing">
            <div class="address">
                {{ value.listing.address.city }},
                {{ value.listing.address.state }},
                {{ value.listing.address.country }}
            </div>
            <div class="name">{{ value.listing.name }}</div>
            <div class="summary-item">{{ startDate }} - {{ endDate }}</div>
            <div class="summary-item">{{ value.guests }} Guests</div>
            <div v-if="isAdmin" class="d-flex flex-column align-end justify-end" style="height: 65px;">
                <Button @click.native="onDeleteClick">CANCEL</Button>
            </div>
        </div>
    </ListingItem>
</template>

<script>
import { format } from 'date-fns'
import ListingItem from './ListingItem.vue';
import { mapActions, mapGetters } from 'vuex';
import Button from './Button.vue';

export default {
    components: {
        Button,
        ListingItem,
    },
    props: {
        value: {
            type: Object,
            default: null,
        }
    },
    computed: {
        ...mapGetters(['currentUser']),
        imageUrl() {
            return this.value?.listing?.images?.[0]?.url;
        },
        startDate() {
            return this.value?.start_at ? format(new Date(this.value.start_at), 'MMM d, yyyy') : '';
        },
        endDate() {
            return this.value?.end_at ? format(new Date(this.value.end_at), 'MMM d, yyyy') : '';
        },
        isAdmin() {
            return this.currentUser?.role === 'admin';
        },
    },
    methods: {
        ...mapActions(['deleteBooking']),
        onDeleteClick() {
            this.deleteBooking({ id: this.value?.id });
        },
    }
}
</script>

<style lang="scss" scoped>
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

.summary-item {
    margin-top: 16px;
    color: $grey-text-light;
    font-size: 16px;
}
</style>
