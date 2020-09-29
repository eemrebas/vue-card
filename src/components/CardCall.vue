<template>
  <div class="card-info">
    <span class="card-info-span">Call With</span>
    <h3 class="card-info-h3">Niloya Kayıkçı</h3>
    <div class="card-info-date">
      <div class="card-info-date-day">
        <img
          src="https://www.upload.ee/image/12289712/date-blue.png"
          class="card-info-date-day-img"
        />
        <span class="card-info-date-day-span">7 Oct, Weds</span>
      </div>
      <div class="card-info-date-time">
        <img
          src="https://www.upload.ee/image/12289708/clock-blue.png"
          class="card-info-date-time-img"
        />
        <span class="card-info-date-time-span">10:15AM - 10:30AM</span>
      </div>
    </div>
    <div class="card-info-timezone">
      <span class="card-info-timezone-span">Timezone:Europe/Amsterdam</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCall"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-info-span {
  color: #3488fa;
  font-size: 13px;
  line-height: 16px;
}
.card-info-h3 {
  font-size: 24px;
  line-height: 29px;
  padding: 4px 0px;

  color: #222222;
}

.card-info-date {
  width: 304px;
  height: 50px;
  border: 1px solid #b9c3d5;
  border-radius: 8px;
  margin-top: 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 16px;

  font-size: 13px;
}
.card-info-date-day {
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-info-date-day-img {
  height: 15px;
  width: 13.5px;
  margin-right: 8px;
  color: #3488fa;
}
.card-info-date-day-span {
  font-size: 13px;
  min-width: 75px;
  line-height: 16px;
}

.card-info-date-time {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 24px;
}
.card-info-date-time-img {
  height: 15px;
  width: 13.5px;
  margin-right: 8px;
  color: #3488fa;
}
.card-info-date-time-span {
  font-size: 13px;
  min-width: 75px;
  line-height: 16px;
}

/* timezone */
.card-info-timezone {
  margin-top: 8px;
  margin-bottom: 12px;

  font-size: 13px;
  line-height: 16px;
  color: #818b9d;
  font-weight: 400;
}
</style>
