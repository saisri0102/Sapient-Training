

const divideIntoTypes = (data) => {

}
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
      console.log('data key', key);
      if (typeof data[key] === "object") {
        console.log('inside ', key, 'type', typeof data[key])
        arrayOfTypes.push(
          JSON.stringify(
            Array.from(
              new Set(Object.values(data[key]).map((value) => {
                let type;
                if(Array.isArray(value)){
                  type = 'array'
                }
                else{
                  type = typeof value
                }
                console.log('inner inside', type);
                return type;
              }))
            ).sort()
          )
        );
      }
    });
    console.log('arrayOfTypes', arrayOfTypes);
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
            new Set(Object.values(data[key]).map((value) => {
              if(Array.isArray(data)){
                return 'array'
              }
              else{
                return typeof value
              }
            }))
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


const input = {
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
}

const func = (data) => {
  const obj = {};
  Object.keys(data).forEach((key) => {
    obj[key] = convertData2(data[key]);
  });
  return obj;
};

console.log(JSON.stringify(func(input)));
