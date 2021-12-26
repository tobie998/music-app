<template>
  <!-- Login Form -->
  <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmitLogin)">
      <!-- Email -->
      <ValidationProvider name="email" rules="required|email">
        <div class="mb-3" slot-scope="{ errors, failedRules }">
          <label class="inline-block mb-2">Email</label>
          <input
            name="emailLogin"
            type="email"
            v-model="formLogin.emailLogin"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
            placeholder="Enter Email"
          />
          <span class="text-red-600 text-sm" v-if="failedRules.required">{{ "Email is required" }}</span>
          <span class="text-red-600 text-sm" v-if="failedRules.email">{{ errors[0] }}</span>
        </div>
      </ValidationProvider>
      <!-- Password -->
      <ValidationProvider name="password" rules="required|min:8">
        <div class="mb-3" slot-scope="{ failedRules }">
          <label class="inline-block mb-2">Password</label>
          <input
            name="password"
            type="password"
            v-model="formLogin.passwordLogin"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
            placeholder="Password"
          />
          <span class="text-red-600 text-sm" v-if="failedRules.required">{{ "Password is required" }}</span>
          <span class="text-red-600 text-sm" v-if="failedRules.min">{{ "Password must greater than 8 letters" }}</span>
        </div>
      </ValidationProvider>
      <button type="submit" :disabled="log_submisstion" class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700">Submit</button>
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      log_submisstion: false,
      formLogin: {
        emailLogin: '',
        passwordLogin: '',
      },
    };
  },
  methods: {
    onSubmitLogin() {
      this.log_submisstion = true;
      console.log(this.formLogin);
      alert('Login is successful');
    },
  },
};
</script>
