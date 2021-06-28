<template>
    <q-table
        style="height: 800px"
        title="Client"
        :rows="clients"
        :columns="columns"
        row-key="client"
        virtual-scroll            
    />
</template>


<script>
import { ref } from 'vue'
import { toRefs } from 'vue'

const columns = [
  {
    name: 'client',
    required: true,
    label: 'Client',
    align: 'left',
    field: clients => clients.name,
    format: val => `${val}`,
    sortable: true
  },
]

const clients = [
  {
    name: 'METALU',
  },
  {
    name: 'MSET',
  },
  {
    name: 'SMSE',
  },
  {
    name: 'DPS',
  },
  {
    name: 'JOHN',
  },
    {
    name: 'METALU',
  },
  {
    name: 'MSET',
  },
  {
    name: 'SMSE',
  },
  {
    name: 'DPS',
  },
  {
    name: 'JOHN',
  },
    {
    name: 'METALU',
  },
  {
    name: 'MSET',
  },
  {
    name: 'SMSE',
  },
  {
    name: 'DPS',
  },
  {
    name: 'JOHN',
  },
    {
    name: 'METALU',
  },
  {
    name: 'MSET',
  },
  {
    name: 'SMSE',
  },
  {
    name: 'DPS',
  },
  {
    name: 'JOHN',
  },
    {
    name: 'METALU',
  },
  {
    name: 'MSET',
  },
  {
    name: 'SMSE',
  },
  {
    name: 'DPS',
  },
  {
    name: 'JOHN',
  },
    {
    name: 'METALU',
  },
  {
    name: 'MSET',
  },
  {
    name: 'SMSE',
  },
  {
    name: 'DPS',
  },
  {
    name: 'JOHN',
  },
  
]

export default {
  name: 'ListeClient',
  
  props: { 
   'active': Boolean,
  },

  setup (props) {

    return {
      activated: ref(props.active),
      clients,
      columns,
    }
  }
}
</script>