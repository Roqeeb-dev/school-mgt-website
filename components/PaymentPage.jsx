import GPayLogo from "../src/assets/gpay-icon.png";
import paytmLogo from "../src/assets/paytm-icon.png";
import visaLogo from "../src/assets/visa-icon.png";

export default function PaymentPage() {
  return (
    <section>
      <div>
        <p>Choose Payment Method</p>
        <ul>
          <li className="flex items-center gap-5">
            <input
              type="checkbox"
              name="google-checkbox"
              id="google-checkbox"
            />
            <img src={GPayLogo} alt="" />
          </li>

          {/* Paytm checkbox */}
          <li className="flex items-center gap-5">
            <input
              type="checkbox"
              name="google-checkbox"
              id="google-checkbox"
            />
            <img src={paytmLogo} alt="" />
          </li>

          {/* Visa logo */}
          <li className="flex items-center gap-5">
            <input
              type="checkbox"
              name="google-checkbox"
              id="google-checkbox"
            />
            <img src={visaLogo} alt="" />
          </li>
        </ul>
      </div>
      <div></div>
    </section>
  );
}
