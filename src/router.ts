import TestWidth from "./views/TestWidth.vue";
import About from "./views/About.vue";
import Editor2 from "./views/Editor2.vue";
import GiftList from "./views/GiftList.vue";
import CustomDatePicker from "./views/CustomDatePicker.vue";
import { RouteNames } from "./consts.ts";

export const routes = [
  // { path: "/", component: TableCheckbox },
  // { path: "/", component: SortYourGifts },
  { path: "/", component: TestWidth },
  { path: "/about", component: About },
  { path: "/editor", component: Editor2 },
  { path: RouteNames.GIFT_LIST, component: GiftList },
  { path: RouteNames.DATE_PICKER, component: CustomDatePicker },
];
