<template>
  <div class="currency-input">
    <input
      type="text"
      v-model="formattedAmount"
      :placeholder="currencySymbol"
    />
    <select v-model="selectedCurrency">
      <option v-for="currency in currencyOptions" :key="currency.value">
        {{ currency.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const currencyOptions = [{ value: "USD::USD", label: "US Dollar (USD)" }];
const selectedCurrency = ref(currencyOptions[0].value);

const locale = "en-us";
const formatter = computed(() => {
  const currency = selectedCurrency.value.split("::")[1];
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format;
});

const parseValue = (val) => {
  try {
    // Handle empty input
    if (typeof val === "string" && !val.length) {
      return 0;
    }

    // Localize parsing
    const groupSeparator = new Intl.NumberFormat(locale)
      .format(1111)
      .replace(/1/g, "");
    const decimalSeparator = new Intl.NumberFormat(locale)
      .format(1.1)
      .replace(/1/g, "");
    const reversedVal = val.replace(new RegExp(`\\${groupSeparator}`, "g"), "");
    const parsedVal = reversedVal.replace(
      new RegExp(`\\${decimalSeparator}`, "g"),
      "."
    );

    // Sanitize input
    const cleanVal = parsedVal.replace(/[^0-9.]/g, "");

    // Handle potential decimal precision issues
    const decimalCount = (cleanVal.split(".")[1] || []).length;
    const needsAppending = decimalCount > 2;
    if (needsAppending) {
      return Number(cleanVal) * Math.pow(10, decimalCount - 2);
    }

    return Number(cleanVal);
  } catch (error) {
    console.error("Error parsing value:", error);
    return 0;
  }
};

const inputValue = ref("");

const formattedAmount = computed({
  get() {
    // console.log("inputValue.value", inputValue.value);
    // const amount = parseValue(inputValue.value);

    // return formatter.value(amount);

    // const amount = inputValue.value?.replace(/\$\s?|(,*)/g, "");
    // return `$ ${amount}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    const locale = "en-us"; // Change this to your desired locale
    const currency = selectedCurrency.value.split("::")[1]; // Get the currency code

    // Parse the input value, removing non-numeric characters
    const amount = parseValue(inputValue.value);

    // Format the amount using Intl.NumberFormat
    const formatter = new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      maximumFractionDigits: 3,
      minimumFractionDigits: 0,
    });
    const formattedAmount = formatter.format(amount);

    return formattedAmount;
  },
  set(newValue) {
    console.log("newValue", newValue);
    inputValue.value = newValue;
  },
});
</script>

<style scoped>
.currency-input {
  display: flex;
  align-items: center;
  direction: rtl;
}

input[type="text"] {
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex-grow: 1;
}

select {
  margin-left: 10px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
