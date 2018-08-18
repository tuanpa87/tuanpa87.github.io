import React, { PureComponent, Fragment } from "react";
import axios from "../../axios-orders";
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
    data: null,
    error: false,
    isLocalSaved: false,
    log: new Date()
  };

  componentDidMount() {
    this.fetchData();
    this.interval = setInterval(() => {
      this.fetchData();
    }, 15000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    console.log("clear");
  }

  getDataFromLocal = () => {
    console.log("getfromlocal");
    const dataCut = JSON.parse(localStorage.getItem("data"));
    if (dataCut) {
      this.setState({ isLocalSaved: true });
      if (dataCut.length <= 5) {
        this.setState({
          data: dataCut
        });
      } else {
        this.setState({
          data: dataCut,
          slider: true
        });
      }
    }
    return dataCut;
  };

  fetchData = () => {
    axios
      .get("/")
      .then(response => {
        console.log("fetch");
        localStorage.setItem("data", JSON.stringify(response.data));
        this.setState({
          log: new Date(),
          error: false
        });
        this.getDataFromLocal();
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: true });
        this.getDataFromLocal();
      });
  };

  render() {
    let cards = <h2>loading ...</h2>;
    if (this.state.error && !this.state.isLocalSaved) {
      cards = <h2> Something went wrong...</h2>;
    }

    if (this.state.data) {
      cards = this.state.data.map((card, index) => {
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
    if (this.state.data && this.state.slider) {
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
