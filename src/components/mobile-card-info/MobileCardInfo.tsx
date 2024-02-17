import "./MobileCardInfo.scss";
import {
  CardDetails,
  Transactions,
  FileStorage,
  BusinessAndFinance,
  Next,
} from "@/assets";
import Accordion from "../shared/accordion/Accordion";

export default function MobileCardInfo() {
  return (
    <section className="cards-info-section">
      <Accordion label="Card details" labelLogo={CardDetails}>
        <div>Card Details</div>
      </Accordion>
      <Accordion
        label="Recent transactions"
        labelLogo={Transactions}
        initialToggleState
      >
        <ul className="transaction-list">
          <li className="transaction-list__item">
            <div className="transaction-icon">
              <img src={FileStorage} />
            </div>
            <div className="transaction-details">
              <span className="heading">Hamleys</span>
              <span className="date">20 May 2020</span>
              <span className="type">
                <span className="type-icon">
                  <img src={BusinessAndFinance} />
                </span>
                Charged to debit card
              </span>
            </div>
            <div className="transaction-amount">
              + $$ 150
              <span>
                <img src={Next} />
              </span>
            </div>
          </li>
          <li className="transaction-list__item">
            <div className="transaction-icon">
              <img src={FileStorage} />
            </div>
            <div className="transaction-details">
              <span className="heading">Hamleys</span>
              <span className="date">20 May 2020</span>
              <span className="type">
                <span className="type-icon">
                  <img src={BusinessAndFinance} />
                </span>
                Charged to debit card
              </span>
            </div>
            <div className="transaction-amount">
              + $$ 150
              <span>
                <img src={Next} />
              </span>
            </div>
          </li>
        </ul>
      </Accordion>
    </section>
  );
}
