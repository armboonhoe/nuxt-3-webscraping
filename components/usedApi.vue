<template>
    <div>
        <h1>ARM</h1>
    </div>
</template>
  
<script setup>
import { useWebsiteRanking } from '~/store/website-ranking';

/* import { useWebsiteRanking } from '~/store/setData' */
const store = useWebsiteRanking()
console.log(store)
</script>