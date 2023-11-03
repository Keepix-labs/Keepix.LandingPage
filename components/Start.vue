<script setup>
  const localePath = useLocalePath()
</script>

<template>
  <Btn :to="localePath('/') + '#product'" :text="$t('start')" icon="material-symbols:arrow-forward-rounded" />
</template>