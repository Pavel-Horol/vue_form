<script setup>
definePageMeta({
    layout: 'auth',
})
const txt = ref('hello')
const myHtml = ref('<h1>Hello world from hwml</h1>')
setTimeout(() => {
    txt.value = 'hello world'
}, 2000)
</script>

<template>
    <div v-cloak>
        <div v-html="myHtml"></div>
        <h1 v-text="txt"></h1>
        <h2 v-once>{{ txt }}</h2>
        <h2 v-pre>{{ txt }}</h2>
    </div>
</template>
