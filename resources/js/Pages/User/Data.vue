<script setup>
import TextInput from "../Components/TextInput.vue";
import Button from "../Components/Button.vue";
</script>

<template>
  <div>
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <div class="card mt-3 p-3">
            <div class="card-body">
              <div class="">
                <h3 class="mb-4 font-weight-bold text-primary">Buy Data</h3>
              </div>
              <p class="text-muted">
                Your current balance is <b style="color: black">₦0</b>
              </p>
              <form method="post" action="">
                <div class="form-group">
                    <label for="">Choose network</label>
                  <select
                    id="airtime"
                    name="network"
                    class="form-control p-3 mb-3"
                  >
                    <option selected="" value="">Select Mobile Network</option>
                    <option value="15">MTN(Airtime)</option>
                    <option value="6">GLO(Airtime)</option>
                    <option value="1">Airtel(Airtime)</option>
                    <option value="2">9MOBILE(Airtime)</option>
                  </select>
                </div>

                <div class="form-group">
                    <label for="">Choose bundle</label>
                  <select
                    id="airtime"
                    name="network"
                    class="form-control p-3 mb-3"
                  >
                    <option selected="" value="">Select bundle</option>
                    <!-- <option value="15">MTN(Airtime)</option>
                    <option value="6">GLO(Airtime)</option>
                    <option value="1">Airtel(Airtime)</option>
                    <option value="2">9MOBILE(Airtime)</option> -->
                  </select>
                </div>

                <!-- <TextInput placeholder="Amount" type="number" label="Amount" /> -->

                <TextInput placeholder="Phone number" type="tel" label="Phone number" />

                <Button name="Buy Data" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
