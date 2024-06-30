<script setup>
const model = defineModel({
  type: null,
  required: true,
});
defineProps({
  created_at: {
    type: String,
    required: true,
  },

});

function join(date, options, separator) {
        function format(date, options, separator) {
           let formatter = new Intl.DateTimeFormat('en', option);
           return formatter.format(date);
        }
        return options.map(format).join(separator);
     }

     let options = [{day: 'numeric'}, {month: 'short'}, {year: 'numeric'}];
     let joined = join(date, options, '-');
    //  console.log(joined);
</script>

<template>
  <div>
        {{ joined }}
  </div>
</template>
