import { v4 as uuidv4 } from "uuid";

function generateShortId() {
  const fullUuid = uuidv4();
  const shortId = fullUuid.substring(0, 5);
  return shortId;
}

export const getAggregetedGiftsBySuppplier = ({ allGifts }) => {
  const groupedGifts = {};

  allGifts.forEach((gift) => {
    if (!groupedGifts[gift.supplierName]) {
      groupedGifts[gift.supplierName] = { ...gift };
    }

    // Добавляем поле cards ТОЛЬКО если есть второй и последующие элементы
    if (
      groupedGifts[gift.supplierName].cards === undefined &&
      allGifts.filter((g) => g.supplierName === gift.supplierName).length > 1
    ) {
      groupedGifts[gift.supplierName].cards = [gift];
    } else if (groupedGifts[gift.supplierName].cards) {
      groupedGifts[gift.supplierName].cards.push(gift);
      groupedGifts[gift.supplierName].isAggregeted = true;
      groupedGifts[gift.supplierName].id = `aggregetedId-${generateShortId()}`;
    }
  });

  return Object.values(groupedGifts);
};
