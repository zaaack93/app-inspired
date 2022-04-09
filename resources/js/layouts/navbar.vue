<template>
  <PFrame
  :showMobileNavigation="mobileNavigationActive"
  :contextualSaveBar="{
      active: contextualSaveBarMarkup.isDirty,
      message: 'Unsaved changes',
      saveAction: {
        onAction: handleSave,
      },
      discardAction: {
        onAction: handleDiscard,
      }
  }"
  :topBar="{
      showNavigationToggle: true,
      logo: this.logoMarkup,
      userMenu: {
          id: 'Polaris-UserMenu',
              actions: [
              {
                  items: [
                      {
                          content: 'Community forums'
                      }
                  ],
              },
          ],
          name: 'Dharma',
          detail: this.storeName,
          initials: 'D',
          open: this.topBarMarkup.isUserMenuOpen,
      },
      searchField: {
          value: this.topBarMarkup.searchValue,
          placeholder: 'Search',
          showFocusBorder: true,
      },
      searchResult: {
          items: [
              {
                  content: 'Shopify help center',
              },
              {
                  content: 'Community forums',
              },
          ],
      },
  }"
  :navigation="{
      location: '/',
      showMobileNavigation: true,
      logo: logoMarkup,
      items: [
          {
              items: [
                  {
                      label: 'Back to Shopify',
                      icon: 'ArrowLeftMinor',
                  },
              ],
          },
          {
              separator: true,
              title: 'Hulkapps App',
              items: [
                  {
                      label: 'Dashboard',
                      icon: 'HomeMajor',
                  },
                  {
                      label: 'Hulkapps Orders',
                      icon: 'OrdersMajor',
                  },
              ],
              action: {
                  icon: 'ConversationMinor',
                  accessibilityLabel: 'Contact support',
              }
          }
      ]
  }"
  logo="{
      width: 124,
      contextualSaveBarSource:
        'https://cdn.shopify.com/s/files/1/1564/7647/files/hulk-apps-darken_c0448e92-587f-47a8-9473-5ea0023b5ffd.svg?v=1583731462',
      url: 'javascript:void(0)',
      accessibilityLabel: 'Hulkapps',
  }"
>
    <PSkeletonPage v-if="navigationMarkup.isLoading">
      <PLayout>
        <PLayoutSection>
          <PCard sectioned>
            <PTextContainer>
              <PSkeletonDisplayText size="small"/>
              <PSkeletonBodyText :lines="9"/>
            </PTextContainer>
          </PCard>
        </PLayoutSection>
      </PLayout>
    </PSkeletonPage>
    <PPage v-else title="Account">
      <PLayout>
        <a id="SkipToContentTarget" ref="skipToContentTarget" tabindex="-1"/>
        <PLayoutAnnotatedSection
            title="Account details"
            description="Hulkapps will use this as your account information."
        >
          <PCard sectioned>
            <PFormLayout>
              <PTextField
                  label="Full name"
                  :value="nameFieldValue"
              />
              <PTextField
                  type="email"
                  label="Email"
                  :value="emailFieldValue"
              />
            </PFormLayout>
          </PCard>
        </PLayoutAnnotatedSection>
      </PLayout>
    </PPage>
    <PModal
        :open="modalMarkup.modalActive"
        title="Contact Support"
        :primaryAction="{
            content: 'Send',
        }"
        sectioned
    >
      <PFormLayout>
        <PTextField
            label="Subject"
            :value="modalMarkup.supportSubject"
        />
        <PTextField
            label="Message"
            :value="modalMarkup.supportMessage"
            multiline
        />
      </PFormLayout>
    </PModal>
</PFrame>
</template>

<script>
export default {

}
</script>

<style>

</style>
