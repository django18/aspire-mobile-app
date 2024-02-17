import { CardActions } from "../mobile-cards/constants";
import "./MobileCardActions.scss";
import {
  FreezeCard,
  SpendLimit,
  GPay,
  ReplaceCard,
  DeactivateCard,
} from "@/assets";

export default function MobileCardActions({ onCardAction }) {
  return (
    <section className="card-actions">
      <div className="card-actions">
        <div
          className="card-action"
          onClick={() => onCardAction(CardActions.FREEZE_CARD)}
        >
          <div>
            <img src={FreezeCard} />
          </div>
          <div>Freeze Card</div>
        </div>
        <div className="card-action">
          <div>
            <img src={SpendLimit} />
          </div>
          <div>Set spend limit</div>
        </div>
        <div className="card-action">
          <div>
            <img src={GPay} />
          </div>
          <div>Add to GPay</div>
        </div>
        <div className="card-action">
          <div>
            <img src={ReplaceCard} />
          </div>
          <div>Replace card</div>
        </div>
        <div
          className="card-action"
          onClick={() => onCardAction(CardActions.DEACTIVATE_CARD)}
        >
          <div>
            <img src={DeactivateCard} />
          </div>
          <div>Cancel card</div>
        </div>
      </div>
    </section>
  );
}
