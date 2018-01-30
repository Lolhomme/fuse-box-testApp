<template>
  <div id="app">
      <p>{{ message }}</p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Hello extends Vue{
    message: string = "Hello World"
}
</script>

