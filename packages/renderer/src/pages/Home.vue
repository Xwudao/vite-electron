<template>
  <div class="home">homex</div>
  <div>
    <select v-model="locale">
      <option value="zh">zh</option>
      <option value="en">en</option>
    </select>
  </div>
  <div>{{ locale }}</div>
  <div class="messages">
    {{ t('language') }}
  </div>
  <div>
    <button @click="changeMenu">Click change menu</button>
  </div>
  <test-comp />
</template>
<script lang="ts">
import TestComp from '/@/components/TestComp.vue';
import { useElectron } from '/@/hooks/useElectron';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { CHANGE_MENU } from '../../../common/types';

export default defineComponent({
  name: 'Home',
  components: { TestComp },
  setup() {
    const { t, locale } = useI18n();
    const electron = useElectron();
    const changeMenu = () => {
      electron.ipcRenderer.send(CHANGE_MENU);
    };
    return {
      changeMenu,
      t,
      locale,
    };
  },
});
</script>
