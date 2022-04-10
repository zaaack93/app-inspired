<template>
  <div>
    <PModal
        :open="showmodal"
        sectioned
        :primaryAction='{"content":"Configure",onAction : function onAction(){sendConfigure("Customer saved")}}'
        title="Enter Customer Details"
        :loading="showloading"
      >
        <p>Sample paragraph are you sure for configure your app</p>
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
            showloading:true
        }
    },
    methods:{
        sendConfigure(param){
            alert(param)
            this.showloading=true;
        }
    },
    mounted(){
        this.showmodal=true;
    }
};
</script>

<style>
</style>
