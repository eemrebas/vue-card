<template>
  <div id="app">
    <CardCall />
    <CardContact />
    <CardDevices />
    <CardJoin />
  </div>
</template>

<script>
import CardCall from "./components/CardCall.vue";
import CardContact from "./components/CardContact.vue";
import CardDevices from "./components/CardDevices.vue";
import CardJoin from "./components/CardJoin.vue";

export default {
  name: "App",
  components: {
    CardCall,
    CardContact,
    CardDevices,
    CardJoin
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  margin-top: 55px;

  position: absolute;
  width: 384px;

  background-color: var(--backgroundColor);

  border-radius: 16px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
}
</style>
