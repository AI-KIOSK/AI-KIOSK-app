const freeOptionsData = [
  {
    id: 'sweetness',
    label: '당도',
    options: [
      {
        label: '0%',
        value: '0%',
      },
      {
        label: '30%',
        value: '30%',
      },
      {
        label: '60%',
        value: '60%',
      },
      {
        label: '90%',
        value: '90%',
      },
    ],
  },
  {
    id: 'iceAmount',
    label: '얼음',
    options: [
      {
        label: '기본',
        value: '기본',
      },
      {
        label: '없음',
        value: '없음',
      },
      {
        label: '많이',
        value: '많이',
      },
    ],
  },
  {
    id: 'whippingAmount',
    label: '휘핑',
    options: [
      {
        label: '기본',
        value: '기본',
      },
      {
        label: '없음',
        value: '없음',
      },
      {
        label: '많이',
        value: '많이',
      },
    ],
  },
  {
    id: 'pump',
    label: '설탕시럼',
    options: [
      {
        label: '없음',
        value: 0,
      },
      {
        label: '1펌프',
        value: 1,
      },
      {
        label: '2펌프',
        value: 2,
      },
      {
        label: '3펌프',
        value: 3,
      },
    ],
  },
];

const paidOptionsData = [
  {
    id: 'shots',
    label: '샷 추가',
    options: [
      {
        label: '없음',
        value: 0,
      },
      {
        label: '1회',
        value: 1,
      },
      {
        label: '2회',
        value: 2,
      },
      {
        label: '3회',
        value: 3,
      },
    ],
  },
  {
    id: 'whippings',
    label: '휘핑 추가',
    options: [
      {
        label: '없음',
        value: 0,
      },
      {
        label: '1회',
        value: 1,
      },
      {
        label: '2회',
        value: 2,
      },
      {
        label: '3회',
        value: 3,
      },
    ],
  },
];

export { freeOptionsData, paidOptionsData };
