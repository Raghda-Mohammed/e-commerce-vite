import React from "react";
import BillingDetails from "../components/BillingDetails";
import OrderSummary from "../components/OrderSummary";


const CheckoutPage = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="flex gap-4">
        {/* نموذج الفاتورة */}
        <BillingDetails />
        {/* ملخص الطلب */}
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckoutPage;
