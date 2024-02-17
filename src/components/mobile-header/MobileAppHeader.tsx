import "./MobileAppHeader.scss";
import { LogoSmall, Box } from "@/assets";

export default function MobileAppHeader({ onNewCardAdd }) {
  return (
    <section className="header">
      <div className="account-balance">
        <h1>Account balance</h1>
        <div className="details">
          <span className="currency">S$</span>
          <span className="price">3,000</span>
        </div>
      </div>
      <div className="header-logo">
        <div className="header-logo__logo">
          <img src={LogoSmall} />
        </div>
        <button className="add-new-card-cta" onClick={onNewCardAdd}>
          <span>
            <img src={Box} />
          </span>
          New Card
        </button>
      </div>
    </section>
  );
}
