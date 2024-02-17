import "./MobileView.scss";
import MobileAppHeader from "@/components/mobile-header/MobileAppHeader";
import MobileCards from "@/components/mobile-cards/MobileCards";
import MobileMenu from "@/components/mobile-menu/MobileMenu";
import MobileCardInfo from "@/components/mobile-card-info/MobileCardInfo";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "@/store/cards-slice";

export default function MobileView() {
  const [isNewCardDialogOpen, setIsNewCardDialogOpen] = useState(false);
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const onAddNewCard = (e) => {
    e.preventDefault();
    dispatch(addCard(name));
    setName("");
    setIsNewCardDialogOpen(false);
  };

  return (
    <section className="mobile-view">
      <MobileAppHeader onNewCardAdd={() => setIsNewCardDialogOpen(true)} />
      <MobileCards />
      <MobileCardInfo />
      <MobileMenu />
      {isNewCardDialogOpen && (
        <div className="dialog-add-new-card">
          <form>
            <label>
              Enter Card Name
              <input
                type="text"
                ref={inputRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <button onClick={onAddNewCard}>Submit</button>
          </form>
        </div>
      )}
    </section>
  );
}
