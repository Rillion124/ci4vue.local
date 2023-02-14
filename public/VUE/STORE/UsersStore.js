const UsersStore = {
    state:{
        usersList:{
            0:{id:"1",name:"test",username:"dsadasdasd",email:"aaaaaa@mmmm.ru"}
        }
    },
    actions:{
        getUsersList(context){
            axios.get("https://jsonplaceholder.typicode.com/users/").then(res=>{
                context.commit('changeUsersList',res.data);
            });
        }
    },
    mutations:{
        changeUsersList(state, data){
            state.usersList = data;
            console.log(state.usersList);
        }
    },
    getters:{
        getUsersList(state){
            return state.usersList;
        }
    }

}