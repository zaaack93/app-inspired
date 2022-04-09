<template>
  <PTabs
    :tabs='[{"id":"dashboard","content":"Dashboard","to":"/all-customers-1","badge":{"content":"10+","status":"critical"}},{"id":"products","content":"Products","to":"/accepts-marketing-content-1"},{"id":"customers","content":"Customers","to":"/repeat-customers-content-1"},{"id":"settings","content":"Settings","to":"/prospects-1"}]'
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
