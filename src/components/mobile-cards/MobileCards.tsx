import { useEffect, useState } from "react";
import "./MobileCards.scss";
import MobileCardActions from "../mobile-card-actions/MobileCardActions";
import CardCarousel from "../card-carousel/CardCarousel";
import { CardActions } from "./constants";
import { useSelector, useDispatch } from "react-redux";
import { updateCards } from "@/store/cards-slice";

const CARD_TAB_MY_CARDS = "My Cards";
const CARD_TAB_All_CARDS = "All Cards";

export default function MobileCards() {
  const dispatch = useDispatch();
  const [activeTab, setIsActiveTab] = useState(CARD_TAB_MY_CARDS);
  const [activeCard, setActiveCard] = useState(0);
  const [isCancelCardDialogOpen, setIsCancelCardDialogOpen] = useState(false);

  const storeActiveCard = useSelector((state) => state.cards.activeCard);
  const storeCards = useSelector((state) => state.cards.data);

  useEffect(() => {
    setActiveCard(storeActiveCard);
  }, [storeActiveCard]);

  const onCardAction = (action: string) => {
    switch (action) {
      case CardActions.FREEZE_CARD:
        const cards = storeCards.map((c, i) => {
          if (i === activeCard) {
            return {
              ...c,
              freezed: Boolean(!c.freezed),
            };
          }
          return c;
        });
        dispatch(updateCards(cards));
        break;

      default:
        setIsCancelCardDialogOpen(true);
        break;
    }
  };

  const setCardDeactivate = () => {
    const cards = storeCards.map((c, i) => {
      if (i === activeCard) {
        return {
          ...c,
          deactivated: true,
        };
      }
      return c;
    });
    dispatch(updateCards(cards));
  };

  const onCancelDialogConfirm = () => {
    setCardDeactivate();
    setIsCancelCardDialogOpen(false);
  };

  return (
    <>
      <section className="cards-section">
        <div className="cards-section-tabs">
          <span
            className={activeTab === CARD_TAB_MY_CARDS ? "active" : ""}
            onClick={() => setIsActiveTab(CARD_TAB_MY_CARDS)}
          >
            My debit cards
          </span>
          <span
            className={activeTab === CARD_TAB_All_CARDS ? "active" : ""}
            onClick={() => setIsActiveTab(CARD_TAB_MY_CARDS)}
          >
            All company cards
          </span>
        </div>
        <CardCarousel />
        <MobileCardActions onCardAction={onCardAction} />
      </section>
      {isCancelCardDialogOpen && (
        <div className="dialog-cancel">
          <p>Are you sure you want to deactivate card ?</p>
          <button
            className="cancel"
            onClick={() => setIsCancelCardDialogOpen(false)}
          >
            Cancel
          </button>
          <button className="success" onClick={onCancelDialogConfirm}>
            Yes
          </button>
        </div>
      )}
    </>
  );
}
