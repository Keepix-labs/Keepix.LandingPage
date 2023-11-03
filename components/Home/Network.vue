<script setup>
  const network = [
    {
      title: "Ethereum",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, aspernatur.",
      icon: "cryptocurrency:eth",
      color: "#40ade6",
      apr: 3.6,
      staked: 14485125
    },
    {
      title: "Polygon",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, aspernatur.",
      icon: "cryptocurrency:matic",
      color: "#864ee6",
      apr: 4.7,
      staked: 14485125
    },
    {
      title: "Solana",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, aspernatur.",
      icon: "cryptocurrency:sol",
      color: "#2ef9a6",
      apr: 5.8,
      staked: 14485125
    }
  ]
</script>

<template>
  <div class="network">
    <div class="content">
      <Heading :small="$t('index.network.title.small')" :strong="$t('index.network.title.strong')" />
      <ul>
        <li v-for="chain in network" :style="`--color: ${chain.color}`" data-reveal :key="chain">
          <div class="logo" data-reveal="top">
            <Icon :name="chain.icon" />
          </div>
          <h3>{{ chain.title }}</h3>
          <p>{{ chain.txt }}</p>
          <div class="btn-group" data-reveal>
            <Btn href="#product" :text="$t('index.network.stake')" icon="material-symbols:arrow-forward-rounded" attr="secondary" bordered />
          </div>
          <Icon class="svg-back" :name="chain.icon" />
        </li>
      </ul>
    </div>
  </div>
</template>