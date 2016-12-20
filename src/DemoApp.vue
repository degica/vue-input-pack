<template>
  <div>
    <p>
      <label>DateInput</label>
      <date-input v-model="date"></date-input>
      <p>{{ date }}</p>
    </p>

    <p>
      <label>TimeInput</label>
      <time-input v-model="time"></time-input>
      <p>{{ time }}</p>
    </p>
  </div>
</template>

<script>
import { DateInput, TimeInput } from "./index"

export default {
  data() {
    return {
      date: { year: 2016, month: 1, day: 1 },
      time: { HH: 12, mm: 30 }
    }
  },
  components: { TimeInput, DateInput }
}
</script>