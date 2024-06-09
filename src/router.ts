import TestWidth from "./views/TestWidth.vue";
import About from "./views/About.vue";
import Editor2 from "./views/Editor2.vue";
import GiftList from "./views/GiftList.vue";
import CustomDatePicker from "./views/CustomDatePicker.vue";
import InputCurrency from "./views/InputCurrency.vue";
import SendGiftPage from "./views/SendGifts/SendGiftPage.vue";
import MentionText from "./views/MentionText/MentionText.vue";
import LayoutSendGiftPage from "./views/SendGifts/LayoutSendGiftPage.vue";
import PreviewStep from "./views/SendGifts/PreviewStep.vue";
import { RouteNames } from "./consts.ts";
import FirstScreen from "./FirstScreen.vue";

export const routes = [
  // { path: "/", component: TableCheckbox },
  // { path: "/", component: SortYourGifts },
  // { path: "/", component: TestWidth },
  { path: "/", component: FirstScreen },
  { path: "/about", component: About },
  { path: "/editor", component: Editor2 },
  { path: RouteNames.GIFT_LIST, component: GiftList },
  { path: RouteNames.DATE_PICKER, component: CustomDatePicker },
  { path: RouteNames.INPUT_CURRENCY, component: InputCurrency },
  { path: RouteNames.MENTIONS, component: MentionText },

  {
    path: RouteNames.SEND_GIFTS,
    component: SendGiftPage,
  },

  {
    path: RouteNames.SEND_GIFTS_FORM,
    component: LayoutSendGiftPage,
    children: [
      {
        path: RouteNames.STEP_1,
        name: RouteNames.STEP_1,
        component: PreviewStep,
      },
    ],
  },
];
