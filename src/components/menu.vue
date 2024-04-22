<script setup>
import { RouterLink} from 'vue-router';
import { onMounted, ref } from 'vue';

const props = defineProps({
    "titulo":String,
    "links":Array,
})

</script>

<template>
    <nav>
        <RouterLink
         v-for="enlace in props.links"
         :key="enlace"
         :to="{ name: enlace }">
           <span class="enlace-menu"> {{ enlace }} </span>
        </RouterLink>        
    </nav>
</template>

<style scoped>

span.enlace-menu{
    display:inline-block;
    width: 50%;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color:#000;

    text-align:center;
    color:#fff;    
}
span.enlace-menu:hover{
    background-color:#fff;
    color:#000;
}
nav{
    margin-bottom: 2vh;
}
.user{
    float: right;
}

</style>