import { CtaButtonInHeader, HeaderType } from "@/types";

// update the prices from here if you don't want to add a price
export const pricesData = {
  oldPrice: "EGP 120",
  newPrice: "EGP 90",
};

export const headerData: HeaderType = {
  // content with price
  content: `Don't miss this offer! ${pricesData.oldPrice}, ${pricesData.newPrice} for life time access`,
  // content without price replace it if you want to remove the price
  // content: "Don't miss this offer! for life time access",

  // keep the formate of the data yy-mm-dd
  endDate: "2025-02-10",
};

export const ctaButtonInHeader: CtaButtonInHeader = {
  buttonText: "apply noooow",
  // you can add a link if you want him to go to some where , leave it empty if you want it to open the form
  // the url that the button at the header will go to - if buttonUrl = null ->  nothing will happened
  buttonUrl: null,
};
