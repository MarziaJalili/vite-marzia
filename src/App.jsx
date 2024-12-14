import "./style.css";
function App() {
  return (
    <>
      <main className="order-card">
        <img className="order-card__image" src="../public/images/illustration-hero.svg" alt="illustration-hero" />

        <div className="order-card__main-content">
          <h1 className="order-card__heading">Order Summary</h1>

          <p className="order-card__features">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>

          <section className="order-card__details">
            <img src="./public/images/icon-music.svg" alt="icon-music" />

            <span className="details__price">
              <b>Annual Plan</b>
              $59.99/year
            </span>

            <button className="details__change">
              Change
            </button>
          </section>

          <button className="order-card__proceed">
            Proceed to Payment
          </button>

          <button className="order-card__cancel-order">
            Cancel Order
          </button>
        </div>
      </main>
    </>
  )
}

export default App
