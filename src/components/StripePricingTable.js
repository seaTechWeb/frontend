import React, { useEffect, useRef } from "react";

const StripePricingTable = () => {
  const stripeTableRef = useRef(null);

  useEffect(() => {
    if (!document.querySelector('script[src="https://js.stripe.com/v3/pricing-table.js"]')) {
      const script = document.createElement("script");
      script.src = "https://js.stripe.com/v3/pricing-table.js";
      script.async = true;
      script.onload = () => {
        if (stripeTableRef.current) {
          stripeTableRef.current.innerHTML = `
            <stripe-pricing-table
              pricing-table-id="prctbl_1R0XOkF1XubL36JhxZ8HOt8d"
              publishable-key="pk_live_51R0WXtF1XubL36JhFQE9Tz19XEZA38LRfgp4CvZXB8xRqDogZ1e2tp4jFmFZ8cVBlnlMPfyDHvDuHJ7nrFQrIGus00a5oB0CLi"
            ></stripe-pricing-table>`;
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "50px 0" }}>
      <h2>Our Pricing Plans</h2>
      <div ref={stripeTableRef}></div>
    </div>
  );
};

export default StripePricingTable;
