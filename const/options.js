const freeOptionsData = [
  {
    id: 'sweetness',
    label: '당도',
    labelEng: 'Sweetness',
    options: [
      {
        label: '0%',
        labelEng: '0%',
        value: '0%',
      },
      {
        label: '30%',
        labelEng: '30%',
        value: '30%',
      },
      {
        label: '60%',
        labelEng: '60%',
        value: '60%',
      },
      {
        label: '90%',
        labelEng: '90%',
        value: '90%',
      },
    ],
  },
  {
    id: 'iceAmount',
    label: '얼음',
    labelEng: 'Ice Amount',
    options: [
      {
        label: '기본',
        labelEng: 'Normal',
        value: '기본',
      },
      {
        label: '없음',
        labelEng: 'No',
        value: '없음',
      },
      {
        label: '많이',
        labelEng: 'Many',
        value: '많이',
      },
    ],
  },
  {
    id: 'whippingAmount',
    label: '휘핑',
    labelEng: 'Whipping Amount',
    options: [
      {
        label: '기본',
        labelEng: 'Normal',
        value: '기본',
      },
      {
        label: '없음',
        labelEng: 'No',
        value: '없음',
      },
      {
        label: '많이',
        labelEng: 'Many',
        value: '많이',
      },
    ],
  },
  {
    id: 'pump',
    label: '설탕시럽',
    labelEng: 'Syrup',
    options: [
      {
        label: '없음',
        labelEng: 'No',
        value: 0,
      },
      {
        label: '1펌프',
        labelEng: '1 pump',
        value: 1,
      },
      {
        label: '2펌프',
        labelEng: '2 pumps',
        value: 2,
      },
      {
        label: '3펌프',
        labelEng: '3 pumps',
        value: 3,
      },
    ],
  },
];

const paidOptionsData = [
  {
    id: 'shots',
    label: '샷 추가',
    labelEng: 'Extra Shot',
    options: [
      {
        label: '없음',
        labelEng: 'No',
        value: 0,
      },
      {
        label: '1회',
        labelEng: '1 shot',
        value: 1,
      },
      {
        label: '2회',
        labelEng: '2 shots',
        value: 2,
      },
      {
        label: '3회',
        labelEng: '3 shots',
        value: 3,
      },
    ],
  },
  {
    id: 'whippings',
    label: '휘핑 추가',
    labelEng: 'Extra Whipping',
    options: [
      {
        label: '없음',
        labelEng: 'No',
        value: 0,
      },
      {
        label: '1회',
        labelEng: '1 shot',
        value: 1,
      },
      {
        label: '2회',
        labelEng: '2 shots',
        value: 2,
      },
      {
        label: '3회',
        labelEng: '3 shots',
        value: 3,
      },
    ],
  },
];

export { freeOptionsData, paidOptionsData };
