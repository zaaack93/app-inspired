<template>
  <PTabs
    :tabs='[{"id":"all-customers-1","content":"All","to":"/all-customers-1","external":false,"badge":{"content":"10+","status":"critical"}},{"id":"accepts-marketing-1","content":"Accepts marketing","to":"/accepts-marketing-content-1"},{"id":"repeat-customers-1","content":"Repeat customers","to":"/repeat-customers-content-1"},{"id":"prospects-1","content":"Prospects","to":"/prospects-1"}]'
    :selected="0"
  >
    <PCardSection title="All"><p>Tab 0 selected</p></PCardSection>
  </PTabs>
</template>

<script>
export default {

}
</script>

<style>

</style>
