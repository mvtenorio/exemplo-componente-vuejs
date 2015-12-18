<template lang="jade">

span.alert(:class="type")
  slot

</template>

<script>

export default {
  props: ['type']
}

</script>

<style lang="stylus">

default_color1 = #D3D3D3
default_color2 = #757575

success_color1 = #BCED91
success_color2 = #488214

info_color1 = #8DEEEE
info_color2 = #008B8B

warning_color1 = #FFEBCD
warning_color2 = #DC8909

danger_color1 = #EEB4B4
danger_color2 = #BE2625

.alert
  border solid default_color2 2px
  border-radius 4px
  color default_color2
  background default_color1
  padding 10px
  margin 2px

.success
  background success_color1
  color success_color2
  border-color success_color2

.info
  background info_color1
  color info_color2
  border-color info_color2

.warning
  background warning_color1
  color warning_color2
  border-color warning_color2

.danger
  background danger_color1
  color danger_color2
  border-color danger_color2

</style>
