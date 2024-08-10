<template>
    <div>
        <p>{{ message }}</p>
    </div>
</template>
<script lang="ts">
    export default {
        props: {
            message: {
                type: String,
                required: true,
                validator: function(value: string) {
                    return value.length > 5
                }
            }
        }
    }
</script>

<style scoped>
</style>