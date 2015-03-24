
var appSettings = {
    authSettings:{
        token : null
    },
    dataSettings:
    {
        // These are the SAP Netweaver Gateway Demo endpoints.  However, due to CORS reasons we need to run them through a Cloud Code proxy.
        //partnersReadUrl : "https://sapes1.sapdevcenter.com/sap/opu/odata/sap/ZCD204_EPM_DEMO_SRV/BusinessPartners",
        //ordersReadUrl : "https://sapes1.sapdevcenter.com/sap/opu/odata/sap/ZCD204_EPM_DEMO_SRV/BusinessPartners('#BusinesPartnerID#')/SalesOrders",
        //itemsReadUrl: "https://sapes1.sapdevcenter.com/sap/opu/odata/sap/ZCD204_EPM_DEMO_SRV/SalesOrders('#SalesOrderID#')/SalesOrderItems" 
        
        partnersReadUrl: "https://api.everlive.com/v1/yqPFi0boAHdvqEWg/functions/SAPProxy?uri=https://sapes1.sapdevcenter.com/sap/opu/odata/sap/ZCD204_EPM_DEMO_SRV/BusinessPartners",
        ordersReadUrl: "https://api.everlive.com/v1/yqPFi0boAHdvqEWg/functions/SAPProxy?uri=https://sapes1.sapdevcenter.com/sap/opu/odata/sap/ZCD204_EPM_DEMO_SRV/BusinessPartners('#BusinesPartnerID#')/SalesOrders",
        itemsReadUrl: "https://api.everlive.com/v1/yqPFi0boAHdvqEWg/functions/SAPProxy?uri=https://sapes1.sapdevcenter.com/sap/opu/odata/sap/ZCD204_EPM_DEMO_SRV/SalesOrders('#SalesOrderID#')/SalesOrderItems"
    },
    
    sessionSettings:
    {
        selectedPartner: null,
        selectedOrder: null,
        showFromOrder: false
    },
    
    viewSettings:
    {
/*        partnerView: "views/partnerView.html",
        orderView: "views/orderView.html",
        itemsView: "views/itemsView.html"*/
        partnerView: "partnerDetails/view.html",
        orderView: "partnerOrders/view.html",
        itemsView: "orderDetails/view.html"
    }
};