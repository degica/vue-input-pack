<template>
  <div class="input time">
    <select v-model="hour" class="time" @change="updateInput">
      <option v-for="n in range(0, 23)" :value="n">
        {{ zeroFill(n) }}
      </option>
    </select>
    <select v-model="minute" class="time" @change="updateInput">
      <option v-for="n in range(0, 59)" :value="n">
        {{ zeroFill(n) }}
      </option>
    </select>
  </div>
</template>

<script>
import Vue from "vue"
import util from "./util"

export default Vue.extend({
  name: 'TimeInput',
  props: {
    value: String
  },
  data() {
    return {
      hour: 0,
      minute: 0
    }
  },
  methods: {
    updateInput(e) {
      let value = `${this.zeroFill(this.hour)}:${this.zeroFill(this.minute)}:00`
      this.$emit('input', value)
    },
    range: util.range,
    zeroFill: util.zeroFill
  },
  created() {
    if (this.value) {
      let re = /(\d\d):(\d\d):(\d\d)/
      let found = this.value.match(re)
      this.hour = parseInt(found[1])
      this.minute = parseInt(found[2])
    }
  }
})
</script>