<script setup>
  const localePath = useLocalePath()
  const nav = [
    {
      title: 'header.nav.discover',
      page: '/',
      ancre: '#discover'
    },
    {
      title: 'header.nav.products',
      page: '/',
      ancre: '#product'
    },
    {
      title: 'header.nav.setup',
      page: '/list'
    }
  ]
</script>

<template>
  <nav class="header-nav">
    <ul>
      <li v-for="link in nav">
        <NuxtLink v-if="link.page" :to="localePath(link.page) + link.ancre">{{ $t(link.title) }}</NuxtLink>
        <a v-else :href="link.ancre">{{ $t(link.title) }}</a>
      </li>
    </ul>
  </nav>
</template>