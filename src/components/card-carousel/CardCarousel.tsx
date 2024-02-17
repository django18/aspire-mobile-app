import { useEffect, useState } from "react";
import "./CardCarousel.scss";
import Cards from "../shared/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCard } from "@/store/cards-slice";

export default function CardCarousel() {
  const [cards, setCards] = useState([]);
  const dispatch = useDispatch();

  const storeCards = useSelector((state) => state.cards.data);

  useEffect(() => {
    setCards(storeCards);
  }, [storeCards]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 < 0 ? cards.length - 1 : prev - 1));
    dispatch(
      setActiveCard(currentSlide - 1 < 0 ? cards.length - 1 : currentSlide - 1)
    );
  };
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1 > cards.length - 1 ? 0 : prev + 1));
    dispatch(
      setActiveCard(currentSlide + 1 > cards.length - 1 ? 0 : currentSlide + 1)
    );
  };

  return (
    <div className="carousel">
      {cards.map((c, index) => {
        if (index === currentSlide) {
          return (
            <div className="carousel__item roll-out">
              <Cards key={c.id} cardInfo={c} />
            </div>
          );
        }
      })}

      <div className="carousel-nav">
        <button
          onClick={prevSlide}
          className="carousel-button carousel-button--prev"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="carousel-button carousel-button--prev"
        >
          Next
        </button>
      </div>
    </div>
  );
}
