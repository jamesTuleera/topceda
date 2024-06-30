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
                <h3 class="mb-4 font-weight-bold text-primary">Buy Power Bill</h3>
              </div>
              <p class="text-muted">
                Your current balance is <b style="color: black">₦0</b>
              </p>
              <form method="post" action="https://nata.ng/payelectricity">
                <input type="hidden" name="_token" value="McvV28xq9cye0OubqUd7cc6SZ9rtFZ9JVJF6NXei">

                <div class="dataOnly">
                <label>Disco </label>
                <select id="disco" name="disco" class="form-control form-select form-select-lg mb-3  " aria-label="Default select example" required="">
                <option selected="" value="">Select a Company (DISCO)
                </option>
                <option value="ikeja-electric">Ikeja Electric Payment - IKEDC</option>
                <option value="eko-electric">Eko Electric Payment - EKEDC</option>
                <option value="abuja-electric">Abuja Electricity Distribution Company- AEDC</option>
                <option value="kano-electric">KEDCO - Kano Electric</option>
                <option value="portharcourt-electric">PHED - Port Harcourt Electric</option>
                <option value="jos-electric">Jos Electric - JED</option>
                <option value="kaduna-electric">Kaduna Electric - KAEDCO</option>
                <option value="enugu-electric">Enugu Electric - EEDC</option>
                <option value="ibadan-electric">IBEDC - Ibadan Electricity Distribution Company</option>
                <option value="benin-electric">Benin Electricity - BEDC</option>
                <option value="aba-electric">Aba Electric Payment - ABEDC</option>
                <option value="yola-electric">Yola Electric Disco Payment - YEDC</option>
                </select>
                </div>

                <div class="form-group">
                <label>Amount</label>
                <input type="number" class="form-control  " id="amount" oninput="display();" name="amount" placeholder="min of N1000" required="">
                <div class="form-text"></div>
                </div>
                <input type="hidden" id="token" name="_token" value="McvV28xq9cye0OubqUd7cc6SZ9rtFZ9JVJF6NXei">

                <div class="form-group">
                <select id="type" name="type" class="form-control form-select form-select-lg mb-3  " aria-label="Default select example" required="">
                <option selected="" value="">Select Type
                </option>
                <option value="prepaid">PrePaid</option>
                <option value="postpaid">PostPaid</option>
                </select>
                </div>

                <div class="form-group">
                <label>Meter Number</label>
                <input type="number" class="form-control  " id="meter" name="meter" placeholder="meter" required="">
                </div>
                <div>
                <button type="button" class="btn btn-primary" id="ajaxSubmit">Verify</button>
                </div>
                <br>

                <div class="form-group">
                <input type="tel" class="form-control  " id="account" name="customer" placeholder="Name will appear here" required="" value="" readonly="">
                </div>

                <div class="form-group">
                <label>Phone</label>
                <input type="tel" class="form-control  " id="phone" name="number" placeholder="Recepient Phone Number" required="" min="11" max="11">
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
