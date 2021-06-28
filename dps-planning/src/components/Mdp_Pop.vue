<template>
  <q-dialog v-model="mdp_active" persistent transition-show="scale" transition-hide="scale">

        <q-card id="request" class="my-card">
          <q-btn class="num0"  color="primary" size="xl" :label="mdp_affichage" />
          <div>
          <q-btn class="num" @click="addMdp(1)" color="primary" size="xl" label="1" />
          <q-btn class="num" @click="addMdp(2)" color="primary" size="xl" label="2" />
          <q-btn class="num" @click="addMdp(3)" color="primary" size="xl" label="3" />
          </div>
          <div>
          <q-btn class="num" @click="addMdp(4)" color="primary" size="xl" label="4" />
          <q-btn class="num" @click="addMdp(5)" color="primary" size="xl" label="5" />
          <q-btn class="num" @click="addMdp(6)" color="primary" size="xl" label="6" />
          </div>
          <div>
          <q-btn class="num"  @click="addMdp(7)" color="primary" size="xl" label="7" />
          <q-btn class="num"  @click="addMdp(8)" color="primary" size="xl" label="8" />
          <q-btn class="num"  @click="addMdp(9)" color="primary" size="xl" label="9" />
          </div>
          <q-btn class="num0" @click="addMdp(0)"  color="primary" size="xl" label="0" />
                         
        <q-separator />

        <q-card-actions align="right">
          <q-btn :disable="mdp_disable" v-close-popup flat>Valider</q-btn>
          <q-btn v-close-popup flat>Annuler</q-btn>
        </q-card-actions>
      </q-card>
  </q-dialog>
</template>


<script>
import { ref } from 'vue'
import { toRefs } from 'vue'

export default {
  name: 'Mdp',
  
  props: { 
   'active': Boolean,
  },

  methods: {
    addMdp: function (value) {
      if (this.mdp_code.length <= 5)
      {
        this.mdp_code=this.mdp_code+value;
        this.mdp_affichage=this.mdp_affichage+"*";
      }
      if (this.mdp_code.length >= 6)
      {
        this.mdp_disable=false;
      }
    }
  },

  setup (props) {

    return {
      mdp_active: ref(props.active),
      mdp_affichage: ref(""),
      mdp_code: ref(""),
      mdp_disable: ref(true),
    }
  }
}
</script>


<style lang="sass" scoped>

  .num
    height: 10px
    width: 70px
    border: 1px solid #ffffff

  .num0
    height: 10px
    width: 210px
    border: 1px solid #ffffff

</style>
