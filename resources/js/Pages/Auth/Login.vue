<script setup>
import AuthLayout from "../../Layouts/AuthLayout.vue";
import { useForm } from "@inertiajs/vue3";
import TextInput from "../Components/TextInput.vue";
import Button from "../Components/Button.vue";
defineOptions({ layout: AuthLayout });

const form = useForm({
  email: null,
  password: null,
  remember: null,
});

const submit = () => {
  form.post(
    route("login", {
      // onSuccess: () => form.reset("password", "password_confirmation"),
      onError: () => form.reset("password"),
    })
  );
};
</script>

<template>
  <h4>Hello! Welcome back</h4>
  <h6 class="fw-light">Login</h6>
  <form class=" mt-5" @submit.prevent="submit">

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


    <div class="d-flex justify-content-between align-items-center mt-2">
        <div class="">
          <input class="form-check-input mr-2" type="checkbox" id="remember" v-model="form.remember" />
          <label class="form-check-label ml-3" for="remember">
              &nbsp; Keep me signed in
          </label>
        </div>
        <a href="#" class="auth-link text-black">Forgot password?</a>
      </div>
      

    <Button name="LOGIN" :disable="form.processing" />



    <div class="text-center mt-4 fw-light">
      Don't have an account?
      <Link :href="route('register')">Create</Link>
      <!-- <a href="register.html" class="text-primary">Create</a> -->
    </div>
  </form>
</template>
