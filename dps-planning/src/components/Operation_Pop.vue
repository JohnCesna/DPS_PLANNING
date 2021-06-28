<template>
  <div class="q-pa-md row q-col-gutter-sm">
    <q-tree
      :nodes="simple"
      v-model:ticked="ticked"
      v-model:expanded="expanded"
      node-key="label"
      :tick-strategy='tickStrategy'
    />
  </div>
</template>


<script>
import { ref } from 'vue'
import { toRefs } from 'vue'

export default {
  name: 'Operation',
  
  props: { 
    'operation': String, 
  },

  setup (props) {

    console.log("props = "+JSON.stringify(props))

    return {

      expanded: ref(['Operation']),
      tickStrategy: ref('leaf'),
      ticked: ref(props.operation),
      
            simple: [
               {
                label: 'Operation',
                children: [
                    {
                    label: 'Etudes',
                    children: []
                    },
                    {
                    label: 'Decoupe',
                    children: [
                        {
                        label: 'Laser',
                        children: []
                        },
                        {
                        label: 'Poinconnage',
                        children: []
                        },
                        {
                        label: 'Cisaillage',
                        children: []
                        },
                        {
                        label: 'Scie a ruban',
                        children: []
                        },
                    ]
                    },
                    {
                    label: 'Usinage',
                    children: [
                        {
                        label: 'Taraudage',
                        children: []
                        },
                        {
                        label: 'Fraisage',
                        children: []
                        },
                    ]
                    },
                    {
                    label: 'Pliage',
                    children: []
                    },
                    {
                    label: 'Soudure',
                    children: []
                    },
                    {
                    label: 'Finition',
                    children: []
                    },
                ]
                }
            ]
     }
  }
}
</script>