
import { createApp, ref, computed } from "https://unpkg.com/vue@3.2.4/dist/vue.esm-browser.prod.js";
const app = createApp({
  setup() {
    const name = ref("");
    const age = ref("");
    const email = ref("");
    const nameValidationVisible = ref(false);
    const ageValidationVisible = ref(false);
    const emailValidationVisible = ref(false);

    const validateForm = () => {
      if (!name.value) {
        nameValidationVisible.value = true;
        return;
      }
      if (!age.value) {
        ageValidationVisible.value = true;
        return;
      }
      if (!email.value) {
        emailValidationVisible.value = true;
        return;
      }
    };

    const isButtonDisabled = computed(() => {
      return !name.value || !age.value || !email.value;
    });

    return {
      name,
      age,
      email,
      isButtonDisabled,
      validateForm,
      nameValidationVisible,
      ageValidationVisible,
      emailValidationVisible,
    };
  },
});
app.mount("#app");
