import { createClient } from "contentful";

export default createClient({
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

// export default createClient({
//   space: "1zmnbyd8imzu",
//   accessToken: "ZeAc2WdsMj7PFufGhHpvD2o8m2Dg1cdKDfi6Rhkj3Uk"
// });
