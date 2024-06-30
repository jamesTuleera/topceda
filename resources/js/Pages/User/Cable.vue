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
                <h3 class="mb-4 font-weight-bold text-primary">Buy Cable Subscription</h3>
              </div>
              <p class="text-muted">
                Your current balance is <b style="color: black">₦0</b>
              </p>
              <form method="post" action="https://nata.ng/buycable">
                <input type="hidden" name="_token" value="McvV28xq9cye0OubqUd7cc6SZ9rtFZ9JVJF6NXei">

                <div class="dataOnly">
                <select id="cableprovider" name="cableprovider" class="form-control form-select form-select-lg mb-3  " aria-label="Default select example" required="">
                <option selected="" value="">Select a TV Provider </option>
                <option value="gotv">GoTV</option>
                <option value="dstv">DSTV</option>
                <option value="startimes">Startimes</option>
                </select>
                </div>
                <input type="hidden" id="token" name="_token" value="McvV28xq9cye0OubqUd7cc6SZ9rtFZ9JVJF6NXei">
                <div>
                <select name="cableprice" class="form-control form-select form-select-lg mb-3  " id="tvsub" required="">
                <option value="">Select Provider First</option>
                </select>
                </div>
                <select style="display: none" name="amount" class="form-control form-select form-select-lg mb-3" id="amount" required="" readonly="">
                <option value="">Amount</option>
                </select>

                <div class="form-group">
                <input type="tel" class="form-control  " id="icu" name="icu" placeholder="ICU" required="">
                </div>
                <div>
                <button type="button" class="btn btn-primary" id="ajaxSubmit">Verify</button>
                </div>
                <br>

                <div class="form-group">
                <input type="tel" class="form-control  " id="account" name="customer" placeholder="Name will appear here" required="" value="" readonly="">
                </div>

                <div style="display: none" class="form-group">
                <input type="tel" class="form-control  " id="phone" name="number" placeholder="Recepient Phone Number" required="" min="11" max="11" value="09034845732" readonly="">
                </div>
                <div class="actions">
                <input id="btn" class="btn btn-primary" type="submit" value="Proceed">
                </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
