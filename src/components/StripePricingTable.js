import React from "react";

const StripePricingTable = () => {
  return (
    <div>
      <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      <stripe-pricing-table
        pricing-table-id="prctbl_1R0XOkF1XubL36JhxZ8HOt8d"
        publishable-key="pk_live_51R0WXtF1XubL36JhFQE9Tz19XEZA38LRfgp4CvZXB8xRqDogZ1e2tp4jFmFZ8cVBlnlMPfyDHvDuHJ7nrFQrIGus00a5oB0CLi"
      ></stripe-pricing-table>
    </div>
  );
};

export default StripePricingTable;
