<template>
  <!-- Registration Form -->
  <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit)">
      <!-- Name -->
      <ValidationProvider name="name" rules="required" v-slot="{ errors }">
        <div class="mb-3">
          <label class="inline-block mb-2">Name</label>
          <input name="name" type="text" v-model="formData.name" class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded" placeholder="Enter Name" />
          <span class="text-red-600 text-sm">{{ errors[0] }}</span>
        </div>
      </ValidationProvider>
      <!-- Email -->
      <ValidationProvider name="mail" rules="required|email">
        <!-- custom error text -->
        <div class="mb-3" slot-scope="{ errors, failedRules }">
          <label class="inline-block mb-2">Email</label>
          <input type="email" v-model="formData.email" class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded" placeholder="Enter Email" />
          <span class="text-red-600 text-sm" v-if="failedRules.required">{{ "Email is required" }}</span>
          <span class="text-red-600 text-sm" v-if="failedRules.email">{{ errors[0] }}</span>
        </div>
      </ValidationProvider>
      <!-- Age -->
      <ValidationProvider name="age" rules="required|min_value:16">
        <div class="mb-3" slot-scope="{ failedRules }">
          <label class="inline-block mb-2">Age</label>
          <input type="number" v-model="formData.age" class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded" />
          <span class="text-red-600 text-sm" v-if="failedRules.required">{{ "Age is required" }}</span>
          <span class="text-red-600 text-sm" v-if="failedRules.min_value">{{ "Must be greater than 16" }}</span>
        </div>
      </ValidationProvider>
      <!-- Password -->
      <ValidationProvider name="password" rules="min:8|confirmed:confirmation|required">
        <div class="mb-3" slot-scope="{ failedRules }">
          <label class="inline-block mb-2">Password</label>
          <input type="password" v-model="formData.password" class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded" placeholder="Password" />
          <span class="text-red-600 text-sm" v-if="failedRules.required">{{ "Password is required" }}</span>
          <span class="text-red-600 text-sm" v-if="failedRules.min">{{ "Password must contain at least 8 letters" }}</span>
          <span class="text-red-600 text-sm" v-if="failedRules.confirmed">{{ "Confirm password and password must match" }}</span>
        </div>
      </ValidationProvider>
      <!-- Confirm Password -->
      <ValidationProvider name="cfPassword" rules="min:8|required" vid="confirmation">
        <div class="mb-3" slot-scope="{ failedRules }">
          <label class="inline-block mb-2">Confirm Password</label>
          <input type="password" v-model="formData.confirmPassword" class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded" placeholder="Confirm Password" />
          <span class="text-red-600 text-sm" v-if="failedRules.required">{{ "Confirm password is required" }}</span>
          <span class="text-red-600 text-sm" v-if="failedRules.min">{{ "Confirm password must contain at least 8 letters" }}</span>
        </div>
      </ValidationProvider>
      <!-- Country -->
      <div class="mb-3">
        <label class="inline-block mb-2">Country</label>
        <select class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded">
          <option value="USA">USA</option>
          <option value="Mexico">Mexico</option>
          <option value="Germany">Germany</option>
        </select>
      </div>
      <!-- TOS -->
      <ValidationProvider name="checkbox" rules="required">
        <div class="mb-3 pl-6" slot-scope="{ failedRules }">
          <input type="checkbox" v-model="formData.checkbox" class="w-4 h-4 float-left -ml-6 mt-1 rounded" />
          <label class="inline-block">Accept terms of service</label><br />
          <span class="text-red-600 text-sm" v-if="failedRules.required">{{ "Checkbox is required" }}</span>
        </div>
      </ValidationProvider>
      <button type="submit" :disabled="reg_submission" class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700">Submit</button>
    </form>
  </ValidationObserver>
</template>

<script>
import firebase from '../firebase';

export default {
  name: 'RegisterForm',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        age: '',
        password: '',
        confirmPassword: '',
        checkbox: '',
      },
      reg_submission: false,
    };
  },
  methods: {
    async onSubmit() {
      this.reg_submission = true;
      let userCre = null;
      try {
        userCre = await firebase.auth().createUserWithEmailAndPassword(this.formData.email, this.formData.password);
        console.log('success');
      } catch (error) {
        this.reg_submission = false;
        // console.log(userCre);
        console.log('error');
        return;
      }

      console.log(userCre);
      alert('Form is validated');
    },
  },
};
</script>
