<template>
  <PTabs
    :tabs='[{"id":"dashboard","content":"Dashboard","to":"/","badge":{"content":"10+","status":"critical"}},{"id":"products","content":"Products","to":"/products"},{"id":"customers","content":"Customers","to":"/customers"},{"id":"settings","content":"Settings","to":"/settings"}]'
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
