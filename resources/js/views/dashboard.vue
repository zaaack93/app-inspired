<template>
  <div>
    <PLayout>
      <PLayoutSection oneThird="">
        <PCard :sectioned="false" :subdued="true">
            <PCardHeader
            title="32"
            shortDescription="Today's wishlists"
            v-slot:children
            >
            <PBadge status="danger">20%</PBadge>
            </PCardHeader>
        </PCard>
      </PLayoutSection>
      <PLayoutSection oneThird="">
        <PCard :sectioned="false">
            <PCardHeader
            title="20"
            shortDescription="Yesterday wishlists"
            v-slot:children
            >
            <PBadge status="success">10%</PBadge>
            </PCardHeader>
        </PCard>
      </PLayoutSection>
      <PLayoutSection oneThird="">
        <PCard :sectioned="false">
            <PCardHeader
            title="4420"
            shortDescription="Total wishlists"
            />
        </PCard>
      </PLayoutSection>
    </PLayout>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
