import React, { PureComponent, Fragment } from "react";
import Card from "../../components/Card/Card";
import "./Cards.css";
import Slider from "react-slick";
import { timeConverter } from "../../utility/utility";

class Cards extends PureComponent {
  state = {
    slider: false,
    slickSetting: {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    },
    posts: null,
    error: false,
    isLocalSaved: false,
    log: new Date()
  };

  componentDidUpdate() {
    this.getDataFromLocal();
    //event to listen local storage
    window.addEventListener('storage', this.getDataFromLocal);
  }

  componentWillUnmount() {
    //clear event listen
    console.log("clear");
    window.removeListener('storage', this.getDataFromLocal)
  }

  getDataFromLocal = () => {
    const posts = JSON.parse(localStorage.getItem("data"))
    if (posts.length <= 5) {
      this.setState({
        posts: posts,
        error: false,
        log: new Date()
      });
    } else {
      this.setState({
        posts: posts,
        slider: true,
        error: false,
        log: new Date()
      });
    }
  };

  render() {
    let cards = <h2>loading ...</h2>;
    // if (this.state.error && !this.state.isLocalSaved) {
    //   cards = <h2> Something went wrong...</h2>;
    // }

    if (this.state.posts) {
      cards = this.state.posts.map((card, index) => {
        return (
          <div className="Card-wrapper" key={card.id}>
            <Card
              image={card.image}
              subtitle={card.subtitle}
              title={card.title}
              startDate={timeConverter(card.start_date)}
              endDate={timeConverter(card.end_date)}
              description={card.description}
            />
          </div>
        );
      });
    }
    let cardsWrapper = <div className="Cards">{cards}</div>;
    if (this.state.posts && this.state.slider) {
      /*Slick use cdn to load css so if network is down it can't be re render*/
      cardsWrapper = <Slider {...this.state.slickSetting}> {cards} </Slider>;
    }

    return (
      <Fragment>
        <h3 style={{ textAlign: "center" }}>
          {" "}
          Last update: {this.state.log.toString()}{" "}
        </h3>
        {cardsWrapper}
      </Fragment>
    );
  }
}

export default Cards;
