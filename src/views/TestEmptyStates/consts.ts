export const columns = [
  {
    title: "Recipient",
    dataIndex: "recipient",
    randomWidth: true,
    width: "300px",
    slotName: "recipient",
  },
  {
    title: "Email",
    dataIndex: "email",
    randomWidth: true,
    width: "300px",
    slotName: "email",
  },
  {
    title: "Campaign/Gift",
    dataIndex: "campaignGift",
    slotName: "campaignGift",
  },
  {
    title: "Value",
    dataIndex: "value",
    slotName: "value",
  },
  {
    title: "Timed Gifts",
    dataIndex: "timedGifts",
    slotName: "timedGifts",
  },
  {
    title: "Date Scheduled",
    dataIndex: "dateScheduled",
    slotName: "dateScheduled",
  },
];

export const dataSource = [
  {
    id: 1,
    recipient: "John Doe",
    email: "john.doe@example.com",
    campaignGift: "Campaign A",
    value: "$100",
    timedGifts: "5",
    dateScheduled: "2024-06-01",
  },
  {
    id: 2,
    recipient: "Jane Smith",
    email: "jane.smith@example.com",
    campaignGift: "Gift B",
    value: "$200",
    timedGifts: "10",
    dateScheduled: "2024-06-05",
  },
  {
    id: 3,
    recipient: "Mike Johnson",
    email: "mike.johnson@example.com",
    campaignGift: "Campaign C",
    value: "$150",
    timedGifts: "8",
    dateScheduled: "2024-06-10",
  },
  {
    id: 4,
    recipient: "Emily Davis",
    email: "emily.davis@example.com",
    campaignGift: "Gift D",
    value: "$120",
    timedGifts: "6",
    dateScheduled: "2024-06-15",
  },
  {
    id: 5,
    recipient: "James Brown",
    email: "james.brown@example.com",
    campaignGift: "Campaign E",
    value: "$180",
    timedGifts: "12",
    dateScheduled: "2024-06-20",
  },
];
