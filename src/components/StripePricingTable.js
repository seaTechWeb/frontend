import React, { useEffect } from "react";

const StripePricingTable = () => {
  console.log("✅ StripePricingTable component is rendering...");

  useEffect(() => {
    console.log("✅ useEffect is running...");

    if (!document.querySelector('script[src="https://js.stripe.com/v3/pricing-table.js"]')) {
      const script = document.createElement("script");
      script.src = "https://js.stripe.com/v3/pricing-table.js";
      script.async = true;
      script.onload = () => console.log("✅ Stripe script loaded successfully!");
      script.onerror = () => console.error("❌ Error loading Stripe script!");
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "50px 0" }}>
      <h2>Our Pricing Plans</h2>
      <stripe-pricing-table
        pricing-table-id="prctbl_1R0XOkF1XubL36JhxZ8HOt8d"
        publishable-key="pk_live_51R0WXtF1XubL36JhFQE9Tz19XEZA38LRfgp4CvZXB8xRqDogZ1e2tp4jFmFZ8cVBlnlMPfyDHvDuHJ7nrFQrIGus00a5oB0CLi"
      ></stripe-pricing-table>
      <p style={{ color: "red", fontWeight: "bold" }}>🚀 If you see this text, the component is rendering!</p>
    </div>
  );
};

export default StripePricingTable;
