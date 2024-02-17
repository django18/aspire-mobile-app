import "./MobileMenu.scss";
import {
  MobileHome,
  MobileAccount,
  MobileCards,
  MobileCredit,
  MobilePayments,
} from "@/assets";

export default function MobileMenu() {
  return (
    <ul className="app-menu">
      <li className="app-menu__item">
        <img src={MobileHome} alt="" className="" />
        <span>Home</span>
      </li>
      <li className="app-menu__item active">
        <img src={MobileCards} alt="" className="" />
        <span>Cards</span>
      </li>
      <li className="app-menu__item">
        <img src={MobilePayments} alt="" className="" />
        <span>Payments</span>
      </li>
      <li className="app-menu__item">
        <img src={MobileCredit} alt="" className="" />
        <span>Credit</span>
      </li>
      <li className="app-menu__item">
        <img src={MobileAccount} alt="" className="" />
        <span>Profile</span>
      </li>
    </ul>
  );
}
