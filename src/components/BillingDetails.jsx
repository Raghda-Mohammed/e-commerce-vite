import React from 'react'

const BillingDetails = () => {
  return (
    <div className="w-full md:w-1/2 px-4">
    <h2 className="text-xl font-bold mb-4">Billing Details</h2>
    <form>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">First Name</label>
        <input
          type="text"
          className="w-full border px-4 py-2 rounded"
          placeholder="John"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Company Name</label>
        <input
          type="text"
          className="w-full border px-4 py-2 rounded"
          placeholder="Your Company"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Street Address</label>
        <input
          type="text"
          className="w-full border px-4 py-2 rounded"
          placeholder="123 Main Street"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Apartment (Optional)</label>
        <input
          type="text"
          className="w-full border px-4 py-2 rounded"
          placeholder="Apartment, suite, unit, etc."
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Town / City</label>
        <input
          type="text"
          className="w-full border px-4 py-2 rounded"
          placeholder="City Name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Phone Number</label>
        <input
          type="text"
          className="w-full border px-4 py-2 rounded"
          placeholder="+1 123 456 7890"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email Address</label>
        <input
          type="email"
          className="w-full border px-4 py-2 rounded"
          placeholder="email@example.com"
        />
      </div>
      <div className="mb-4">
        <label>
          <input type="checkbox" /> Save my information for faster checkout next time
        </label>
      </div>
    </form>
  </div>
);
};


export default BillingDetails