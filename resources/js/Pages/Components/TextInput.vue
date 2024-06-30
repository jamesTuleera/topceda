<script setup>
const model = defineModel({
  type: null,
  required: true,
});
defineProps({
  name: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    default: "Text",
  },

  placeholder: {
    type: String,
    default: "Enter here",
  },

  label: {
    type: String,
    default: null
  },

  message: String,
});
</script>

<template>
  <div>
    <div class="form-group">
      <label v-if="label" for="">{{ label }}</label>
      <input
        :class="message ? 'is-invalid' : ''"
        :type="type"
        class="form-control form-control-sm"
        :placeholder="placeholder"
        v-model="model"
      />
      <small v-if="message" class="text-danger">{{ message }}</small>
    </div>
  </div>
</template>
