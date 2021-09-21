<template>
  <div>
        <router-view />
    </div>
</template>

<script>
import tabs from './components/tabs.vue';
export default {
    name:"app",
    components:{
        tabs,
        }
}
</script>
