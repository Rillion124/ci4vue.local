app.component('vc-select',{
    name:`VCSelect`,
    template:`
    <div class="vc-select" @click="showList">

        
    </div>
    <div v-show='visibleList' class='vc-select-options'>
        <p>elemetn1</p>
        <p>elemetn1</p>
        <p>elemetn1</p>
    </div>
    `,
    props:['listOptions'],
    data(){
        return{
            visibleList:false
        }
    },
    methods:{
        showList(){
            this.visibleList = !this.visibleList;
        }
    },
});