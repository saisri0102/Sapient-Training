export const requiredValidate = (values) => {
  const errors = {};
  for (const [key, value] of Object.entries(values)) {
    if (!value) errors[key] = "Required";
  }
  return errors;
};

// export const signupValidate = (values) => {
//   const errors = {};
//   if (!values.userName) {
//     errors.userName = "Required";
//   } else if (values.userName.length < 3) {
//     errors.userName = "Username too short";
//   }
//   if (!values.emailAdd) {
//     errors.emailAdd = "Required";
//   } else if (
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailAdd)
//   ) {
//     errors.emailAdd = "Invalid email address";
//   }

//   if (!values.pass) {
//     errors.pass = "Required";
//   } else if (
//     !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(
//       values.pass
//     )
//   ) {
//     errors.pass = "Invalid password";
//   }
//   if (!values.cnfPass) {
//     errors.cnfPass = "Required";
//   } else if (values.cnfPass !== values.pass) {
//     errors.cnfPass = "Confirm password doesn't match";
//   }
//   if(Object.keys(errors).length === 0){
//     console.log('hello');
//   }
//   return errors;
// };

export const addUser = async (values, { setSubmitting }) => {
  const response = await fetch("http://localhost:5000/users", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(values),
  });
  return response.json();
};

// export const logInCheck = async (values, { setSubmitting }) => {
//   let valid = false;
//   await fetch("http://localhost:5000/users")
//     .then((resp) => resp.json())
//     .then((data) => {
//       for (var i = 0; i < data.length; i++) {
//         if (
//           values.email === data[i].emailAdd &&
//           values.password === data[i].pass
//         ) {
//           valid = true;
//           break;
//         }
//       }
//     });

//   if (valid) return valid;
//   else alert("invalid credentials");
// };

export const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};
