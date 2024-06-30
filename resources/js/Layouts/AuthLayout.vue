<script setup>
defineProps({
    formText : String
})
</script>

<template>
  <div>
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth ">
          <div class="row flex-grow">
            <div class="col-lg-5 col-md-6 mx-auto ">
              <div class="auth-form-light text-left p-5  shadow-lg">
                <div class="brand-logo">
                  <img src="../assets/images/logo.png" />
                </div>
                <slot />
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
  </div>
</template>
