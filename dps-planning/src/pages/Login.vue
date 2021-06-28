<template>
    <q-page class="flex flex-center">
      <div class="row q-gutter-md justify-center">  
        <User
          @userSelect="updateUser"
          v-for="items in userList"
          :key="items.id"
          v-bind="items"
        />
      </div>
      <Mdp :active="active_mdp"/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import User from 'components/User.vue';
import Mdp from 'components/Mdp_Pop.vue';

export default defineComponent({
  name: 'PageLogin',

  components: {
       User,
       Mdp
  },

  data() {
    return {
      userList: [],
      active_mdp: false,
    }
  },

  mounted() {
    
    //send request serveur sql user
    this.$socket.emit("login");
    //reception request serveur sql user
    this.$socket.on('login-return', (value) => {
        this.userList.splice(0);
        this.userList.push(value);
        console.log(this.userList)        
    });
        

  },

  updated() {
    this.$nextTick(function () {

    })
  },

  methods: {
    updateUser(user){
      console.log("user is :"+user)
      this.$store.commit('user/USER_UPDATE',user);
    }
    
  }

})
</script>
