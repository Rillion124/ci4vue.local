app.component('vc-select',{
    name:`vc-select`,
    template:`
        <div class="custom-select" v-clickoutside = "this">
            <div class="selected" :class="{ open: open }" @click="open = !open">
                    {{ selected }}
            </div>
            <div :class="{ selectHide: !open }" class='items'>
                <div
                    class='items_container'
                    v-for="(option, i) of options"
                    :key="i"
                >
                <input :id="this.nameSelect.replaceAll(' ', '_') + i" v-show='isMiltiselect' type='checkbox'>
                    <label @click="clickItem(option)" :for="this.nameSelect.replaceAll(' ', '_') + i">{{ option.title }}</label>
                </div>
            </div>
        </div>
    `,
    props: {
        options: {
            type: Array,
            required: true,
        },
        default: {
            type: String,
            required: false,
            default: null,
        },
        isMiltiselect: {
            type: Boolean,
            required: false,
            default: false
        },
        nameSelect: {
            type: String,
            required: false,
            default: ''
        }
    },
    data(){
        return{
            selected: this.default
            ? this.default
            : this.options.length > 0
            ? this.options[0]
            : null,
            open: false,
            result: {},
            name_id: ''
        };
    },
    mounted() {
        this.$emit("input", this.selected);
        this.name_id = this.nameSelect.replaceAll(' ', '_')
    },
    methods: {
        clickItem(item) {
            this.showSelected(item);
            this.changeResult(item);
        },
        showSelected(item) {
            this.selected = item.title;
        }, 
        changeResult(item) {
            if (this.isMiltiselect) {
                if (Object.hasOwn(this.result, item.id)) {
                    delete this.result[item.id];
                  } else {
                    this.result[item.id] = item;
                  }
            } else {
                this.result = item;
            }
            console.log(this.result);
        },
        hideItem() {
            this.open = false;
        }
    }
});