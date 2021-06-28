<template>
  <q-page class="flex flex-center">

    <div class="row q-pa-md q-gutter-md">

         
     

        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Gestionnaire de dossier</div>
          </q-card-section>

          <q-separator />

          <q-card-actions vertical>
            <q-btn flat @click="card = true">Ajouter</q-btn>
            <q-btn flat @click="card = true">Modifier</q-btn>
            <q-btn flat @click="card = true">Suprimer</q-btn>
          </q-card-actions>
        </q-card>

          

        <q-separator vertical/>

          <q-card class="my-card">
            <q-card-section>
              <div class="text-h6">Gestionnaire de client</div>
            </q-card-section>

            <q-separator />

            <q-card-actions vertical>
              <q-btn flat>Ajouter</q-btn>
              <q-btn flat>Modifier</q-btn>
              <q-btn flat>Suprimer</q-btn>
            </q-card-actions>
          </q-card>
      </div>

        
          <q-dialog v-model="card" persistent>
            <q-card id="request" class="my-card">

              <div class="row">
                  <q-card-section class="q-gutter-md">
                    <div class="text-h6">Client</div>
                    <q-select standout v-model="model" :options="options" @filter="filterFn" use-input input-debounce="0">
                              <template v-slot:no-option>
                              <q-item>
                                <q-item-section class="text-grey">
                                  No results
                                </q-item-section>
                              </q-item>
                            </template>
                    </q-select>
                    <div class="text-h6">Delai client</div>
                    <q-input outlined v-model="text" type="date"></q-input>

                    
                  </q-card-section>

                  <q-separator />

                  <q-card-section class="q-gutter-md">
                    <div class="text-h6">Commande</div>
                    <q-input standout v-model="text"/>
                    <div class="text-h6">Delai interne</div>
                    <q-input outlined v-model="text" type="date"></q-input>

                  </q-card-section>
               </div>

            <q-separator />

            <Operation :operation = operations></Operation>

            <q-separator />

            <q-card-actions align="right">
              <q-btn v-close-popup flat>Valider</q-btn>
              <q-btn v-close-popup flat>Annuler</q-btn>
            </q-card-actions>
          </q-card>
      </q-dialog>

      <ListeClient />

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { ref } from 'vue'
import Operation from 'components/Operation_Pop.vue';
import ListeClient from 'components/ListeClient.vue';





const stringOptions = [
  'METALU', 'MSET', 'SMSE', 'DPS', 'JOHN'
]


export default defineComponent({
  name: 'PageGestionnaire',

  components: {
       Operation,
       ListeClient
  },


  setup () {

    const options = ref(stringOptions)
    const operations = ref(['Laser','Pliage','Soudure'])

    return {
      hex: ref('#FF00FF'),
      card: ref(false),
      stringOptions,
      options,
      operations,

      filterFn (val, update) {
        if (val === '') {
          update(() => {
            options.value = stringOptions
          })
          return
        }

        update(() => {
          const needle = val.toLowerCase()
          options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
        })
      }

    }
  },

  data(){
    return{

      text:'',
      teal: false,
      red:true,
      model: null,
      
      
    }
  }

  })
</script>

<style lang="sass" scoped>

  .my-card
    border: 4px solid #cf0000
    height: 200px

  #request
    min-width: 300px

</style>