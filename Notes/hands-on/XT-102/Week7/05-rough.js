
const getTypeOfKey = () => {
    
}

const convertData = (data) => {
    if (data === null) {
      return data;
    }
    if (Array.isArray(data)) {
      const output = data.map((value, index) => ({
        key: index,
        value: convertData(value),
      }));
      return output;
    } else if (typeof data === "object") {
      const arr = Object.values(data)
      const type = arr.map((value) => { if (value != null) { return typeof (value) } else { return 'null' } });
      let setType = new Set(type);
      setType.delete('null');
      setType.delete('boolean');
      const sizeOfSets = setType.size;
      if (sizeOfSets > 1) {
        const finalOutput = Object.keys(data).map((key) => {
          // key: key,
          // value: typeof data[key] === "object" ? convertData(data[key]) : data[key],
          if (Array.isArray(data[key])) {
            const output = {
              key,
              value: convertData(data[key])
            }
            return { "type3": output };
          } else if (typeof (data[key]) === "object") {
            const output = {
              key,
              value: convertData(data[key])
            }
            return { "type2": output };
          }
          else if (typeof (data[key]) === "string") {
            const output = { key, value: convertData(data[key]) }
            return { "type1": output };
          }
          else if (typeof data[key] === "boolean") {
            const output = { key, value: convertData(data[key]) }
            return { "type4": output };
          }
        });

        const updatedFinalOutput = {};

        finalOutput.forEach((obj) => {
          if (obj.type1) {
            if (updatedFinalOutput.type1) {
              updatedFinalOutput["type1"].push(obj.type1)
            }
            else {
              updatedFinalOutput["type1"] = [obj.type1]
            }
          }

          if (obj.type2) {
            if (updatedFinalOutput.type2) {
              updatedFinalOutput["type2"].push(obj.type2)
            }
            else {
              updatedFinalOutput["type2"] = [obj.type2]
            }
          }

          if (obj.type3) {
            if (updatedFinalOutput.type3) {
              updatedFinalOutput["type3"].push(obj.type3)
            }
            else {
              updatedFinalOutput["type3"] = [obj.type3]
            }
          }
          if (obj.type4) {
            if (updatedFinalOutput.type4) {
              updatedFinalOutput["type4"].push(obj.type4)
            }
            else {
              updatedFinalOutput["type4"] = [obj.type4]
            }
          }
        })
        return [updatedFinalOutput];

      }
      else {
        let output;
        let arrayOfTypes = [];
        Object.keys(data).forEach((key) => {
          if (typeof data[key] === "object" && data[key]!==null) {
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
            if (newObj[`type${index + 1}`]) {
              newObj[`type${index + 1}`] = [
                ...newObj[`type${index + 1}`],
                obj,
              ];
            } else {
              newObj[`type${index + 1}`] = [obj];
            }
          });
          output = [newObj];
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