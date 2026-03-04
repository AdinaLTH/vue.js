<template>
  <div class="container">
    <!-- 네임드 슬롯 -->
    <header>
      <slot name="header">
        <!-- 폴백 콘텐츠: 기본 템플릿 -->
        <span style="float: right"></span>
      </slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
