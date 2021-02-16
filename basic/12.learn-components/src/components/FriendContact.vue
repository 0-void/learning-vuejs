<template>
  <div>
    <ul v-if="!showMoreDetails">
      <li>{{ name }}</li>
      <li>{{ email }}</li>
      <li>{{ phoneNumber }}</li>
    </ul>
    <button @click="toggleDetails">
      {{ showMoreDetails ? "Show" : "Hide" }} details
    </button>
  </div>
</template>

<script>
export default {
  props: {
    email: { type: String, required: true },
    phoneNumber: String,
    name: String,
  },
  data() {
    return {
      showMoreDetails: false,
    };
  },
  methods: {
    toggleDetails() {
      this.showMoreDetails = !this.showMoreDetails;
    },
  },
};
</script>