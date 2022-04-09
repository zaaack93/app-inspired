<template>
  <PDataTable
        :resourceName="{singular: 'Product', plural: 'Products'}"
        :headings="[
            {
                content: 'Product',
                value: 'product',
                type: 'text',
                width: '30%'
            },
            {
                content: 'Price',
                value: 'price',
                type: 'numeric',
            },
            {
                content: 'SKU Number',
                value: 'sku',
                type: 'numeric',
            },
            {
                content: 'Net quantity',
                value: 'qty',
                type: 'numeric',
            },
            {
                content: 'Status',
                value: 'status',
                type: 'text',
                sortable: false,
            },
            {
                content: 'Actions',
                value: 'actions',
                type: 'text',
                sortable: false,
            },
        ]"
        :rows="[
            {
                product: 'Emerald Silk Gown',
                product_link: 'javascript:void(0);',
                price: '$875.00',
                sku: 124689,
                sku_status: 'critical',
                sku_progress: 'incomplete',
                qty: 140,
                status: true,
            },
            {
                product: 'Mauve Cashmere Scarf',
                product_link: 'javascript:void(0);',
                price: '$230.00',
                sku: 124533,
                sku_status: 'warning',
                sku_progress: 'partiallyComplete',
                qty: 83,
                status: false,
            },
            {
                product: 'Navy Merino Wool Blazer with khaki chinos and yellow belt',
                product_link: 'javascript:void(0);',
                price: '$445.00',
                sku: 124518,
                sku_status: 'success',
                sku_progress: 'complete',
                qty: 32,
                status: true,
            },
        ]"
        :totals="[
            '', '', '', 255, '', '',
        ]"
        :hasPagination="true"
        :pagination="{
            hasPrevious: true,
            hasNext: true,
            onNext: () => {
                alert('Next');
            },
            onPrevious: () => {
                alert('Previous');
            }
        }"
    >
        <template v-slot:item="{item}">
            <PDataTableRow>
                <PDataTableCol firstColumn>
                    <PLink :url="item.product_link">
                    {{item.product}}
                    </PLink>
                </PDataTableCol>
                <PDataTableCol numeric>{{item.price}}</PDataTableCol>
                <PDataTableCol numeric>
                    <PBadge :status="item.sku_status" :progress="item.sku_progress">
                    {{item.sku}}
                    </PBadge>
                </PDataTableCol>
                <PDataTableCol numeric>{{item.qty}}</PDataTableCol>
                <PDataTableCol>
                    <PToggle :checked="item.status"/>
                </PDataTableCol>
                <PDataTableCol>
                    <PStack>
                        <PStackItem>
                            <PIcon source="EditMinor"/>
                        </PStackItem>
                        <PStackItem>
                            <PIcon source="DeleteMinor" color="critical"/>
                        </PStackItem>
                    </PStack>
                </PDataTableCol>
            </PDataTableRow>
        </template>
        <PButtonGroup slot="filter" segmented>
            <PPopover
                id="popover_1"
                :active="active"
                preferred-alignment="right"
                full-width
            >
                <PButton
                    slot="activator"
                    :disclosure="active ? 'up' : 'down'">
                    Filter Options
                </PButton>
                <POptionList
                    slot="content"
                    allowMultiple
                    :selected="selected"
                    :options="[
                        {label: 'Rating 1 with a long text', value: '1'},
                        {label: 'Rating 2', value: '2'},
                        {label: 'Rating 3', value: '3'},
                        {label: 'Rating 4', value: '4'},
                    ]"
                />
            </PPopover>
            <PPopover
                id="popover_2"
                :active="active2"
                preferred-alignment="right"
            >
                <PButton slot="activator" :disclosure="active2 ? 'up' : 'down'">
                    Status
                </PButton>
                <POptionList
                    slot="content"
                    allowMultiple
                    :selected="status"
                    :options="[
                        {label: 'Active', value: 'Active'},
                        {label: 'Pending', value: 'Pending'},
                        {label: 'Deleted', value: 'Deleted'},
                    ]"
                />
            </PPopover>
        </PButtonGroup>
    </PDataTable>
</template>

<script>
export default {

}
</script>

<style>

</style>
