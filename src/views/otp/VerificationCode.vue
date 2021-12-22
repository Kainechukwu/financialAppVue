<template>
  <div class="h-full overflow-auto">
    <!-- <AccountCreated v-if="accountCreated" :userEmail="userEmail" /> -->
    <div
      class="min-h-full pt-10 register-page flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="mb-9">
        <StarLogoSvg />
      </div>
      <div style="min-width: 500px" class="register-form">
        <div class="">
          <div class="flex flex-col justify-center items-center">
            <h2 class="mb-2 fs-24 fw-600 font-extrabold blacktext">
              Verification Code
            </h2>
            <p class="tx-666666 fw-400 fs-14">
              Enter the 6-digit verification code sent to your email address
            </p>
          </div>

          <form class="mt-8 w-full" action="#" method="POST">
            <!-- <input type="hidden" name="remember" value="true" /> -->
            <div class="">
              <!-- --------------- -->

              <div class="mb-4 grid grid-cols-6 gap-2">
                <input
                  id="code1"
                  name="code1"
                  type="text"
                  v-model="code1"
                  autocomplete="off"
                  required=""
                  class="mt-1.5 br-5 h-14 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />

                <input
                  id="code2"
                  name="code2"
                  type="text"
                  v-model="code2"
                  autocomplete="off"
                  required=""
                  class="mt-1.5 br-5 h-14 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />

                <input
                  id="code3"
                  name="code3"
                  type="text"
                  v-model="code3"
                  autocomplete="off"
                  required=""
                  class="mt-1.5 br-5 h-14 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />

                <input
                  id="code4"
                  name="code4"
                  type="text"
                  v-model="code4"
                  autocomplete="off"
                  required=""
                  class="mt-1.5 br-5 h-14 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />

                <input
                  id="code5"
                  name="code5"
                  type="text"
                  v-model="code5"
                  autocomplete="off"
                  required=""
                  class="mt-1.5 br-5 h-14 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />

                <input
                  id="code6"
                  name="code6"
                  type="text"
                  v-model="code6"
                  autocomplete="off"
                  required=""
                  class="mt-1.5 br-5 h-14 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>

              <!-- ------------ -->
            </div>

            <div class="mt-8 flex justify-center tx-666666 fw-400 fs-14">
              Resend Code
            </div>

            <div class="mt-8">
              <button
                @click.prevent="submitCode"
                type="submit"
                class="cursor-pointer bluebtn h-50px relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium br-5 text-white bg-indigo-600"
              >
                <span class="fs-14 items-center text-white fw-400 my-auto">
                  submit
                </span>
              </button>
            </div>
          </form>
        </div>
        <!-- <div class="text-center tx-666666 fs-14 fw-400 mt-10">
          <span>
            By clicking "Create Account", you agree to bonfree’s terms of
            acceptable use</span
          >
        </div> -->
      </div>
      <div class="mt-11">
        <span @click="goToLogin" class="cursor-pointer fs-14 fw-400"
          >Return to Login</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import StarLogoSvg from "@/components/svg/StarLogoSvg.vue";
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
// import ApiResource from "@/components/core/ApiResource";
// import LoginService from "@/services/login/LoginService.js";
import { Log } from "@/components/util";

export default {
  name: "Verification Code",
  components: {
    StarLogoSvg,
  },
  setup() {
    const router = useRouter();
    const codes = reactive({
      code1: "",
      code2: "",
      code3: "",
      code4: "",
      code5: "",
      code6: "",
    });
    const submitCode = () => {
      Log.info(codes);
    };

    const goToLogin = () => {
      router.push("/login");
    };
    return {
      submitCode,
      goToLogin,
      ...toRefs(codes),
    };
  },
};
</script>

<style lang="scss" scoped></style>
