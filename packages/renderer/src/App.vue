<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useMyI18n from '/@/hooks/useMyI18n';

export default defineComponent({
  name: 'App',
  setup() {
    useMyI18n();
    return {};
  },
});
</script>
