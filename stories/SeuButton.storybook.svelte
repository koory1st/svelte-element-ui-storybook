<script>
  import {
    SeuRow,
    SeuButton,
  } from '/Users/koory1st/dev/01_webdev/svelte/svelte-element-ui/dist/index.js';
</script>

<style>

</style>

<SeuRow>
  <SeuButton>默认按钮</SeuButton>
  <SeuButton type="primary">主要按钮</SeuButton>
  <SeuButton type="success">成功按钮</SeuButton>
  <SeuButton type="info">信息按钮</SeuButton>
  <SeuButton type="warning">警告按钮</SeuButton>
  <SeuButton type="danger">危险按钮</SeuButton>
</SeuRow>

<SeuRow>
  <SeuButton plain>朴素按钮</SeuButton>
  <SeuButton type="primary" plain>主要按钮</SeuButton>
  <SeuButton type="success" plain>成功按钮</SeuButton>
  <SeuButton type="info" plain>信息按钮</SeuButton>
  <SeuButton type="warning" plain>警告按钮</SeuButton>
  <SeuButton type="danger" plain>危险按钮</SeuButton>
</SeuRow>

<SeuRow>
  <SeuButton round>圆角按钮</SeuButton>
  <SeuButton type="primary" round>主要按钮</SeuButton>
  <SeuButton type="success" round>成功按钮</SeuButton>
  <SeuButton type="info" round>信息按钮</SeuButton>
  <SeuButton type="warning" round>警告按钮</SeuButton>
  <SeuButton type="danger" round>危险按钮</SeuButton>
</SeuRow>

<SeuRow>
  <SeuButton icon="seu-icon-search" circle />
  <SeuButton type="primary" icon="seu-icon-edit" circle />
  <SeuButton type="success" icon="seu-icon-check" circle />
  <SeuButton type="info" icon="seu-icon-message" circle />
  <SeuButton type="warning" icon="seu-icon-star-off" circle />
  <SeuButton type="danger" icon="seu-icon-delete" circle />
</SeuRow>
