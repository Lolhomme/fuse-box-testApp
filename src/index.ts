import Vue from 'vue';
import Hello from './components/HelloWorld.vue'

new Vue ({
    el: '#app',
    render(createElement) {
        return createElement(Hello);
    }
})