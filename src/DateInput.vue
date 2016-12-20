<template>
  <div class="input date">
    <select v-model="year" class="date" @change="updateInput">
      <option v-for="year in years">
        {{ year }}
      </option>
    </select>
    <select v-model="month" class="date" @change="updateInput">
      <option v-for="n in 12">
        {{ n }}
      </option>
    </select>
    <select v-model="day" class="date" @change="updateInput">
      <option v-for="n in daysInMonth">
        {{ n }}
      </option>
    </select>
  </div>
</template>

<script>
import util from "./util"

export default {
  name: 'DateInput',
  props: {
    value: Object // { year: 2016, month: 3, day: 17 }
  },
  data() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let daysInMonth = new Date(year, month, 0).getDate()

    return {
      year: year,
      years: [year, year + 1],
      month: month,
      day: day,
      daysInMonth: daysInMonth
    }
  },
  methods: {
    updateInput(e) {
      this.$emit('input', { year: this.year, month: this.month, day: this.day })
    }
  },
  created() {
    if (this.value) {
      this.year = this.value.year
      this.month = this.value.month
      this.day = this.value.day
      this.daysInMonth = new Date(this.year, this.month, 0).getDate()
    }
  }
}
</script>