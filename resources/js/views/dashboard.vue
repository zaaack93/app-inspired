<template>
  <div>
    <PLayout>
      <PLayoutSection oneThird="">
        <PCard title="Order details" sectioned="" :actions="[]">
          View a summary of your order.
        </PCard>
      </PLayoutSection>
      <PLayoutSection oneThird="">
        <PCard title="Variant" sectioned="" :actions="[]">Add Variant</PCard>
      </PLayoutSection>
      <PLayoutSection oneThird="">
        <PCard title="Tags" sectioned="" :actions="[]">
          Add tags to your order.
          <PBadge status="attention">Default Badge</PBadge>
        </PCard>ss
      </PLayoutSection>
    </PLayout>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
