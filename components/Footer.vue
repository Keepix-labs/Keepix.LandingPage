<script setup>
  const localePath = useLocalePath()
  const title = ref(null)
  const { width } = useElementBounding(title)
  const mail = "contact@keepix.lab"
  const infos = [
    {
      title: "footer.terms",
      link: "/cgu"
    },
    {
      title: "footer.privacy",
      link: "/cgu"
    }
  ]
</script>

<template>
  <footer class="footer" :style="`--left-min: ${width}px`">
    <div class="content">
      <div class="footer-top footer-flex">
        <div class="footer-flex-left">
          <Heading 
            tag="div"
            ref="title"
            :small="$t('footer.title.small')" 
            :strong="$t('footer.title.strong')" />
        </div>
      </div>
      <div class="footer-middle footer-flex">
        <div class="footer-flex-left">
          <div class="intro" data-reveal>
            <p>{{ $t('footer.txt') }}</p>
          </div>
          <Social class="footer-social" data-reveal />
        </div>
        <div class="footer-middle-right">
          <div>
            <div class="footer-middle-title" data-reveal>Contact us</div>
            <ul data-reveal>
              <li>
                <a :href="`mailto:${mail}`">{{ mail }}</a>
              </li>
            </ul>
          </div>
          <div>
            <div class="footer-middle-title" data-reveal>Informations</div>
            <ul data-reveal>
              <li v-for="info in infos">
                <NuxtLink :to="localePath(info.link)">{{ $t(info.title) }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom footer-flex">
        <div class="footer-bottom-left">
          <div class="footer-logo" data-reveal>
            <Logo class="footer-logo-sigle" />
            <svg class="footer-logo-txt" viewBox="0 0 431.8 114.9">
              <title>{{ $t('site') }}</title>
              <use xlink:href="/img/sprite.svg#logo"/>
            </svg>
          </div>
        </div>
        <div class="footer-bottom-right" data-reveal>
          <p v-html="$t('footer.copyright')"></p>
        </div>
      </div>
    </div>
  </footer>
</template>