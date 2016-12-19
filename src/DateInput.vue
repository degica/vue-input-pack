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
    value: String
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
      this.$emit('input',  `${this.year}-${util.zeroFill(this.month)}-${util.zeroFill(this.day)}`)
    }
  },
  created() {
    if (this.value) {
      let re = /(\d*)-(\d*)-(\d*)/
      let found = this.value.match(re)

      this.year = parseInt(found[1])
      this.month = parseInt(found[2])
      this.day = parseInt(found[3])
      this.daysInMonth = new Date(this.year, this.month, 0).getDate()
    }
  }
}
</script>