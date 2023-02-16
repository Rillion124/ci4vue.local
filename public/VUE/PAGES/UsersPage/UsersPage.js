const UsersPage = {
    name:`UsersPage`,
    template:`
    <div>
        <vc-select
            :options="[
                {id: 1, title: 'Moscow'}, 
                {id: 2, title: 'Krsk'}, 
                {id: 3, title: 'Achinsk'}, 
                {id: 4, title: 'Tayshet'}, 
            ]"
            :default="'123'"
            :isMiltiselect='true'
            :nameSelect="'Выбрать город'"
        >
        </vc-select>
        <vc-select
            :options="[
                {id: 1, title: 'Moscow'}, 
                {id: 2, title: 'Krsk'}, 
                {id: 3, title: 'Achinsk'}, 
                {id: 4, title: 'Tayshet'}, 
            ]"
            :default="'123'"
            :isMiltiselect='true'
            :nameSelect="'В город'"
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