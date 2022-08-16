<template>
  <div>
    <SummaryList :items="rooms" />
    <SummaryList :items="amenities" />
  </div>
</template>

<script>
import SummaryList from './SummaryList.vue';

export default {
  components: {
    SummaryList,
  },
  props: {
    value: {
      type: Object,
      value: null,
    },
  },
  computed: {
    rooms() {
      const list = [];
      if (this.value) {
        list.push(`${this.value.occupancy} guests`);
        if (this.value.bedrooms > 0) {
          list.push(`${this.value.bedrooms} bedrooms`);
        }
        if (this.value.bathrooms > 0) {
          list.push(`${this.value.bathrooms} bathrooms`);
        }
      }
      return list;
    },
    amenities() {
      return this.value
        ? Object.keys(this.value.amenities).reduce((results, key) => {
            if (this.value.amenities[key]) {
              results.push(key);
            }
            return results;
          }, [])
        : [];
    },
  },
};
</script>
