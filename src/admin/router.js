/* eslint-disable prettier/prettier */
export default [
  {
    path: "/demo", // route
    name: "admin", // name of the views page
    component: () => import("./views/demo.vue"), // directory of vue file path
    meta: {
      type: "protected"
    }
  }
];
