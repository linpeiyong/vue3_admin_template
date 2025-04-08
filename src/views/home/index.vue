<!--
 * new page
 * @author: LinPeiYong
 * @since: 2024-10-10
 * index.vue
-->
<template>
    <div>
        {{ userStore.username }}
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import useUserStore from '@/store/modules/user';

let userStore = useUserStore();

onMounted(() => {
    userStore.userInfo();
});
</script>

<style scoped></style>
