<template>
  <div class="card-contact">
    <div class="card-contact-top">
      <div class="card-contact-buttons">
        <button class="card-contact-buttons-1">
          <img
            src="https://www.upload.ee/image/12289722/microphone.png"
            class="card-contact-buttons-1-img"
          />
        </button>
        <button class="card-contact-buttons-2">
          <img
            src="https://www.upload.ee/image/12289715/camera.png"
            class="card-contact-buttons-2-img"
          />
        </button>
        <button class="card-contact-buttons-3">
          <img
            src="https://www.upload.ee/image/12289720/settings.png"
            class="card-contact-buttons-3-img"
          />
        </button>
      </div>
    </div>
    <div class="card-contact-bottom">
      <div class="card-contact-bottom-user">
        <img
          src="https://www.upload.ee/image/12289706/user.png"
          class="card-contact-bottom-user-img"
        />
        <span class="card-contact-bottom-user-span">Emre Baş</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-contact-top {
  background-image: url("https://images.unsplash.com/photo-1563248095-08d8b249ea69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80");
  background-size: cover;
  border-radius: 8px;
  height: 192px;
  margin: 12px 0px;
}
.card-contact-buttons {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 12px;
  height: 192px;
}
.card-contact-buttons-1 {
  height: 48px;
  width: 48px;
  background-color: #f4f7fa;
  border: 1px solid #fff;
  margin-right: 12px;
  border-radius: 999px;
}
.card-contact-buttons-1-img {
  height: 16px;
}
.card-contact-buttons-2 {
  height: 48px;
  width: 48px;
  background-color: #f4f7fa;
  border: 1px solid #fff;
  margin-right: 12px;
  border-radius: 999px;
}
.card-contact-buttons-2-img {
  height: 16px;
}
.card-contact-buttons-3 {
  height: 48px;
  width: 48px;
  background-color: #f4f7fa;
  border: 1px solid #fff;
  border-radius: 999px;
}
.card-contact-buttons-3-img {
  height: 16px;
}

.card-contact-bottom-user {
  height: 48px;
  display: flex;
  flex-direction: row;
  border: 1px solid #b9c3d5;
  border-radius: 8px;
  padding: 15px 21px;
}
.card-contact-bottom-user-img {
  height: 18px;
  margin-right: 12px;
}
.card-contact-bottom-user-span {
  font-size: 15px;
  line-height: 18px;
  color: #222222;
}
</style>
