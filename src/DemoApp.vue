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
      date: "2016-01-01",
      time: "12:30:00"
    }
  },
  components: { TimeInput, DateInput }
}
</script>