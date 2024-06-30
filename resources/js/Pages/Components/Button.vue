<script setup>
defineProps({
  name: {
    name: String,
    default: "SUBMIT",
  },
  disable: {
    default: null,
  },

  color: {
    type: String,
    default: "primary",
  },
});
</script>

<template>
  <div>
    <div class="mt-3 d-grid gap-2 mb-3">
      <button
        :class="`btn-${color}`"
        class="btn btn-lg btn-block fw-semibold auth-form-btn"
        :disabled="disable"
      >
        {{ name }}
      </button>
    </div>
  </div>
</template>
