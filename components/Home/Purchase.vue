<script setup>
  const { $gsap: gsap } = useNuxtApp()
  const { open } = useModal()
  const list = 5
  const img = ref(null)
  const { height } = useElementBounding(img)

  const { price_dollar, price_btc, price_eth } = useProduct()

  onMounted(() => {

    gsap.fromTo('.purchase-left', {
      y: '40%'
    }, {
      y: '0%',
      duration: 1,
      scrollTrigger: {
        trigger: '.purchase',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true
      }
    })

    gsap.fromTo('.purchase-logo svg use', {
      y: '-40%',
    }, {
      y: '0%',
      stagger: .1,
      scrollTrigger: {
        trigger: '.purchase',
        start: 'top bottom',
        endTrigger: '.footer',
        end: 'bottom bottom',
        scrub: true
      }
    })

  })
</script>

<template>
  <div id="product" class="purchase">
    <div class="content">
      <div class="purchase-left">
        <Heading :small="$t('index.purchase.title.small')" :strong="$t('index.purchase.title.strong')" />
        <div class="intro" data-reveal>
          <p>{{ $t('index.purchase.intro') }}</p>
        </div>
        <div class="txt" data-reveal v-html="$t('index.purchase.txt')"></div>
      </div>
      <div class="purchase-right">
        <div class="purchase-box selection-white" :style="`--height: ${height.toFixed()}px`">
          <NuxtPicture ref="img" class="purchase-box-img" src="/img/keepix-v1.png" :alt="$t('site')" />
          <h3 data-reveal>{{ $t('index.purchase.box.title') }}</h3>
          <p data-reveal>{{ $t('index.purchase.box.txt') }}</p>
          <ul class="list">
            <li v-for="li, id in list" data-reveal :key="id">
              <Icon name="ph:check" />
              <span v-html="$t(`index.purchase.box.list.${li}`)"></span>
            </li>
          </ul>
          <ul class="price" data-reveal>
            <li>
              <span>{{ $t('index.purchase.box.price') }}:</span>
              <strong>{{ price_dollar }} $</strong>
            </li>
            <li class="min">
              <span>{{ $t('index.purchase.box.price') }} BTC:</span>
              <strong>{{ price_btc }} <Icon name="mdi:currency-btc" /></strong>
            </li>
            <li class="min">
              <span>{{ $t('index.purchase.box.price') }} ETH:</span>
              <strong>{{ price_eth }} <Icon name="mdi:ethereum" /></strong>
            </li>
          </ul>
          <div data-reveal>
            <Btn tag="button" text="Purchase" icon="ph:shopping-cart-simple-light" @click="open" />
          </div>
        </div>
      </div>
    </div>
    <div class="purchase-logo">
      <Logo />
    </div>
  </div>
</template>