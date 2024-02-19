import "./Header.scss";
import { BoxWhite } from "@/assets";

export default function Header() {
  return (
    <section className="aspire-web-header">
      <div className="aspire-web-header__left">
        <div className="balance">
          <div className="label">Available Balance</div>
          <div className="balance__info">
            <span>S$</span>
            3000
          </div>
        </div>
      </div>
      <div className="aspire-web-header__right">
        <button className="add-new-card-cta">
          <span>
            <img src={BoxWhite} />
          </span>
          New Card
        </button>
      </div>
    </section>
  );
}
