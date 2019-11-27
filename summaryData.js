module.exports = function () {
    var faker = require("faker");
    var _ = require("lodash");
    return {
        wimeData: {
            wimeSummaryData: _.times(1, function (n) {
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
            }
            )
        }
    }
} 