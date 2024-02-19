import "./Tabs.scss";

export default function Tabs() {
  const setIsActiveTab = () => {};
  return (
    <div className="cards-section-tabs">
      <span className="active" onClick={() => setIsActiveTab()}>
        My debit cards
      </span>
      <span onClick={() => setIsActiveTab()}>All company cards</span>
    </div>
  );
}
