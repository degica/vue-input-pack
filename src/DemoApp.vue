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
      date: { year: 2018, month: 4, day: 28 },
      time: { HH: 12, mm: 30 }
    }
  },
  components: { TimeInput, DateInput }
}
</script>
