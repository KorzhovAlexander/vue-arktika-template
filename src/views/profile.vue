<template>
  <div>
    <h2 class="content-block">Профиль</h2>

    <div class="content-block dx-card responsive-paddings">
      <div class="form-avatar">
        <img :src="imageSrc" />
      </div>
      <span>{{ formData.Notes }}</span>
    </div>

    <div class="content-block dx-card responsive-paddings">
      <dx-form
        id="form"
        label-location="top"
        col-count="auto"
        :form-data="formData"
        :min-col-width="233"
      />
    </div>
  </div>
</template>

<script>
import DxForm from "devextreme-vue/form";

export default {
  props: {
    picture: String
  },
  data() {
    const picture = "images/employees/06.png";
    return {
      imageSrc: `https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/${picture}`,
      formData: {
        ID: 7,
        FirstName: "Сандра",
        LastName: "Джонсон",
        Prefix: "Мис.",
        Position: "Оператор",
        Picture: picture,
        BirthDate: new Date("1974/11/15"),
        HireDate: new Date("2005/05/11"),
        Notes:

          "Сандра является CPA и была нашим оператором с 2008 года. " +
          "Она любит общаться с персоналом, поэтому, если вы с ней не встречались, обязательно скажите привет." +
          "\r\n\r\n" +
          "У Сандры есть 2 дочери, обе из которых являются опытными гимнастками.",
        Address: "4600 N Virginia Rd."
      }
    };
  },
  components: {
    DxForm
  }
};
</script>

<style lang="scss">
.form-avatar {
  float: left;
  height: 120px;
  width: 120px;
  margin-right: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff;
  overflow: hidden;

  img {
    height: 120px;
    display: block;
    margin: 0 auto;
  }
}
</style>
