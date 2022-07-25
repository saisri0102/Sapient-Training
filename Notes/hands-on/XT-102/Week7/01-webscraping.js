// object -> array keyvalue -> object array -> object

const data = {
  // componentId: "contracts",
  // labels: {
  //   bannerIdSymbol: "#",
  //   numberSeparator: "-",
  // },
  // merchandiseDetails: {
  //   labels: {
  //     merchOverviewHeading: "Overview",
  //     merchDownloadButton: "Download contract",
  //     commodityName: "Product",
  //     timeOfShipment: "Time of Shipment",
  //   },
  //   messages: {
  //     noPricingSet: "Contact your Farm Marketer to set pricing.",
  //     noFuturesSet: "Contact your Farm Marketer to set futures.",
  //     noBasisSet: "Contact your Farm Marketer to set basis.",
  //     noActivityHeading: "No Activity Available",
  //   },
  //   controls: {
  //     enableDownloadMerchButton: "yes",
  //     enablePricingLines: "yes",
  //     enableActivePricingOrders: "yes",
  //     enableProgress: "yes",
  //   },
  // },
  // contractType: { merchandise: "Merch", production: "CSCOPROD", offer: "GPO" },
  // contractRoutes: [
  //   { route: "merchandise", type: "Merch" },
  //   { route: "production", type: "CSCOPROD" },
  //   { route: "offer", type: "GPO" },
  // ],
  // permissions: {
  //   access: {
  //     roles: ["DXP_CargillAg_Role_Farmer", "Admin_Shadow_Account"],
  //   },
  // },
  image: {
    componentType: "image",
    backgroundStart: "#BA7100",
    backgroundEnd: "#FFC700",
    renditions: {
      320: "?$DashboardBannerSmall$",
      800: "?$DashboardBannerLarge$",
      renditions2: {
        600: "?$DashboardBannerSmall$",
        700: "?$DashboardBannerLarge$",
      },
    },
    options: [
      {
        label:
          "Include additional details (strike price, floor price, index price, expiry date, etc)",
        value: "expanded",
        selected: true,
      },
      {
        label: "Only include filtered contracts",
        value: "filtered",
        selected: false,
      },
    ],
  },
  // items: [
  //   {
  //     id: "1002",
  //     type: "mytasks",
  //     link: {
  //       href: "/dashboard",
  //       title: "My Tasks",
  //       target: "_self",
  //       children: [
  //         {
  //           type: "label",
  //           label: "My Tasks",
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     id: "1001",
  //     type: "markets",
  //     link: {
  //       href: "/markets",
  //       title: "Markets",
  //       target: "_self",
  //       children: [
  //         {
  //           type: "label",
  //           label: "Markets",
  //         },
  //       ],
  //     },
  //   },
  // ],
  // merchandiseDownloadReports: {
  //   labels: {
  //     downloadReportBtnLabel: "Download Report",
  //     downloadReportHeading: "Download contract report",
  //     download: "Download",
  //     cancel: "cancel",
  //     fileFormatLabel: "File format",
  //     fileOptionsLabel: "Options",
  //   },
  //   fileFormat: {
  //     options: [
  //       {
  //         label: "Spreadsheet (XLS)",
  //         value: "cargillagcontract004",
  //         selected: true,
  //       },
  //       {
  //         label: "PDF",
  //         value: "cargillagcontract003",
  //         selected: false,
  //       },
  //     ],
  //   },
  //   fileOptions: {
  //     options: [
  //       {
  //         label:
  //           "Include additional details (strike price, floor price, index price, expiry date, etc)",
  //         value: "expanded",
  //         selected: true,
  //       },
  //       {
  //         label: "Only include filtered contracts",
  //         value: "filtered",
  //         selected: false,
  //       },
  //     ],
  //   },
  // },
};

const contractRoutesOut = {
  key: "contractRoutes",
  value: [
    [
      {
        key: "route",
        value: "merchandise",
      },
      {
        key: "type",
        value: "Merch",
      },
    ],
    [
      {
        key: "route",
        value: "production",
      },
      {
        key: "type",
        value: "CSCOPROD",
      },
    ],
    [
      {
        key: "route",
        value: "offer",
      },
      {
        key: "type",
        value: "GPO",
      },
    ],
  ],
};

const itemsOut = [
  {
    type1: [
      {
        key: "id",
        value: "mytasks"
      },
      {
        key: "type",
        value: "mytasks"
      }
    ],
    type2: [
      {
        key: "link",
        value: [
          {
            type1: [
              {
                key: "href",
                value: "/dashboard"
              }, 
              {
                key: "title",
                value: "My tasks"
              }
            ],
            type2: [
              {
                key: "children",
                value: [
                  {
                    key: "type",
                    value: "label"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]

const permissionsOut = {
  key: "permissions",
  value: [
    {
      key: "access",
      value: [
        {
          key: "roles",
          value: [
            {
              key: 0,
              value: "DXP_CargillAg_Role_Farmer",
            },
            {
              key: 1,
              value: "Admin_Shadow_Account",
            },
          ],
        },
      ],
    },
  ],
};

const convertData = (data) => {
  if (Array.isArray(data)) {
    const output = data.map((value, index) => ({
      key: index,
      value: convertData(value),
    }));
    return output;
  } else if (typeof data === "object") {
    const output = Object.keys(data).map((key) => ({
      key: key,
      value: typeof data[key] === "object" ? convertData(data[key]) : data[key],
    }));
    return output;
  } else {
    return data;
  }
};

const convertData2 = (data) => {
  let output;
  let stringValues = [];
  let objValues = [];
  let otherTypes = [];

  const segregateData = (value, obj) => {
    if (typeof value === "string") {
      stringValues.push(obj);
    } else if (Array.isArray(value)) {
      otherTypes.push(obj);
    } else {
      objValues.push(obj);
    }
  };
  if (Array.isArray(data)) {
    output = data.map((value, index) => {
      const obj = {
        key: index,
        value: convertData2(value),
      };
      segregateData(value, obj);
      return obj;
    });
  } else if (typeof data === "object") {
    output = Object.keys(data).map((key) => {
      const obj = {
        key: key,
        value: convertData2(data[key]),
      };
      if (sizeOfSets > 1) {
        segregateData(data[key], obj);
      }
      return obj;
    });
  } else {
    output = data;
  }
  const stringsPresent = stringValues.length ? 1 : 0;
  const objPresent = objValues.length ? 1 : 0;
  const arrayPresent = otherTypes.length ? 1 : 0;
  const sum = stringsPresent + objPresent + arrayPresent;
  if (sum > 2) {
    const finalArray = [];
    finalArray.push(stringValues);
    finalArray.push(objValues);
    finalArray.push(otherTypes);
    let finalOut = [];
    finalArray.forEach((value, index) => {
      if (value.length) {
        finalOut.push({
          key: `type${index + 1}`,
          value: value,
        });
      }
    });
    output = finalOut;
  }
  return output;
};

const convertData3 = (data) => {
  const stringValues = [];
  const objValues = [];
  const otherTypes = [];
  let output;
  const segregateTypes = (value, obj) => {
    if (Array.isArray(value)) {
      otherTypes.push(obj);
    } else if (typeof value === "object") {
      objValues.push(obj);
    } else {
      stringValues.push(obj);
    }
  };
  if (Array.isArray(data)) {
    output = data.map((value, index) => {
      const obj = {
        key: index,
        value: convertData3(value),
      };
      // segregateTypes(value, obj);
      return obj;
    });
  } else if (typeof data === "object") {
    output = Object.keys(data).map((key) => {
      const obj = {
        key: key,
        value: convertData3(data[key]),
      };
      segregateTypes(data[key], obj);
      // if (distinctTypes.size > 1) {
      //   segregateTypes(data[key], obj);
      // }
      return obj;
    });
  } else {
    output = data;
  }
  const stringsPresent = stringValues.length ? 1 : 0;
  const objPresent = objValues.length ? 1 : 0;
  const arrayPresent = otherTypes.length ? 1 : 0;
  const sum = stringsPresent + objPresent + arrayPresent;
  if (sum > 2) {
    const finalArray = [];
    finalArray.push(stringValues);
    finalArray.push(objValues);
    finalArray.push(otherTypes);
    let finalOut = [];
    const obj = {}
    finalArray.map((value, index) => {
      if (value.length) {
        obj[`type${index + 1}`] = value;
      }
    });
    finalOut.push(obj);
    console.log('output final', finalOut);
    output = finalOut;
  }

  return output;
};

// converting array to object
const getMapFromArray = (data) =>
  data.reduce((acc, item) => {
    // add object key to our object i.e. charmander: { type: 'water' }
    acc[item.key] = item.value;
    return acc;
  }, {});

const finalOuptut = convertData3(data);
// for (const item of finalOuptut) {
//   console.log(JSON.stringify(item));
// }

console.log("finalOuptut", JSON.stringify(...finalOuptut));

const requiredObject = getMapFromArray(finalOuptut);

// console.log("finalOutput", finalOuptut);
// console.log("requiredObject", requiredObject);

// finalOutput [
//   { key: 'componentId', value: 'contracts' },
//   { key: 'labels', value: [ [Object], [Object] ] },
//   {
//     key: 'merchandiseDetails',
//     value: [ [Object], [Object], [Object] ]
//   },
//   { key: 'contractType', value: [ [Object], [Object], [Object] ] },
//   { key: 'contractRoutes', value: [ [Object], [Object], [Object] ] },
//   { key: 'permissions', value: [ [Object] ] },
//   {
//     key: 'image',
//     value: [ [Object], [Object], [Object], [Object], [Object], [Object] ]
//   },
//   { key: 'items', value: [ [Object], [Object] ] }
// ]

// const required = {
//   componentId: 'contracts',
//   labels: [{key,value}, {key,value}, {key,value}], ( repeatable keyvalue component)
//   merchandiseDetails: [{key,[{key,value},{key,value}]}, {}, {}],  ( repeatable component with key and )
//   contractType: [{key, value}, {key, value}, {key, value}],
//   contractRoutes: [{key: number, value: [{key, value}, {}]}, {}, {}],
//   permissions: [{key, value: [{value: value}, {}]}, {}],
//   image: [{key, value}, {key, value}, {key, value: [{}, {}]}],
//   items: [{key: number, value: [{}, {}]}, {}, {}, {}]
//    merchandiseDownloadReports: [{key: string, value: [{key: string, value: [{key, value}]}]}]
// }

/**
 * 1. (TYPE 1) key -> string value -> string
 * 2. (TYPE 2) key -> number value -> string
 * 3. (TYPE 3) key -> string value -> array of TYPE1 objects(Ex: labels)
 * 4. (TYPE 4) key -> number value -> array of TYPE1 objects(Ex: ContractRoutes)
 * 5. (TYPE 5) key -> string value -> array of TYPE2 objects(Ex: Roles)
 * 6. (TYPE 6) key -> number value -> array of TYPE2 objects
 * 7. (NESTED 1) key -> string value -> array of TYPE3 objects
 * 8. (NESTED 2) key -> string value -> array of TYPE4 objects
 * 9. (NESTED 3) key -> string value -> array of TYPE5 objects ( Ex: Permissions)
 * 10. (NESTED 4) key -> string value -> array of TYPE6 objects
 * 9. (TYPE 9) key -> string value -> array of MIXED Types (Ex: image)
 */

const convertData3Out = [
  {
    type1: [
      { key: "componentType", value: "image" },
      { key: "backgroundStart", value: "#BA7100" },
      { key: "backgroundEnd", value: "#FFC700" },
    ],
    type2: [
      {
        key: "renditions",
        value: [
          { key: "320", value: "?$DashboardBannerSmall$" },
          { key: "800", value: "?$DashboardBannerLarge$" },
          {
            key: "renditions2",
            value: [
              { key: "600", value: "?$DashboardBannerSmall$" },
              { key: "700", value: "?$DashboardBannerLarge$" },
            ],
          },
        ],
      },
    ],
    type3: [
      {
        key: "options",
        value: [
          {
            key: 0,
            value: [
              {
                key: "label",
                value:
                  "Include additional details (strike price, floor price, index price, expiry date, etc)",
              },
              { key: "value", value: "expanded" },
              { key: "selected", value: true },
            ],
          },
          {
            key: 1,
            value: [
              { key: "label", value: "Only include filtered contracts" },
              { key: "value", value: "filtered" },
              { key: "selected", value: false },
            ],
          },
        ],
      },
    ],
  },
];

const convertDataOut = [
  { key: "componentType", value: "image" },
  { key: "backgroundStart", value: "#BA7100" },
  { key: "backgroundEnd", value: "#FFC700" },
  {
    key: "renditions",
    value: [
      { key: "320", value: "?$DashboardBannerSmall$" },
      { key: "800", value: "?$DashboardBannerLarge$" },
      {
        key: "renditions2",
        value: [
          { key: "600", value: "?$DashboardBannerSmall$" },
          { key: "700", value: "?$DashboardBannerLarge$" },
        ],
      },
    ],
  },
  {
    key: "options",
    value: [
      {
        key: 0,
        value: [
          {
            key: "label",
            value:
              "Include additional details (strike price, floor price, index price, expiry date, etc)",
          },
          { key: "value", value: "expanded" },
          { key: "selected", value: true },
        ],
      },
      {
        key: 1,
        value: [
          { key: "label", value: "Only include filtered contracts" },
          { key: "value", value: "filtered" },
          { key: "selected", value: false },
        ],
      },
    ],
  },
];

const imageOut = [
  {
    id: 24,
    type1: [
      {
        id: 418,
        key: "label",
        value: "Label",
      },
      {
        id: 419,
        key: "message",
        value: "Message",
      },
    ],
    type2: [
      {
        id: 23,
        key: "renditions",
        value: [
          {
            id: 420,
            key: "800",
            value: "?$DashboardBannerLarge$",
          },
          {
            id: 421,
            key: "300",
            value: "?$DashboardBannerLarge$",
          },
        ],
      },
    ],
  },
];
