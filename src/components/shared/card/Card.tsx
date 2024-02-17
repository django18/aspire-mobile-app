import "./Card.scss";
import { LogoWhite, VisaLogo, Eye } from "@/assets";

export default function Cards({ cardInfo }) {
  const last4Digits = cardInfo.card_number.substring(12);
  let cardClasses = cardInfo.freezed ? "card freezed" : "card";
  if (cardInfo.deactivated) cardClasses += " deactivated";
  return (
    <div className={cardClasses}>
      <span className="card__company">
        <img src={LogoWhite} />
      </span>
      <span className="card__provider">
        <img src={VisaLogo} />
      </span>
      <div className="card__name">{cardInfo.name}</div>
      <div className="card__number">
        <div className="card__number-circle" />
        <div className="card__number-circle" />
        <div className="card__number-circle" />
        <div className="card__number-circle" />
        <div className="card__number-circle" />
        <div className="card__number-circle" />
        <div className="card__number-circle" />
        <div className="card__number-circle" />
        <div className="card__number-circle" />
        <div className="card__number-circle" />
        <div className="card__number-circle" />
        <div className="card__number-circle" />
        <span>{last4Digits}</span>
      </div>
      <div className="card__details">
        <span>Thru: {cardInfo.expiry}</span>
        <span>CVV: ***</span>
      </div>
    </div>
  );
}
