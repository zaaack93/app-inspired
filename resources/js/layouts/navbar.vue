<template>
  <PLayout>
    <PLayoutSection>
      <PBanner title="Order archived" :action="{}">
        <p>This order was archived on March 7, 2017 at 3:12pm EDT.</p>
      </PBanner>
    </PLayoutSection>
    <PLayoutAnnotatedSection
      title="Store details"
      description="Shopify and your customers will use this information to contact you."
    >
      <PCard sectioned="" :actions="[]">
        <PFormLayout>
          <PTextField label="Store name" />
          <PTextField label="Account email" type="email" />
        </PFormLayout>
      </PCard>
    </PLayoutAnnotatedSection>
  </PLayout>
</template>

<script>
export default {

}
</script>

<style>

</style>
