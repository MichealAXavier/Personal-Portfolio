import { defineStore } from "pinia";
export const useMyStore = defineStore('mystore',{
    id:'person',
    state: () => (
        {
            savePerson:{}

        }
    ),

    actions: {
        addPerson(user) {
            this.savePerson =  user
        },
        clearPerson() {
            this.savePerson = {}
        }
    }

})