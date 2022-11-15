import IconsClients from "./IconsClients";

function Information() {
  return (
    <section className="main__info">
      <h1 className="main__info-h1">Make remote work</h1>
      <p className="main__info-p">
        Get you team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <a className="main__info-a" href="#">
        Learn more
      </a>
      <IconsClients />
    </section>
  );
}

export default Information;
