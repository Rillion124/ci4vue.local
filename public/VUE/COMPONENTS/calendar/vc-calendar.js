app.component('vc-calendar',{
    name:`vc-calendar`,
    template:`
    <div class='vc-calendar'> 
        <div v-show='visibleChangeDate' class='vc-calendar-div-inputs'>
            <div class='vc-calendar-input'>
                <div @click='showInputs' v-show='!visibleInput' class='ph'>Дата от</div>
                <input v-show='visibleInput' type='date'>
            </div>
            <div>-</div>
            <div class='vc-calendar-input'>
                <div @click='showInputs' v-show='!visibleInput' class='ph'>Дата до</div>
                <input v-show='visibleInput' type='date'>
            </div>
        </div>
        <div class='title-btn'>
            вч . сег
        </div>
        <div v-show='!visibleChangeDate' class='changeDate'>

        </div>
    </div>
    `,
    data(){
        return{
            visibleInput:false,
            visibleChangeDate:false
        }
    },
    methods:{
        showInputs(){
            this.visibleInput = !this.visibleInput;
        }
    }
});