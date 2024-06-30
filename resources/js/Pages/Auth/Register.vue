<script setup>
import AuthLayout from "../../Layouts/AuthLayout.vue";
import { useForm } from "@inertiajs/vue3";
import TextInput from "../Components/TextInput.vue";
import Button from "../Components/Button.vue";
defineOptions({ layout: AuthLayout });

const form = useForm({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const submit = () => {
  form.post(
    route("register", {
      // onSuccess: () => form.reset("password", "password_confirmation"),
      onError: () => form.reset("password", "password_confirmation"),
    })
  );
};
</script>

<template>
  <h4>Hello! let's get started</h4>
  <h6 class="fw-light">Register</h6>
  <form class="pt-3 mt-4" @submit.prevent="submit">
    <TextInput
      label="Fullname"
      placeholder="Fullname"
      v-model="form.name"
      :message="form.errors.name"
    />

    <TextInput
          label="Email"

      placeholder="Email"
      v-model="form.email"
      :message="form.errors.email"
    />

    <TextInput
          label="Password"

      type="password"
      placeholder="Password"
      v-model="form.password"
      :message="form.errors.password"
    />

    <TextInput
          label="Confirm Password"

      type="password"
      placeholder="Confirm Password"
      v-model="form.password_confirmation"
      :message="form.errors.password_confirmation"
    />

    <div class="d-flex justify-content-between align-items-center">
      <div class="">
        <input type="checkbox" required class="form-check-input mr-2" id="terms" />
        <label class="form-check-label ml-3 text-muted" for="terms">
           &nbsp; Accept terms and conditions
        </label>
      </div>
      <!-- <a href="#" class="auth-link text-black">Forgot password?</a> -->
    </div>
    <!-- <div class="mt-3 d-grid gap-2">
      <button
        class="btn btn-block btn-primary btn-md fw-semibold auth-form-btn"
        :disabled="form.processing"
      >
        REGISTER
      </button>
    </div> -->
    <Button name="REGISTER" :disable="form.processing" />

    <div class="text-center mt-4 fw-light">
      Already have an account?
      <Link :href="route('login')">Login</Link>
      <!-- <a href="register.html" class="text-primary">Create</a> -->
    </div>
  </form>
</template>
