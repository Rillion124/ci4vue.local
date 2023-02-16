const UsersPage = {
    name:`UsersPage`,
    template:`
    <div>
        <vc-select
            :options="['123', '456', '789', '9']"
            :default="'123'"
        >
        </vc-select>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                <tr @click="qwe(item)" v-for="(item,index) in this.usersList">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.username }}</td>
                    <td>{{ item.email }}</td>
                </tr>
            </tbody>
        </table>
        <input v-model='inputField' type='text'><span>{{ this.inputField }}</span>

    </div>
    `,
    data(){
        return {
            inputField:""
        }
    },
    mounted(){
        this.$store.dispatch('getUsersList');
    },
    methods:{
        qwe(item){
            alert(item.name);
        },
        
    },
    computed:{
        usersList(){
            return this.$store.getters.getUsersList;
        }
    }
}