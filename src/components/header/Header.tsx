import { useDispatch } from "react-redux";
import "./Header.scss";
import { BoxWhite } from "@/assets";
import { addCard } from "@/store/cards-slice";
import { useRef, useState } from "react";

export default function Header() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [isNewCardDialogOpen, setIsNewCardDialogOpen] = useState(false);
  const inputRef = useRef(null);

  const onAddNewCard = (e) => {
    e.preventDefault();
    dispatch(addCard(name));
    setName("");
    setIsNewCardDialogOpen(false);
  };
  return (
    <>
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
          <button
            className="add-new-card-cta"
            onClick={() => setIsNewCardDialogOpen(true)}
          >
            <span>
              <img src={BoxWhite} />
            </span>
            New Card
          </button>
        </div>
      </section>
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
            <button onClick={() => setIsNewCardDialogOpen(false)}>
              Cancel
            </button>
            <button onClick={onAddNewCard}>Submit</button>
          </form>
        </div>
      )}
    </>
  );
}
