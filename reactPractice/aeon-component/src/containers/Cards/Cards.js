import React, { PureComponent, Fragment } from "react";
import axios from "../../axios-orders";
import Card from "../../components/Card/Card";
import "./Cards.css";
import Slider from "react-slick";

class Cards extends PureComponent {
  state = {
    data: null,
    error: false,
    slider: false,
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

  fetchData = () => {
    axios
      .get("/")
      .then(response => {
        //console.log(response.data)
        console.log("fetch");
        localStorage.setItem("data", JSON.stringify(response.data));
        this.setState({ isLocalSaved: true });

        console.log("getfromlocal");
        const dataCut = JSON.parse(localStorage.getItem("data")).slice(0, 6);
        console.log(this.state);
        if (dataCut.length <= 5) {
          this.setState({
            data: dataCut,
            error: false
          });
        } else {
          this.setState({
            data: dataCut,
            slider: true,
            error: false
          });
        }

        if (!this.state.error) {
          this.setState({
            log: new Date()
          });
        }
      })
      .catch(error => this.setState({ error: true }));
  };

  timeConverter = UNIX_timestamp => {
    var a = new Date(UNIX_timestamp * 1000);
    var year = a.getFullYear();
    var month = a.getMonth() + 1;
    var date = a.getDate();
    var time = year + "/" + month + "/" + date;
    return time;
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
              startDate={this.timeConverter(card.start_date)}
              endDate={this.timeConverter(card.end_date)}
              description={card.description}
            />
          </div>
        );
      });
    }
    let cardsWrapper = <div className="Cards">{cards}</div>;
    if (this.state.data && this.state.slider) {
       /*Slick use cdn to load css so if network is down it can't be re render*/
      let settings = {
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
      };
      cardsWrapper = <Slider {...settings}> {cards} </Slider>;
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
