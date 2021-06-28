export function USER_UPDATE(state,value) {

    state.userSelected.lastname=value.lastname;
    state.userSelected.firstname=value.firstname;
    state.userSelected.poste=value.poste;
    state.userSelected.admin=value.admin;
    state.userSelected.gestionnaire=value.gestionnaire;
    state.userSelected.recherche=value.recherche;
    state.userSelected.production=value.production;
    state.userSelected.activate=value.activate;

}

/*
export function USER_LIST_UPDATE(state,value) {

    let user=[]
        
        //send request serveur sql user
        this.$socket.emit("login");
        //reception request serveur sql user
        this.$socket.on('login-return', (value) => {
            
            value.forEach(element => {
              //convertion of boolean
              const result = {
                id: element.id,
                lastname: element.lastname,
                firstname: element.firstname,
                poste: element.poste,
                admin: !!element.admin,
                gestionnaire: !!element.gestionnaire,
                recherche: !!element.recherche,
                production: !!element.production,
                activate: !!element.activate,
                }
    
                user.push(result); 
            });
        });
        
       
        

    state.userList=user;
    
}
*/
