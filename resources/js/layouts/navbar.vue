<template>
  <PFrame>
    <PTopBar
      slot="topBar"
      showNavigationToggle
      :logo='{"width":124,"topBarSource":"https://cdn.shopify.com/s/files/1/1564/7647/files/hulk-apps-darken_c0448e92-587f-47a8-9473-5ea0023b5ffd.svg?v=1583731462","url":"javascript:void(0)","accessibilityLabel":"Hulkapps"}'
      :userMenu='{"id":"Polaris-UserMenu","actions":[{"items":[{"content":"Back to Shopify","icon":"ArrowLeftMinor"}]},{"items":[{"content":"Community forums"}]}],"name":"Dharma","detail":"Hulkapps","initials":"D","open":false,"message":{"title":"Shopify Production","description":"New message","action":{"content":"Action"},"link":{"to":"javascript:void(0);","content":"Link","external":true},"badge":{"content":"Badge","status":"warning"}}}'
      :secondaryMenu='{"id":"Polaris-Menu","open":false,"actions":[{"items":[{"content":"Community forums"}]}],"icon":"QuestionMarkMajor"}'
      :searchField='{"value":"","placeholder":"Search","showFocusBorder":true}'
      :searchResult='{"items":[{"content":"Shopify help center"},{"content":"Community forums"}]}'
    />
  </PFrame>
</template>

<script>
export default {

}
</script>

<style>

</style>
