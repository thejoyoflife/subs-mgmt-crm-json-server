const faker = require("faker");
const _ = require("lodash");

const data = {
  subBase: _.times(50, function(n) {
    return {
      id: n,
      data1: faker.random.number(),
      data2: faker.random.number()
    };
  }),
  activeSubBase: _.times(50, function(n) {
    return {
      id: n,
      data1: faker.random.number(),
      data2: faker.random.number()
    };
  }),
  subscription: _.times(50, function(n) {
    return {
      id: n,
      data1: faker.random.number(),
      data2: faker.random.number()
    };
  }),
  renewed: _.times(50, function(n) {
    return {
      id: n,
      data1: faker.random.number(),
      data2: faker.random.number()
    };
  }),
  unsub: _.times(50, function(n) {
    return {
      id: n,
      data1: faker.random.number(),
      data2: faker.random.number()
    };
  }),
  reveneue: _.times(50, function(n) {
    return {
      id: n,
      data1: faker.random.number(),
      data2: faker.random.number()
    };
  }),
  wimeDetailsData: _.times(100, function(n) {
    return {
      id: n,
      activeSubscriber: faker.random.number(),
      callBack: faker.random.number(),
      directTraffic: faker.random.number(),
      dnd: faker.random.number(),
      referralTraffic: faker.random.number(),
      refund: faker.random.number(),
      renewed: faker.random.number(),
      renewedFailed: faker.random.number(),
      revenue: faker.random.number(),
      revenueRenew: faker.random.number(),
      revenueSub: faker.random.number(),
      subscribed: faker.random.number(),
      tranDate: faker.date.recent(),
      unsubChurn: faker.random.number(),
      unsubDnd: faker.random.number(),
      unsubManual: faker.random.number(),
      unsubPortal: faker.random.number(),
      unsubSms: faker.random.number(),
      unsubscribed: faker.random.number()
    };
  }),
  wimeSummaryData: {
    id: 100,
    activeSubscriber: faker.random.number(),
    callBack: faker.random.number(),
    directTraffic: faker.random.number(),
    dnd: faker.random.number(),
    referralTraffic: faker.random.number(),
    refund: faker.random.number(),
    renewed: faker.random.number(),
    renewedFailed: faker.random.number(),
    revenue: faker.random.number(),
    revenueRenew: faker.random.number(),
    revenueSub: faker.random.number(),
    subscribed: faker.random.number(),
    thisMonthRenewed: faker.random.number(),
    thisMonthRenewedFailed: faker.random.number(),
    thisMonthSubscription: faker.random.number(),
    todayRenewed: faker.random.number(),
    todayRenewedFailed: faker.random.number(),
    todaySubscription: faker.random.number(),
    unsubChurn: faker.random.number(),
    unsubDnd: faker.random.number(),
    unsubManual: faker.random.number(),
    unsubPortal: faker.random.number(),
    unsubSms: faker.random.number(),
    unsubscribed: faker.random.number()
  }
};

exports.handler = (event, context, callback) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept"
  };
  if (event.httpMethod === "OPTIONS") {
    const response = {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify({ message: "You can use CORS" })
    };
    callback(null, response);
    return;
  }
  callback(null, {
    headers,
    statusCode: 200,
    body: JSON.stringify(data)
  });
};
