<script>
  import {
    SeuRow,
    SeuCol,
  } from '/Users/koory1st/dev/01_webdev/svelte/svelte-element-ui/dist/index.js';
</script>

<style>
  :global(.seu-row) {
    margin-bottom: 20px;
  }
  .seu-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

<h1>基础布局</h1>
<SeuRow>
  <SeuCol span="24">
    <div class="grid-content bg-purple-dark" />
  </SeuCol>
</SeuRow>
<SeuRow>
  <SeuCol span="12">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="12">
    <div class="grid-content bg-purple-light" />
  </SeuCol>
</SeuRow>
<SeuRow>
  <SeuCol span="8">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="8">
    <div class="grid-content bg-purple-light" />
  </SeuCol>
  <SeuCol span="8">
    <div class="grid-content bg-purple" />
  </SeuCol>
</SeuRow>
<SeuRow>
  <SeuCol span="6">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="6">
    <div class="grid-content bg-purple-light" />
  </SeuCol>
  <SeuCol span="6">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="6">
    <div class="grid-content bg-purple-light" />
  </SeuCol>
</SeuRow>
<SeuRow>
  <SeuCol span="4">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="4">
    <div class="grid-content bg-purple-light" />
  </SeuCol>
  <SeuCol span="4">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="4">
    <div class="grid-content bg-purple-light" />
  </SeuCol>
  <SeuCol span="4">
    <div class="grid-content bg-purple" />
  </SeuCol>
  <SeuCol span="4">
    <div class="grid-content bg-purple-light" />
  </SeuCol>
</SeuRow>
