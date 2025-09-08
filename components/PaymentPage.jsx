import GPayLogo from "../src/assets/gpay-icon.png";
import paytmLogo from "../src/assets/paytm-icon.png";
import visaLogo from "../src/assets/visa-icon.png";

export default function PaymentPage() {
  return (
    <section className="p-6 flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-20 max-w-6xl mx-auto">
      {/* Payment Methods */}
      <div className="w-full md:w-1/3">
        <p className="text-lg font-semibold mb-6">Choose Payment Method</p>
        <ul className="space-y-5">
          {/* Google Pay */}
          <li>
            <label className="flex items-center gap-4 cursor-pointer p-3 rounded-lg hover:shadow-md transition">
              <input
                type="radio"
                name="payment"
                value="gpay"
                className="appearance-none w-5 h-5 rounded-full bg-gray-200 border border-gray-400 checked:bg-[#F2BA1D] checked:border-[#F2BA1D] transition"
              />
              <img src={GPayLogo} alt="Google Pay" className="h-10" />
            </label>
          </li>

          {/* Paytm */}
          <li>
            <label className="flex items-center gap-4 cursor-pointer p-3 rounded-lg hover:shadow-md transition">
              <input
                type="radio"
                name="payment"
                value="paytm"
                className="appearance-none w-5 h-5 rounded-full bg-gray-200 border border-gray-400 checked:bg-[#F2BA1D] checked:border-[#F2BA1D] transition"
              />
              <img src={paytmLogo} alt="Paytm" className="h-10" />
            </label>
          </li>

          {/* Visa */}
          <li>
            <label className="flex items-center gap-4 cursor-pointer p-3 rounded-lg hover:shadow-md transition">
              <input
                type="radio"
                name="payment"
                value="visa"
                className="appearance-none w-5 h-5 rounded-full bg-gray-200 border border-gray-400 checked:bg-[#F2BA1D] checked:border-[#F2BA1D] transition"
              />
              <img src={visaLogo} alt="Visa" className="h-10" />
            </label>
          </li>
        </ul>
      </div>

      {/* Form Section */}
      <form
        action=""
        className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full md:w-2/3"
      >
        {/* First name */}
        <input
          type="text"
          name="first-name"
          id="first-name"
          placeholder="First Name"
          className="p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F2BA1D] transition"
        />

        {/* Last name */}
        <input
          type="text"
          name="last-name"
          id="last-name"
          placeholder="Last Name"
          className="p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F2BA1D] transition"
        />

        {/* Address */}
        <textarea
          name="address"
          id="address"
          placeholder="Address"
          className="row-span-2 p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F2BA1D] transition min-h-[100px]"
        />

        {/* Country */}
        <input
          type="text"
          name="country"
          id="country"
          placeholder="Country"
          className="p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F2BA1D] transition"
        />

        {/* City */}
        <input
          type="text"
          name="city"
          id="city"
          placeholder="City"
          className="p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F2BA1D] transition"
        />

        {/* Card Number */}
        <input
          type="text"
          name="card-number"
          id="card-number"
          placeholder="Card Number"
          className="col-span-1 md:col-span-2 p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F2BA1D] transition"
        />

        {/* CVV */}
        <input
          type="text"
          name="cvv"
          id="cvv"
          placeholder="CVV"
          className="p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F2BA1D] transition"
        />

        {/* Expiry date */}
        <input
          type="text"
          name="expiry-date"
          id="expiry-date"
          placeholder="Expiry Date"
          className="p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F2BA1D] transition"
        />

        {/* UPI id */}
        <div className="col-span-1 md:col-span-2 flex flex-col gap-1">
          <input
            type="text"
            name="upi-id"
            id="upi-id"
            placeholder="Enter your UPI ID"
            className="p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F2BA1D] transition"
          />
          <p className="text-xs text-gray-500">
            Check your phone to confirm payment
          </p>
        </div>

        {/* Confirm button */}
        <input
          type="submit"
          name="submit"
          id="submit"
          value="Confirm"
          className="col-span-1 md:col-span-2 bg-[#F2BA1D] text-white font-medium p-3 rounded-full shadow-sm cursor-pointer hover:bg-yellow-600 transition"
        />
      </form>
    </section>
  );
}
