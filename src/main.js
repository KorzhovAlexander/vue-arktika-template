import 'devextreme/dist/css/dx.common.css';
import './themes/generated/theme.base.css';
import './themes/generated/theme.additional.css';
import Vue from "vue";

import App from "./App";
import router from "./router";
import appInfo from "./app-info";

Vue.config.productionTip = false;
Vue.prototype.$appInfo = appInfo;

/**
 * Русификация DevExtreme компонентов.
 */
import {locale, loadMessages} from 'devextreme/localization';
import ruMessages from 'devextreme/localization/messages/ru.json';


loadMessages(ruMessages);
locale('ru');

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
