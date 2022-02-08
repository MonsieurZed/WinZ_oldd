<template>
  <div class="landing-page">
    <div class="landing-page-content">
      <div class="left-content">
        <button class="button primary-button configuration">
          <img
            class="button-ico big-ico"
            src="../assets/icos/landing-page/configuration_white.png"
          />
          <span>Configuration</span>
        </button>
      </div>

      <div class="right-content">
        <button class="button about">
          <img
            class="button-ico small"
            src="../assets/icos/landing-page/about_black.png"
          />
          <span>About WinZ</span></button
        ><button class="button small feedback">
          <img
            class="button-ico"
            src="../assets/icos/landing-page/feedback_black.png"
          />
          <span>Feedback</span>
        </button>
      </div>

      <button class="button wide submit-config" @click="toto">
        <span>Import Configuration</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toto() {
      console.log("toto");
    },
  },
};
</script>

<style lang="scss" scoped>
.landing-page {
  height: calc(100vh - 100px);
  background: #fff9f9;
  position: relative;
}

.landing-page-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 50%;
  display: flex;
  flex-wrap: wrap;

  & span {
    font-family: "Poppins", sans-serif;
    font-weight: 800;
  }

  & button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #fff9f9;
    border: none;
  }

  & .primary-button {
    flex-direction: column;
    width: 240px;
    height: 240px;
    background: linear-gradient(180deg, #b93299 0%, #ef0a6a 100%);
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 36px;
    font-size: 24px;
  }

  & .wide {
    width: 100%;
    height: 50px;
    background: transparent;
    border: 2px solid #212121;

    & span {
      color: #212121;
    }
  }

  & .button-ico {
    height: 50px;
  }

  & .big-ico {
    height: 100px;
    margin-top: 20px;
  }
}
</style>
