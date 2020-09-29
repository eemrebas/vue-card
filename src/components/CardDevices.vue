/* eslint-disable prettier/prettier */
<template>
  <div class="card-devices">
    <div class="card-devices-camera">
      <span class="card-devices-camera-span">Camera</span>
      <div class="card-devices-camera-option">
        <span class="card-devies-camera-option-span">Facetime HD Camera</span>
        <img
          src="https://www.upload.ee/image/12289724/select.png"
          class="card-devies-icon"
        />
      </div>
    </div>
    <div class="card-devices-speaker">
      <span class="card-devices-speaker-span">Speaker</span>
      <div class="card-devices-speaker-option">
        <span class="card-devies-speaker-option-span"
          >Built-in output (Headp...</span
        >
        <img
          src="https://www.upload.ee/image/12289724/select.png"
          class="card-devies-icon"
        />
      </div>
    </div>
    <div class="card-devices-camera">
      <span class="card-devices-microphone-span">Microphone</span>
      <div class="card-devices-microphone-option">
        <span class="card-devies-microphone-option-span"
          >Built-in microphone (E...</span
        >
        <img
          src="https://www.upload.ee/image/12289724/select.png"
          class="card-devies-icon"
        />
      </div>
    </div>
    <div class="card-devices-soundtest">
      <span class="card-devices-soundtest-span">Sound Test</span>
      <button class="card-devices-soundtest-button">Play Sound</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-devices {
  margin-top: 18px;
}
/* camera, speaker, microphone */
.card-devices-camera,
.card-devices-speaker,
.card-devices-microphone,
.card-devices-soundtest {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 8px 0px;
  height: 48px;
}
.card-devices-camera-span,
.card-devices-speaker-span,
.card-devices-microphone-span,
.card-devices-soundtest-span {
  font-size: 15px;
  line-height: 18px;
  color: #222222;
}
.card-devices-camera-option,
.card-devices-speaker-option,
.card-devices-microphone-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  width: 236px;
  height: 48px;
  border: 1px solid #b9c3d5;
  border-radius: 8px;
  background: #ffffff;
}
.card-devies-camera-option-span,
.card-devies-speaker-option-span,
.card-devies-microphone-option-span {
  width: 176px;
  overflow: hidden;
}

/* icon */
.card-devies-icon {
  height: 6.75px;
  width: 9px;
}

/* soundtest button */
.card-devices-soundtest-button {
  width: 236px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #3488fa;
  background: #ffffff;
  color: #3488fa;
}
</style>
