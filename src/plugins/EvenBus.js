/* eslint-disable no-console */
import Vue from 'vue'

export const EventBus = new Vue({
    methods: {
        emit(eventName, eventPyload) {
            console.log(this)
            this.eventPyload = this.$store.getters.questions;
            this.$emit(eventName, eventPyload);
        },
        on(eventName, callback) {
            this.$on(eventName, callback);
        },
        off(eventName) {
            this.$off(eventName);
        }
    }
})

export function setupEvenBus() {
    Object.defineProperties(Vue.prototype, {
        $bus: {
            get: () => { return EventBus }
        }
    })
}