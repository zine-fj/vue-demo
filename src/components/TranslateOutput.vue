<template>
    <div class="tranlate-output">
        <h2>{{translatedText}}</h2>
    </div>
</template>

<script>
export default {
    name: 'tranlate-output',
    props: {
        translatedText: {
            type: String
        }
    }
}
</script>

<style>
    .tranlate-output {
        margin-top: 30px;
        font-size: 24px;
    }
</style>
