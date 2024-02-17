import CardDetails from "@/assets/mobile/Card-Details.svg";
import DownArrow from "@/assets/down-arrow.svg";
import { useState } from "react";
import "./Accordion.scss";

export default function Accordion({
  label,
  labelLogo,
  initialToggleState = false,
  children,
}) {
  const [isOpen, setIsOpen] = useState(initialToggleState);
  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="aspire-accordion">
      <div className="aspire-accordion__trigger" onClick={toggleAccordion}>
        <div className="label">
          <span>
            <img src={labelLogo} />
          </span>
          {label}
        </div>
        <div>
          <img src={DownArrow} />
        </div>
      </div>
      {isOpen && <div className="aspire-accordion__content">{children}</div>}
    </div>
  );
}
