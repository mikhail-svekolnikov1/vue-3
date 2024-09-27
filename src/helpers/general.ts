export const getAggregetedGiftsBySuppplier = ({ allGifts }) => {
  const groupedGifts = {};

  allGifts.forEach((gift) => {
    if (!groupedGifts[gift.supplierName]) {
      groupedGifts[gift.supplierName] = { ...gift, cards: [] };
    }
    groupedGifts[gift.supplierName].cards.push(gift);
  });

  return Object.values(groupedGifts);
};
