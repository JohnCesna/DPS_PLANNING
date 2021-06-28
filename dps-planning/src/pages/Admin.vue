<template>
  <q-page class="flex flex-center">
  <q-btn color="white" text-color="black" label="Standard" />
  <Mdp/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { ref } from 'vue'
import Mdp from "components/Mdp_Pop.vue"

export default defineComponent({
  name: 'PageAdmin',

  components: {
       Mdp
  },

  setup () {
    return {
         
    }
  },


})
</script>
