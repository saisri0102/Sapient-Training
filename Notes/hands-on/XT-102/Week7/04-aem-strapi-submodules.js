const func = (data) => {
  const obj = {};
  Object.keys(data).forEach((key) => {
    obj[key] = convertData2(data[key]);
  });
  // obj.labels = convertData2(data.labels);
  return obj;
};

const data = {
  componentId: "contracts",
  labels: {
    bannerIdSymbol: "#",
    numberSeparator: "-",
  },
  merchandiseDetails: {
    labels: {
      merchOverviewHeading: "Overview",
      merchDownloadButton: "Download contract",
    },
    messages: {
      noPricingSet: "Contact your Farm Marketer to set pricing.",
      noFuturesSet: "Contact your Farm Marketer to set futures.",
    },
    controls: {
      enableDownloadMerchButton: "yes",
    },
  },
  contractType: { merchandise: "Merch", production: "CSCOPROD", offer: "GPO" },
  contractRoutes: [
    { route: "merchandise", type: "Merch" },
    { route: "production", type: "CSCOPROD" },
  ],
  permissions: {
    access: {
      roles: ["DXP_CargillAg_Role_Farmer", "Admin_Shadow_Account"],
    },
  },
  image: {
    componentType: "image",
    backgroundStart: "#BA7100",
    backgroundEnd: "#FFC700",
    renditions: {
      320: "?$DashboardBannerSmall$",
      800: "?$DashboardBannerLarge$",
      rendtionsinside: {
        hello: "helo",
        hello2: {
          helloinside: "helo inside",
        },
      },
    },
    options: [
      {
        label:
          "Include additional details (strike price, floor price, index price, expiry date, etc)",
        value: "expanded",
        selected: true,
      },
    ],
  },
  items: [
    {
      id: "1002",
      type: "mytasks",
      link: {
        href: "/dashboard",
        title: "My Tasks",
        target: "_self",
        children: [
          {
            type: "label",
            label: "My Tasks",
          },
        ],
      },
    },
  ],
  merchandiseDownloadReports: {
    labels: {
      downloadReportBtnLabel: "Download Report",
      downloadReportHeading: "Download contract report",
    },
    fileFormat: {
      options: [
        {
          label: "Spreadsheet (XLS)",
          value: "cargillagcontract004",
          selected: true,
        },
        {
          label: "PDF",
          value: "cargillagcontract003",
          selected: false,
        },
      ],
    },
    fileOptions: {
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
  },
};


const inputStructure = [
    {
        key: 'image',
        value: ['string', ['string', ['string', ['string', 'boolean']]]]
    }
]
const input = {
  offerDownloadReports: {
    labels: {
      downloadReportBtnLabel: "Download Report",
      downloadReportHeading: "Download contract report",
      download: "Download",
      cancel: "cancel",
      fileFormatLabel: "File format",
      fileOptionsLabel: "Options",
    },
    fileFormat: {
      options: [
        {
          label: "Spreadsheet (XLS)",
          value: "cargillagcontract006",
          selected: true,
        },
        {
          label: "PDF",
          value: "cargillagcontract005",
          selected: false,
        },
      ],
    },
    fileOptions: {
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
  },
};

const getUniqueTypes = (data) => {
  let arrayOfTypes = [];
  if (Array.isArray(data)) {
      console.log('inside array ', data);
    data.forEach((key) => {
        console.log('key', key);
      if (typeof key === "object") {
        arrayOfTypes.push(
          JSON.stringify(
            Array.from(
              new Set(Object.values(key).map((value) => typeof value))
            ).sort()
          ),
        );
      } else {
        arrayOfTypes.push(JSON.stringify([typeof key]));
      }
    });
    console.log('arrayof types', arrayOfTypes);
  } else {
    Object.keys(data).forEach((key) => {
      if (typeof data[key] === "object") {
        arrayOfTypes.push(
          JSON.stringify(
            Array.from(
              new Set(Object.values(data[key]).map((value) => typeof value))
            ).sort()
          ),
        );
      } else {
        arrayOfTypes.push(JSON.stringify([typeof data[key]]));
      }
    });
    console.log('array of types object', arrayOfTypes);
  }

//   console.log("data inside func", data);
//   console.log("array of types inside function", arrayOfTypes);
  for (let i = 0; i < arrayOfTypes.length - 1; i++) {
    for (let j = i + 1; j < arrayOfTypes.length; j++) {
      if (JSON.stringify(arrayOfTypes[j]) === JSON.stringify(arrayOfTypes[i])) {
        arrayOfTypes.splice(j, 1);
        j--;
      }
    }
  }
  return arrayOfTypes;
};

const divideDataToTypes = (data, arrayOfTypes) => {
  let newObj = {};
console.log("data inside divideTypes", data);
console.log("arrayofTypes inside divide data", arrayOfTypes);
if (Array.isArray(data)) {
    data.forEach((key) => {
        // console.log("data key", key);
        let valueType;
        valueType = JSON.stringify(
            Array.from(
              new Set(Object.values(key).map((value) => typeof value))
            ).sort()
          );
        // const
        // console.log('newObj', newObj);
        const index = arrayOfTypes.indexOf(valueType);
        const obj = {
          key,
          value: convertData2(key),
        };
        if (newObj[`type${index + 1}`]) {
          newObj[`type${index + 1}`] = [...newObj[`type${index + 1}`], obj];
        } else {
          newObj[`type${index + 1}`] = [obj];
        }
      });
}
else{
    Object.keys(data).forEach((key) => {
        // console.log("data key", key);
        let valueType;
        valueType = JSON.stringify(
            Array.from(
              new Set(Object.values(data[key]).map((value) => typeof value))
            ).sort()
          );
        // const
        // console.log('newObj', newObj);
        const index = arrayOfTypes.indexOf(valueType);
        const obj = {
          key,
          value: convertData2(data[key]),
        };
        if (newObj[`type${index + 1}`]) {
          newObj[`type${index + 1}`] = [...newObj[`type${index + 1}`], obj];
        } else {
          newObj[`type${index + 1}`] = [obj];
        }
      });
    
}
  
  return newObj;
};

const convertData2 = (data) => {
  if (Array.isArray(data)) {
    //   const output = data.map((value, index) => ({
    //     key: index,
    //     value: convertData2(value),
    //   }));
    //   console.log('array putput', output);
    let output;
    const arrayOfTypes = getUniqueTypes(data);
    // console.log("arrayOfTypes", arrayOfTypes);
    if (arrayOfTypes.length > 1) {
      output = divideDataToTypes(data, arrayOfTypes);
    } else {
      output = data.map((key) => ({
        key: key,
        value: convertData2(key),
      }));
    }
    return output;
  } else if (typeof data === "object") {
    let output;
    const arrayOfTypes = getUniqueTypes(data);
    if (arrayOfTypes.length > 1) {
      output = divideDataToTypes(data, arrayOfTypes);
    } else {
      output = Object.keys(data).map((key) => ({
        key: key,
        value:
          typeof data[key] === "object" ? convertData2(data[key]) : data[key],
      }));
    }
    return output;
  } else {
    // console.log("string putput", data);
    return data;
  }
};


console.log(JSON.stringify(func(input)));
