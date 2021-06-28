<template>
  <q-card id='user' v-if="activate" v-on:click="userClick" v-ripple class="my-card cursor-pointer q-hoverable">
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar2.jpg">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{lastname}}</q-item-label>
        <q-item-label >{{firstname}}</q-item-label>
      </q-item-section>
    </q-item>

    <img src="https://cdn.quasar.dev/img/parallax2.jpg">
  </q-card>

  
</template>

<script>
import { defineComponent } from 'vue'




export default defineComponent({
  name: 'User',

  emits: ["userSelect"],

  props: {
    id: {
      type: Number,
      required: true
    },    
    lastname: {
      type: String,
      required: true
    },
    firstname: {
      type: String,
      required: true
    },
    poste: {
      type: Number,
      required: true
    },
    admin: {
      type: Boolean,
      required: true
    },
    
    gestionnaire: {
      type: Boolean,
      required: true
    },

    recherche: {
      type: Boolean,
      required: true
    },

    production: {
      type: Boolean,
      required: true
    },

    activate: {
      type: Boolean,
      required: true
    },
  
    icon: {
      type: String,
      default: ''
    }
  },


  methods: {
    
    userClick(){
      this.$emit("userSelect",this.$props)
    }

  }


})
</script>

<style lang="sass" scoped>

  .my-card
    height: 250px
    width: 250px
    border: 4px solid #cf0000

</style>


