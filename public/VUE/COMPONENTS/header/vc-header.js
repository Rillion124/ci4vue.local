app.component('vc-header',{

    template:`
    <div class='header'>
    {{ this.title }}
       <router-link to='/output-products/month'>outputProducts - Month</router-link><br>
       <router-link to='/output-products/week'>outputProducts - Week</router-link>
    </div>
    `,
    computed:{
        title(){
            return this.$store.getters.getTitle;
        }
    }
    
});