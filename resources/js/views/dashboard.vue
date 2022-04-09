<template>
  <div>
    <PModal
        :open="showmodal"
        sectioned
        :primaryAction='{"content":"Save Customer"}'
        :secondaryActions='[{"content":"Delete Customer","destructive":true},{"content":"Cancel"}]'
        title="Enter Customer Details"
      >
        <PFormLayout>
          <PTextField label="First Name" />
          <PTextField label="Last Name Name" />
          <PTextField label="Email" type="email" />
        </PFormLayout>
    </PModal>
    <PLayout>
      <PLayoutSection oneThird="">
        <status status="20%" title="32" shortDescription="Today's wishlists" variant="warning"></status>
      </PLayoutSection>
      <PLayoutSection oneThird="">
        <status status="10%" title="20" shortDescription="Yesterday wishlists" variant="success"></status>
      </PLayoutSection>
      <PLayoutSection oneThird="">
        <status title="4420" shortDescription="Total wishlists"></status>
      </PLayoutSection>
    </PLayout>
  </div>
</template>

<script>
import status from "../components/cards/status"
export default {
    components:{status},
    data(){
        return {
            showmodal:false,
        }
    },
    mounted(){
        this.showmodal=true;
    }
};
</script>

<style>
</style>
