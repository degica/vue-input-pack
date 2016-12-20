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
import util from "./util"

export default {
  name: 'TimeInput',
  props: {
    value: Object // { HH: 00, mm: 00 }
  },
  data() {
    return {
      hour: 0,
      minute: 0
    }
  },
  methods: {
    updateInput(e) {
      this.$emit('input', {HH: this.hour, mm: this.minute})
    },
    range: util.range,
    zeroFill: util.zeroFill
  },
  created() {
    if (this.value) {
      this.hour = this.value.HH
      this.minute = this.value.mm
    }
  }
}
</script>