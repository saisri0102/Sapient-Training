const convertData = (data) => {
  if (Array.isArray(data)) {
    const output = data.map((value, index) => ({
      key: index,
      value: convertData(value),
    }));
    return output;
  } else if (typeof data === "object") {
    const type = Object.values(data).map((value) => typeof value);
    const setType = new Set(type);
    const sizeOfSets = setType.size;
    setType.delete('null');
    if (sizeOfSets > 1) {
      const finalOutput = Object.keys(data).map((key) => {
        if (Array.isArray(data[key])) {
          const output = {
            key,
            value: convertData(data[key]),
          };
          return { type3: output };
        } else if (typeof data[key] === "object") {
          const output = {
            key,
            value: convertData(data[key]),
          };
          return { type2: output };
        } else if (
          typeof data[key] === "string"
        ) {
          const output = { key, value: convertData(data[key]) };
          return { type1: output };
        }
        else if (
          typeof data[key] === "boolean"
        ) {
          const output = { key, value: convertData(data[key]) };
          return { type4: output };
        }

      });
      console.log('finaloutput', finalOutput);
      const updatedFinalOutput = {};
      finalOutput.forEach((obj) => {
        if (obj.type1) {
          if (updatedFinalOutput.type1) {
            updatedFinalOutput["type1"].push(obj.type1);
          } else {
            updatedFinalOutput["type1"] = [obj.type1];
          }
        }

        if (obj.type2) {
          if (updatedFinalOutput.type2) {
            updatedFinalOutput["type2"].push(obj.type2);
          } else {
            updatedFinalOutput["type2"] = [obj.type2];
          }
        }

        if (obj.type3) {
          if (updatedFinalOutput.type3) {
            updatedFinalOutput["type3"].push(obj.type3);
          } else {
            updatedFinalOutput["type3"] = [obj.type3];
          }
        }

        if (obj.type4) {
          if (updatedFinalOutput.type4) {
            updatedFinalOutput["type4"].push(obj.type4);
          } else {
            updatedFinalOutput["type4"] = [obj.type4];
          }
        }
      });

      return [updatedFinalOutput];
    } else {
      let output;
      let arrayOfTypes = [];
      Object.keys(data).forEach((key) => {
        if (typeof data[key] === "object") {
          arrayOfTypes.push(
            JSON.stringify(
              Array.from(
                new Set(Object.values(data[key]).map((value) => typeof value))
              ).sort()
            )
          );
        }
      });
      for (let i = 0; i < arrayOfTypes.length - 1; i++) {
        for (let j = i + 1; j < arrayOfTypes.length; j++) {
          if (
            JSON.stringify(arrayOfTypes[j]) === JSON.stringify(arrayOfTypes[i])
          ) {
            arrayOfTypes.splice(j, 1);
            j--;
          }
        }
      }
      const newObj = {};
      if (arrayOfTypes.length > 1) {
        Object.keys(data).forEach((key) => {
          const value = JSON.stringify(
            Array.from(
              new Set(Object.values(data[key]).map((value) => typeof value))
            ).sort()
          );
          const index = arrayOfTypes.indexOf(value);
          const obj = {
            key,
            value:
              typeof data[key] === "object"
                ? convertData(data[key])
                : data[key],
          };
          if (newObj[`structure${index + 1}`]) {
            newObj[`structure${index + 1}`] = [
              ...newObj[`structure${index + 1}`],
              obj,
            ];
          } else {
            newObj[`structure${index + 1}`] = [obj];
          }
        });
        return [newObj];
      } else {
        output = Object.keys(data).map((key) => ({
          key: key,
          value:
            typeof data[key] === "object" ? convertData(data[key]) : data[key],
        }));
      }
      return output;
    }
  } else {
    return data;
  }
};

const func = (data) => {
  const obj = {};
  Object.keys(data).forEach((key) => {
    obj[key] = convertData2(data[key]);
  });
  // obj.labels = convertData2(data.labels);
  return obj;
};

const input = {
  labels: {
    downloadReportHeading: "Download contracts report",
    download: "Download",
    cancel: "Cancel",
    insidelabels: [
      {
        componentType: "select",
        options: [
          {
            label: "Only include filtered contracts",
            value: "filtered",
            selected: false,
          },
        ],
      },
    ],
  },
  fileOptions: {
    componentType: "select",
    componentType2: "select1",
    options: [
      {
        label: "Only include filtered contracts",
        value: "filtered",
        selected: false,
      },
      {
        label:
          "Include additional details (strike price, floor price, index price, expiry date, etc)",
        value: "expanded",
        // selected: false,
      },
    ],
  },
  messages: {
    download: "Download",
    cancel: "Cancel",
  },
  messages2: {
    download: "Download",
    cancel: true,
  },
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
        hello2: ["helloe2"]
      }
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

const convertData2 = (data) => {
  if (Array.isArray(data)) {
    const output = data.map((value, index) => ({
      key: index,
      value: convertData2(value),
    }));
    return output;
  } else if (typeof data === "object") {
    let output;
    let arrayOfTypes = [];
    Object.keys(data).forEach((key) => {
      console.log('key', key);
      if (typeof data[key] === "object") {
        arrayOfTypes.push(
          JSON.stringify(
            Array.from(
              new Set(Object.values(data[key]).map((value) => typeof value))
            ).sort()
          )
        );
      }
      else{
        arrayOfTypes.push(JSON.stringify([typeof data[key]]))
      }
    });
    console.log('arrayOf Types', arrayOfTypes);
    for (let i = 0; i < arrayOfTypes.length - 1; i++) {
      for (let j = i + 1; j < arrayOfTypes.length; j++) {
        if (
          JSON.stringify(arrayOfTypes[j]) === JSON.stringify(arrayOfTypes[i])
        ) {
          arrayOfTypes.splice(j, 1);
          j--;
        }
      }
    }
    const newObj = {};
    if (arrayOfTypes.length > 1) {
      Object.keys(data).forEach((key) => {
        const value = JSON.stringify(
          Array.from(
            new Set(Object.values(data[key]).map((value) => typeof value))
          ).sort()
        );
        const index = arrayOfTypes.indexOf(value);
        const obj = {
          key,
          value:
            typeof data[key] === "object" ? convertData2(data[key]) : data[key],
        };
        if (newObj[`structure${index + 1}`]) {
          newObj[`structure${index + 1}`] = [
            ...newObj[`structure${index + 1}`],
            obj,
          ];
        } else {
          newObj[`structure${index + 1}`] = [obj];
        }
      });
      output = newObj;
    } else {
      output = Object.keys(data).map((key) => ({
        key: key,
        value:
          typeof data[key] === "object" ? convertData2(data[key]) : data[key],
      }));
    }
    return output;
  } else {
    return data;
  }
};

console.log(JSON.stringify(func(input)));

