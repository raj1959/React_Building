import React, { Component } from 'react'
import axios from 'axios';
import Time from 'react-time-format'
// import './detail.css';
const ReactMarkdown = require('react-markdown/with-html')


class Details extends Component {

  constructor(props) {
    super(props);

    this.state = {
      question: [],
    };
  }


  async componentDidMount() {
    const { match: { params } } = this.props;
    const question = (await axios.get(`http://localhost:8000/api/housee/${params.pk}`)).data;
    console.log(question)
    this.setState({
      question,
    });
  }


  render() {
    const {question} = this.state;

    if (question === null) return <p>Loading ...</p>;

    return (
      <div>

      <div id="fact">
        <section id="" class="py-5 text-white">
            <div class="container">
              <div class="row text-center">
                <div class="col-md-12">
                  <h1 class="display-4">{ question.title }</h1>
                  <p class="lead">
                    <i class="fa fa-map-marker"></i> { question.city } { question.state }, { question.zipcode }</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* <!-- Breadcrumb --> */}
        <section id="bc" class="mt-3">
          <div class="">
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="# ">Listings</a>
                </li>
                <li class="breadcrumb-item active">{ question.title }</li>
              </ol>
            </nav>
          </div>
        </section>


  {/* <!-- Listing --> */}
  <section id="listing" class="py-4 bg-white">
    <div class="container">
      <a href="{% url 'listings' %}" class="btn btn-light mb-4">Back To Listings</a>
      <div class="row">
        <div class="col-md-9">
          {/* <!-- Home Main Image --> */}
          <img src={ question.photo_main } alt="Main Phogo" class="img-main img-fluid mb-3"  />
          {/* <!-- Thumbnails --> */}
          <div class="row mb-5 thumbs">
            <div class="col-md-2">
              <a href={question.photo_1 } data-lightbox="home-images">
                <img src={question.photo_1 }  alt="" class="img-fluid" />
              </a>
            </div>
            <div class="col-md-2">
              <a href={question.photo_2 } data-lightbox="home-images">
                <img src={question.photo_2 } alt="" class="img-fluid" />
              </a>
            </div>

            <div class="col-md-2">
              <a href={question.photo_3 } data-lightbox="home-images">
                <img src={question.photo_3 } alt="" class="img-fluid" />
              </a>
            </div>

            <div class="col-md-2">
              <a href={question.photo_4 } data-lightbox="home-images">
                <img src={question.photo_4 } alt="" class="img-fluid" />
              </a>
            </div>
  
            <div class="col-md-2">
              <a href={question.photo_5 } data-lightbox="home-images">
                <img src={question.photo_5} alt="" class="img-fluid" />
              </a>
            </div>
    

            <div class="col-md-2">
              <a href={question.photo_6 } data-lightbox="home-images">
                <img src={question.photo_6 } alt="" class="img-fluid" />
              </a>
            </div>

          </div>

          {/* <!-- Fields --> */}
          <div class="row mb-5 fields">
            <div class="col-md-6">
              <ul class="list-group list-group-flush">
                <li class="list-group-item text-info">
                  <i class="fa fa-money-bill-alt"></i> Asking Price:
                  <span class="float-right">$ { question.price }</span>
                </li>
                <li class="list-group-item text-info">
                  <i class="fa fa-bed"></i> Bedrooms:
                  <span class="float-right">{ question.bedrooms }</span>
                </li>
                <li class="list-group-item text-info">
                  <i class="fa fa-bath"></i> Bathrooms:
                  <span class="float-right">{ question.bathrooms }</span>
                </li>
                <li class="list-group-item text-info">
                  <i class="fa fa-car"></i> Garage:
                  <span class="float-right">{question.garage }
                  </span>
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul class="list-group list-group-flush">
                <li class="list-group-item text-info">
                  <i class="fa fa-th-large"></i> Square Feet:
                  <span class="float-right">{ question.sqft }</span>
                </li>
                <li class="list-group-item text-info">
                  <i class="fa fa-square"></i> Lot Size:
                  <span class="float-right">{ question.lot_size } Acres
                  </span>
                </li>
                <li class="list-group-item text-info">
                  <i class="fa fa-calendar"></i> Listing Date:
                  <span class="float-right"> <Time value={ question.list_date } format="YYYY-MM-DD"  /></span>
                </li>
                <li class="list-group-item text-danger">
                  <i class="fa fa-bed"></i> Realtor:
                  <span class="float-right">{ question.realtor }
                  </span>
                </li>


              </ul>
            </div>
          </div>

          {/* <!-- Description --> */}
          <div class="row mb-5">
            <div class="col-md-12">

            <ReactMarkdown  source = { question.description } escapeHtml={false} />
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card mb-3">
            <img class="card-img-top" src="{{ listing.realtor.photo.url }}" alt="" />
            <div class="card-body">
              <h5 class="card-title">Property Realtor</h5>
              <h6 class="text-danger">{ question.realtor }</h6>
            </div>
          </div>
          <button class="btn-primary btn-block btn-lg" data-toggle="modal" data-target="#inquiryModal">Make An Inquiry</button>
        </div>
      </div>
    </div>
  </section>


  


      </div>
    )
  }
}

export default Details;
