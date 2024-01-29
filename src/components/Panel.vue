<template>
  <div :class="colorClasses" class="p-4 mb-4 rounded flex gap-4">
    <Icon :icon="type" class="flex-none" />
    <div class="[&>*]:m-0 [&>*+*]:mt-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["type"]);

const colorClasses = {
  "bg-blue-100 [&>svg]:text-blue-500": props.type == "info",
  "bg-green-100 [&>svg]:text-green-500": props.type == "success",
  "bg-yellow-100 [&>svg]:text-yellow-500": props.type == "warning",
  "bg-red-100 [&>svg]:text-red-500": props.type == "error",
};
</script>