<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          DPS Planning
        </q-toolbar-title>

        <q-space />

        <div class="text-h6">V1.0.0</div>
        <q-icon size="lg" :name="connection" color="white" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-7"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-3"
        >
          Menu
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container @userSelect="userUpdate">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'




import { defineComponent, ref } from 'vue'


export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  computed:{

    connection() {
      return this.$store.state.connection.statut
    },

    essentialLinks() {
      return [
        {
          title: 'Login',
          caption: 'quasar.dev',
          icon: 'people',
          activate: true,
          link: 'login'
        },
        {
          title: 'Admin',
          caption: 'github.com/quasarframework',
          icon: 'admin_panel_settings',
          activate: this.$store.state.user.userSelected.admin,
          link: 'admin'
        },
        {
          title: 'Gestionnaire',
          caption: 'github.com/quasarframework',
          icon: 'add_circle',
          activate: this.$store.state.user.userSelected.gestionnaire,
          link: 'gestionnaire'
        },
        {
          title: 'Recherche',
          caption: 'github.com/quasarframework',
          icon: 'search',
          activate: this.$store.state.user.userSelected.recherche,
          link: 'recherche'
        },
        {
          title: 'Planning',
          caption: 'github.com/quasarframework',
          icon: 'date_range',
          activate: this.$store.state.user.userSelected.production,
          link: 'planning'
        },
        {
          title: 'En cours',
          caption: 'chat.quasar.dev',
          icon: 'today',
          activate: this.$store.state.user.userSelected.production,
          link: 'encours'
        },
        {
        title: 'Fini',
        caption: 'chat.quasar.dev',
        icon: 'event_available',
        activate: this.$store.state.user.userSelected.production,
        link: 'finis'
        },
      ]
    }
    
  },

  methods: {
    userUpdate(user){
      console.log(user);
    }
    
  },

  setup () {

    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  },
  
  mounted() {

    setTimeout(()=>{
      
        if(this.$socket.connected){
        this.$store.commit('connection/CONNECTION_ON')
        console.log("connection value = "+this.$store.state.connection.statut)
        }else{
          this.$store.commit('connection/CONNECTION_OFF')
          console.log("connection value = "+this.$store.state.connection.statut)
        }

    }, 1000)        
  }

})
</script>
