<template>
  <hr />
  <h1>TestComp</h1>
  Language: {{ t('language') }}
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'TestComp',
  setup() {
    const state = reactive({});
    const { t } = useI18n();
    return { t, ...toRefs(state) };
  },
});
</script>

<style lang="scss" scoped></style>
