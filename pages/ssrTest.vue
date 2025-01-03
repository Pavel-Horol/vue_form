<script setup>
    definePageMeta({
        asyncData({params}) {
            return fetch(`https://jsonplaceholder.typicode.com/posts`)
                .then((res) => res.json())
                .then(data => {
                    return {
                        posts: data
                    }
                })
        }
    })
</script>


<template>
    <div>
        <h1>Blog post</h1>
        <ul>
            <li v-for="post in posts" :key="post.id">
                {{ post.title }}
            </li>
        </ul>
    </div>

</template>