<script setup>
  const steps = 3
</script>

<template>
  <div class="keeper selection-white">
    <div class="content">
      <Heading :small="$t('index.keeper.title.small')" :strong="$t('index.keeper.title.strong')" />
      <div class="keeper-middle">
        <ul class="keeper-list">
          <li v-for="step in steps" :key="step">
            <div class="number" data-reveal="left">{{ step }}</div>
            <h3 data-reveal>{{ $t(`index.keeper.steps.${step}.title`) }}</h3>
            <p data-reveal>{{ $t(`index.keeper.steps.${step}.txt`) }}</p>
          </li>
        </ul>
        <div class="keeper-line"></div>
      </div>
      <div class="keeper-bottom">
        <p v-html="$t('index.keeper.bottom')" data-reveal></p>
        <div data-reveal>
          <Start />
        </div>
      </div>
    </div>
  </div>
</template>