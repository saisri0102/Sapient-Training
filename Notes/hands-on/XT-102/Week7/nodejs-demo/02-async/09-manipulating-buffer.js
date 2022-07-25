const fs = require("fs");
const path = require("path");
const axios = require("axios");
const cheerio = require("cheerio");

// let baseDir = path.join(__dirname, '/./niktoResults/');
const mockData = [
  {
    componentId: "ShadowBar",
    labels: {
      stopShadowLabel: "Stop shadowing",
      shadowingLabel: "Shadowing",
      contactSupport: "Contact support",
      save: "Save",
      cancel: "Cancel",
    },
    messages: {
      errorMsg:
        "We couldn't shadow ## profile. There is a configuration issue with their profile.",
      errorHeading: "Shadow ## error",
    },
    controls: { enableStopShadowButton: "yes" },
    links: { stopShadowRedirectUrl: "/account/search", contactSupportUrl: "#" },
  },
  {
    componentId: "TopNav",
    labels: {
      logoutLabel: "Log out",
      changeUomLabel: "Change Unit of Measure",
      uomSaveBtnLabel: "Set",
      uomCancelBtnLabel: "Cancel",
    },
    messages: {},
    controls: { enableUomButton: "yes" },
    links: { myProfileUrl: "/account" },
    logoMobile: {
      componentType: "image",
      href: "/markets",
      title: "Cargillag",
      src: "/content/dam/cargill/static-assets/logo.svg",
      className: "",
      type: "image",
    },
    permissions: { profileAccess: { roles: ["DXP_CargillAg_Role_Farmer"] } },
  },
  {
    componentId: "globalNav",
    logoDesktop: {
      href: "/markets",
      title: "Cargill",
      children: [
        {
          type: "image",
          image: {
            src: "/content/dam/cargillag/cargill_logo.jpg",
            alt: "Cargill",
            cssClass: null,
          },
        },
      ],
    },
    logoMobile: {
      href: "/markets",
      title: "Cargill",
      children: [
        {
          type: "image",
          image: {
            src: "/content/dam/cargill/static-assets/logo.svg",
            alt: "Cargill",
            cssClass: null,
          },
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
          children: [{ type: "label", label: "My Tasks" }],
        },
      },
      {
        id: "1001",
        type: "markets",
        link: {
          href: "/markets",
          title: "Markets",
          target: "_self",
          children: [{ type: "label", label: "Markets" }],
        },
      },
      {
        id: "1015",
        type: "contracts",
        link: {
          href: "/articles/advisory",
          title: "Advisory",
          target: "_self",
          children: [{ type: "label", label: "Advisory" }],
        },
      },
      {
        id: "1003",
        type: "contracts",
        link: {
          href: "/contracts",
          title: "Contracts",
          target: "_self",
          children: [{ type: "label", label: "Contracts" }],
        },
      },
      {
        id: "1004",
        type: "deliveries",
        link: {
          href: "/deliveries",
          title: "Deliveries",
          target: "_self",
          children: [{ type: "label", label: "Deliveries" }],
        },
      },
      {
        id: "1016",
        type: "settlements",
        link: {
          href: "/settlements",
          title: "Settlements",
          target: "_self",
          children: [{ type: "label", label: "Settlements" }],
        },
      },
      {
        id: "1006",
        type: "search",
        link: {
          href: "/account/search",
          title: "Customer Search",
          target: "_self",
          children: [{ type: "label", label: "Customer Search" }],
        },
      },
      {
        id: "1007",
        type: "search",
        link: {
          href: "/location-search",
          title: "Location Search",
          target: "_self",
          children: [{ type: "label", label: "Location Search" }],
        },
      },
      {
        id: "1008",
        type: "markets",
        link: {
          href: "/location/bids",
          title: "Local Bids",
          target: "_self",
          children: [{ type: "label", label: "Local Bids" }],
        },
      },
      {
        id: "1005",
        type: "payments",
        link: {
          href: "/payments",
          title: "Payments",
          target: "_self",
          children: [{ type: "label", label: "Payments" }],
        },
      },
    ],
    mobileBottomNavItems: [
      {
        id: "profileAccess",
        link: {
          href: "/account",
          content: "Profile",
          title: "Profile",
          target: "_self",
        },
      },
    ],
    labels: {
      viewAll: "View Text",
      logoutLabel: "Log out",
      regionLabel: null,
      accountLabel: null,
      customerTypeLabel: null,
      productsLabel: null,
      selectAccount: null,
      cancelButtonLabel: "Cancel",
      changeUomLabel: "Change Unit of Measure",
      uomSaveBtnLabel: "Set",
      uomCancelBtnLabel: "Cancel",
    },
    controls: {
      showBottomNavigationLogout: "yes",
      cropInputUserRole: "CargillAg_Custom_CropInputs",
      GASUserRole: "CargillAg_Custom_GAS",
      navAnimationEffect: "no",
      farmerUserRole: "DXP_CargillAg_Role_Farmer",
      displayMobile: "left",
      displayDesktop: "top",
      enableUomButton: "yes",
    },
    userTypeRoles: {},
    permissions: {
      1001: { roles: ["DXP_CargillAg_Role_Farmer"] },
      1002: { roles: ["DXP_CargillAg_Role_Farmer"] },
      1003: { roles: ["DXP_CargillAg_Role_Farmer", "Admin_Shadow_Account"] },
      1004: { roles: ["DXP_CargillAg_Role_Farmer", "Admin_Shadow_Account"] },
      1005: { roles: ["DXP_CargillAg_Role_Farmer", "Admin_Shadow_Account"] },
      1007: {
        roles: [
          "DXP_CargillAg_Role_Location_Editor",
          "DXP_CargillAg_Role_Location_Approver",
        ],
      },
      1009: { roles: ["DXP_CargillAg_Role_Admin"] },
      1006: { roles: ["DXP_CargillAg_Role_Admin"] },
      1008: { roles: ["DXP_CargillAg_Role_Admin"] },
      1011: {
        roles: [
          "Admin_Shadow_Account",
          "CargillAg_Custom_CropInputs",
          "!DXP_CargillAg_Role_Farmer",
        ],
      },
      1015: { roles: ["DXP_CargillAg_Role_Farmer", "CargillAg_Custom_GAS"] },
      profileAccess: { roles: ["DXP_CargillAg_Role_Farmer"] },
      1016: { roles: ["DXP_CargillAg_Role_Farmer", "Admin_Shadow_Account"] },
    },
  },
  {
    componentId: "Portfolio",
    labels: {
      pageTitle: "Porfolio",
      totalPayments: "Total payments",
      for: "for",
      totalOpenContracts: "Total open contracts",
      upcomingDeliveries: "Upcoming deliveries",
      of: "of",
      delivered: "delivered",
      contractProgress: "Contract Progress",
      month_jan: "Jan",
      month_feb: "Feb",
      month_mar: "Mar",
      month_apr: "Apr",
      month_may: "May",
      month_jun: "Jun",
      month_jul: "Jul",
      month_aug: "Aug",
      month_sep: "Sep",
      month_oct: "Oct",
      month_nov: "Nov",
      month_dec: "Dec",
      monthMappingConstant: "month_",
      chartKey: "month",
      chartValueKey: "value",
    },
    messages: {
      noCommodities: "No commodites to display",
      noCurrentYearPayments: "No Payments data for current year",
    },
    controls: {
      enableCurrentYearPayments: "yes",
      enableOpenContracts: "yes",
      enableUpcomingDeliveries: "yes",
      enablePortfolioCommodities: "yes",
    },
    links: {
      routeDashboard: "dashboard",
      routePayments: "payments",
      routeCommodity: "commodity",
      routePortfolio: "portfolio",
      routeContractList: "contracts",
    },
    permissions: { access: { roles: ["DXP_CargillAg_Role_Farmer"] } },
  },
  {
    componentId: "MyTasks",
    labels: {
      signLabel: "Sign",
      priceLabel: "Set pricing on",
      contractsLabel: "contracts",
      noTaskHeading: "You’re all caught up!",
      noTaskSubHeading: "Take a look at your progress this year.",
      noTaskBtnLabel: "View your portfolio",
    },
    messages: {},
    controls: {},
    links: {
      routeSignContracts: "/esign/contracts",
      routePortfolio: "/dashboard/portfolio",
      routeContractList: "contracts",
    },
    tasks: {
      advisory: {
        label: "Read {{0}} new market updates.",
        description:
          "Brief summary of reports, contents, maximum of two lines, redirect to Advisory section or download PDF.",
        path: "articles/advisory",
        linkType: "anchor",
        icon: "bookmark",
        apiKey: "advisory",
      },
      unsigned: {
        label: "Sign {{0}} contracts",
        description: "",
        path: "esign/contracts",
        linkType: "anchor",
        icon: "edit",
        apiKey: "unsigned",
      },
      unpriced: {
        label: "Unpriced {{0}} contracts",
        description: "",
        path: "contracts",
        linkType: "anchor",
        icon: "tag",
        apiKey: "unpriced",
      },
    },
    permissions: { access: { roles: ["DXP_CargillAg_Role_Farmer"] } },
  },
  {
    componentId: "Dashboard",
    componentType: "nested",
    labels: {
      goodMorningLabel: "Good Morning",
      goodAfternoonLabel: "Good Afternoon",
      goodEveningLabel: "Good Evening",
      dashboardTabsAriaLabel: "Dashboard Tabs",
      tasksTabTitle: "My Tasks",
      portfolioTabTitle: "Portfolio",
    },
    messages: {},
    controls: {
      morningStarts: "0",
      afternoonStarts: "12",
      eveningStarts: "16",
      enableMyTasks: "yes",
      enablePortfolio: "yes",
    },
    image: {
      componentType: "image",
      src: "/content/dam/cargill/static-assets/cargillagauth/commons/Dashboard_updated.svg",
      backgroundStart: "#658D1B",
      backgroundEnd: "#658D1B",
    },
    routes: {
      tasks: [{ component: "MyTasks", configId: "MyTasks-config" }],
      portfolio: [{ component: "Portfolio", configId: "Portfolio-config" }],
    },
    permissions: { access: { roles: ["DXP_CargillAg_Role_Farmer"] } },
  },
];

// {
//     "collectionName": "components_contracts_labels",
//     "info": {
//       "name": "labels",
//       "icon": "ad",
//       "description": ""
//     },
//     "options": {},
//     "attributes": {
//       "expiration": {
//         "type": "string"
//       },
//       "insidelabels": {
//         "type": "component",
//         "repeatable": false,
//         "component": "contracts.contract-routes"
//       }
//     }
//   }

const transformData = (data) => {
    console.log('direnmae', __dirname);
    let attributesObj = {}
    Object.keys(data).forEach(key => {
       attributesObj[key] = {
            type: "component",
            repeatable: true,
            component: `contracts.${key.toLowerCase()}`
       }
    })
    console.log('attributesObj', attributesObj);
    const output= {
        collectionName: data.componentId,
        info: {
            name: data.componentId,
            icon: "ad",
            description: ""
        },
        options: {},
        attributes: attributesObj
    }

    console.log('oputput', output);

    return output;
}
const sendData = (data) => {
    console.log("path", path);
  for (const obj of data) {
    var transformedData = transformData(obj);
    var objString = JSON.stringify(transformedData);
    const fileName = `${__dirname}/../../${obj.componentId}.json`
    console.log('fileName', __dirname + '/../02-async');
    fs.writeFile(
        fileName,
      objString,
      function (error) {
        if (error) {
          console.log("There was an error writing to the file");
          return;
        }
        console.log("file has been written");
      }
    );
  }
};

sendData(mockData);
