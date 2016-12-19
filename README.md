# vue-input-pack

Collection of simple input helpers for vue.js

## What's included?

* Date Input
* Time Input

## Screenshot

![image](https://cloud.githubusercontent.com/assets/82835/21301979/b9dc51b0-c5f5-11e6-926d-3e6b39112a5e.png)

## Requirements

- [Vue.js](https://github.com/vuejs/vue) `^2.0.0`

## Installation

## npm 
``` bash
$ npm install vue-input-pack
```

## Usage
``` html
<template>
  <date-input v-model="date"></date-input>
  <time-input v-model="time"></time-input>
</template>

<script>
import { DateInput, TimeInput } from 'vue-input-pack';

export default {
    components: { DateInput, TimeInput }
};
</script>
```

# License

[The MIT License](http://opensource.org/licenses/MIT)