import logo from "@/assets/logo.svg";
import HomeIcon from "@/assets/Home.svg";
import CardsIcon from "@/assets/Card.svg";
import AccountIcon from "@/assets/Account.svg";
import CreditIcon from "@/assets/Credit.svg";
import PaymentsIcon from "@/assets/Payments.svg";

import "@/components/sidebar/Sidebar.scss";

const menuList = [
  {
    label: "Home",
    icon: HomeIcon,
    iconAlt: "Home",
    link: "/home",
  },
  {
    label: "Cards",
    icon: CardsIcon,
    iconAlt: "Cards",
    link: "/Cards",
  },
  {
    label: "Payments",
    icon: PaymentsIcon,
    iconAlt: "Payments",
    link: "/Payments",
  },
  {
    label: "Credit",
    icon: CreditIcon,
    iconAlt: "Credit",
    link: "/Credit",
  },
  {
    label: "Settings",
    icon: AccountIcon,
    iconAlt: "Settings",
    link: "/Settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="sidebar-container" aria-label="Sidebar">
      <div className="sidebar">
        <a href="https://aspire.com/" className="logo">
          <div className="logo__container">
            <img src={logo} alt="Aspire Logo" />
          </div>
          <div className="logo__text">
            Trusted way of banking for 3,000+ SMEs and startups in Singapore
          </div>
        </a>
        <ul className="menu">
          {menuList.map((item) => (
            <li className="menu-item">
              <span>
                <img src={item.icon} alt={item.iconAlt} />
              </span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
