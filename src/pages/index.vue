<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">O que comer nesse sábado?</h1>
        <div class="container button-container">
          <b-button type="is-primary" class="primary-button">Sortear</b-button>
          <div class="separator">ou</div>
          <b-button type="is-primary" class="secondary-button" inverted
            >Editar lista</b-button
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  @include flex-around;
  flex-direction: column;
  height: 80%;
  position: relative;
}

.button-container {
  height: 40%;
  position: relative;
}

.title {
  text-align: center;
}

.primary-button {
  font-size: 1.7em;
}

.secondary-button {
  font-size: 1.2em;
}
</style>
