
import { createApp, ref, computed } from "https://unpkg.com/vue@3.2.4/dist/vue.esm-browser.prod.js";

// ==v-on:focus========================================================================
// v-on:focusまたは@focus:フォーカスされた時のイベント
// @focus="ageValidationVisible = false"
// ユーザーが入力フィールドを選択して編集し始めると、
// ageValidationVisibleがfalseに設定されます。これにより、バリデーションメッセージが非表示になります。
// ============================================================================

// ==v-on:blur========================================================================
// v-on:blurまたは@blur:フォーカスが外れた時のイベント
// ageValidationVisibleが!age（ageが空でない場合はfalse、空の場合はtrue）に設定されます。
// ============================================================================

// ==v-model========================================================================
// v-model="age"は、入力フィールドとageというデータプロパティをバインディングしています。
// 入力フィールドに入力された値は、ageに自動的に反映されます。
// ============================================================================

const app = createApp({
  setup() {
    const name = ref("");
    const age = ref("");
    const email = ref("");
    const nameValidationVisible = ref(false);
    const ageValidationVisible = ref(false);
    const emailValidationVisible = ref(false);

    // ============================================================================
    // !<hoge>.value
    // 論理否定演算子で各データの値を反転させ、
    // 空文字列であるかどうかを判定しています
    // ============================================================================
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

    // ==computed========================================================================
    // computedは算出プロパティ
    // 各プロパティひとつでも空文字であればtrueを返します。
    // :disabled="isButtonDisabled"は初期値false
    // ============================================================================

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
