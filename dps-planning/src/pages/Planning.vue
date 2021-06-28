<template>
  <q-page class="flex flex-center">

    <div id="test1" class="row">
      <div id="test" class="col-6">
        <div class="full-height full-width row">
          <div id="test" class="col-6">
          </div>
          <div id="test" class="col-6">
          </div>
        </div>
      </div>
      <div id="test" class="col-6">2</div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PagePlanning'
})
</script>

<style lang="sass" scoped>

  #test
    border: 4px solid #cf0000

  #test1
    border: 4px solid #cf0000
    height: 500px
    width: 100%



</style>
