<script setup>
  const localePath = useLocalePath()

  const list_keepix = ref([])

  const get_keepix = async () => {
    for (let i = 20; i < 101; i++) {
      try {
        const response = await fetch(`http://192.168.1.${i}:9000/app`, { signal: AbortController().signal })
        if (response.status === 200) {
          list_keepix.value.push({
            ip: i,
            name: `Keepix ${i}`,
            url: `http://192.168.1.${i}`
          })
        }
      } catch (e) {
        console.log(i)
      }
    }
  }

  onMounted(() => {
    get_keepix()
  })
</script>

<template>
  <NuxtLayout name="setup">
    <h1 class="setup-title">{{ $t('list.title') }} ({{ list_keepix.length }})</h1>
    <ul class="setup-list">
      <template v-if="list_keepix.length > 0">
        <li v-for="keepix, id in list_keepix" :key="id">
          <a :href="keepix.url" target="_blank" class="keepix">
            <div class="illu">
              <Logo :white="true" />
            </div>
            <div>
              <strong>{{ keepix.name }}</strong>
              <small>{{ keepix.ip }}</small>
            </div>
          </a>
        </li>
      </template>
      <li v-else class="message">
        <Icon name="ph:smiley-sad-light" /> {{ $t('list.no_keepix') }}
      </li>
    </ul>
    <Btn :to="localePath('/setup')" :text="$t('list.add_keepix')" icon="ph:plus-circle" />
  </NuxtLayout>
</template>