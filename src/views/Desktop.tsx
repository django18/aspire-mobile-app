import Header from "@/components/header/Header";
import Tabs from "@/components/shared/tabs/Tabs";
import Sidebar from "@/components/sidebar/Sidebar";
import "./Desktop.scss";
import CardCarousel from "@/components/card-carousel/CardCarousel";
import MobileCardActions from "@/components/mobile-card-actions/MobileCardActions";
import MobileCardInfo from "@/components/mobile-card-info/MobileCardInfo";

export default function Desktop() {
  const onCardAction = () => {};
  return (
    <section className="aspire-web">
      <Sidebar />
      <section className="aspire-web-container">
        <Header />
        <Tabs />
        <section className="aspire-web-content">
          <div className="aspire-web-content__left">
            <div className="web-carousel-container">
              <CardCarousel />
            </div>
          </div>
          <div className="aspire-web-content__right">
            <MobileCardInfo />
          </div>
        </section>
      </section>
    </section>
  );
}
