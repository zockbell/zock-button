<template>
  <div id="app">
    <!-- 默认按钮 -->
    <h4>默认按钮</h4>
    <div class="button-icon">
      <zock-button @click="fnZock">默认按钮</zock-button>
      <zock-button type="primary" @click="fnZock">主要按钮</zock-button>
      <zock-button type="success" @click="fnZock">成功按钮</zock-button>
      <zock-button type="info" @click="fnZock">信息按钮</zock-button>
      <zock-button type="warning" @click="fnZock">警告按钮</zock-button>
      <zock-button type="danger" @click="fnZock">危险按钮</zock-button>
    </div>

    <!-- 朴素按钮 -->
    <h4>朴素按钮</h4>
    <div class="button-icon">
      <zock-button plain>朴素按钮</zock-button>
      <zock-button type="primary" plain>主要按钮</zock-button>
      <zock-button type="success" plain>成功按钮</zock-button>
      <zock-button type="info" plain>信息按钮</zock-button>
      <zock-button type="warning" plain>警告按钮</zock-button>
      <zock-button type="danger" plain>危险按钮</zock-button>
    </div>

    <!-- 圆角按钮 -->
    <h4>圆角按钮</h4>
    <div class="button-icon">
      <zock-button round>圆角按钮</zock-button>
      <zock-button type="primary" round>主要按钮</zock-button>
      <zock-button type="success" round>成功按钮</zock-button>
      <zock-button type="info" round>信息按钮</zock-button>
      <zock-button type="warning" round>警告按钮</zock-button>
      <zock-button type="danger" round>危险按钮</zock-button>
    </div>

    <!-- 禁用状态 -->
    <h4>禁用状态</h4>
    <div class="button-icon">
      <zock-button disabled>默认按钮</zock-button>
      <zock-button type="primary" disabled>主要按钮</zock-button>
      <zock-button type="success" disabled>成功按钮</zock-button>
      <zock-button type="info" disabled>信息按钮</zock-button>
      <zock-button type="warning" disabled>警告按钮</zock-button>
      <zock-button type="danger" disabled>危险按钮</zock-button>
    </div>

    <!-- 禁用状态 -->
    <h4>禁用朴素状态</h4>
    <div class="button-icon">
      <zock-button plain disabled>朴素按钮</zock-button>
      <zock-button type="primary" plain disabled>主要按钮</zock-button>
      <zock-button type="success" plain disabled>成功按钮</zock-button>
      <zock-button type="info" plain disabled>信息按钮</zock-button>
      <zock-button type="warning" plain disabled>警告按钮</zock-button>
      <zock-button type="danger" plain disabled>危险按钮</zock-button>
    </div>

    <!-- 字体图标按钮 -->
    <h4>字体图标按钮</h4>
    <div class="button-icon">
      <zock-button icon="iconsousuo" circle></zock-button>
      <zock-button type="primary" icon="iconbianji" circle></zock-button>
      <zock-button type="success" icon="iconGroup-" circle></zock-button>
      <zock-button type="info" icon="iconyouxiang" circle></zock-button>
      <zock-button type="warning" icon="iconxing" circle></zock-button>
      <zock-button type="danger" icon="iconiconfontshanchu4" circle></zock-button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
      fnZock() {
        alert('触发事件');
      }
  }
}
</script>

<style lang="scss">

</style>
