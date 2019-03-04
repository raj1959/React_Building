import React, { Component } from 'react';
import HouseService from './HouseService';
// import {Link} from 'react-router-dom';
import TimeAgo from 'react-timeago'

const houseService = new HouseService();

class HouseList extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      houses: [],
      nextPageURL: '',
      searchText: ''
    };

    this.nextPage = this.nextPage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount()
  {
    var self = this;
    houseService.getHouses()
    .then(function (result) {
      console.log(result);
      self.setState({ houses: result.data, nextPageURL: result.nextlink })
    });
  }

  // handleDelete(e,pk){

  //   var self = this;
  //   movieService.deleteCustomer({pk : pk}).then(()=>{
  //     var newArr = self.state.customers.filter(function(obj) {
  //       return obj.pk !== pk;
  //     });

  //     self.setState({customers: newArr})
  //   });
    
  // }

  nextPage()
  {
    var self = this;
    console.log(this.state.nextPageURL);
    houseService.getHousesByURL(this.state.nextPageURL)
    .then((result) => {
      self.setState({ houses: result.data, nextPageURL: result.nextlink })
    });
  }

  onSearchChange = e => {
		this.setState({ searchText: e.target.value });
	};

	handleSubmit(e) {
		e.preventDefault();
		this.props.onSearch(this.query.value);
    e.currentTarget.reset();
    
  };

  render()
  {
    return(

    <div>


      <section id="fact22" className="py-5 text-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h1 className="display-4">Browse Our Properties</h1>
              <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, pariatur!</p>
            </div>
          </div>
        </div>
      </section>

    

 {/* <!-- Breadcrumb --> */}

   <section id="bc" className="mt-3">
  
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="{% url 'index' %}">
              <i className="fa fa-home"></i> Home</a>
          </li>
          <li className="breadcrumb-item active"> Browse Listings</li>
        </ol>
      </nav>
  
  </section>

<div class="row">

{this.state.houses.map( c =>
<div class="col-sm-4">
  <div className="card " key={c.pk} >
    <img className="card-img-top" src={c.photo_main} alt="" style={{ height: "250px" }}  />
   
    <span class="product-new-label bg-primary">$ {c.price} </span>
            
  
    <div class="card-body bg-white">
    <div className="listing-heading text-center">
      <h4 class="card-title text-primary">{c.title}</h4>
      <p className="text-dark"><i className="fa fa-map-marker  text-info"></i>  {c.city } {c.state}, {c.zipcode}</p>
    </div>
    <hr/>
    <div className="row py-2 text-info">
        <div className="col-6">
          <i className="fa fa-th-large"></i> Sqft: {c.sqft}</div>
        <div className="col-6">
          <i className="fa fa-car"></i> Garage: {c.garage} </div>
      </div>
      <div className="row py-2 text-info">
        <div className="col-6">
          <i className="fa fa-bed"></i> Bedrooms: {c.bedrooms}</div>
        <div className="col-6">
          <i className="fa fa-bath"></i> Bathrooms: {c.bathroom}</div>
      </div>
      <hr/>
      <div className="row py-2 text-dark">
          <div className="col-12">
          <i className="fa fa-user"></i> Agent: {c.realtor} </div>
      </div>
      <div className="row text-danger pb-2">
          <div className="col-12">
          <i className="fa fa-clock-o"></i>  Pub Time: <TimeAgo date={ c.list_date } /> 
          </div>   
                
    </div>
      <hr/>
      <a href={"/project/" + c.pk} class="btn btn-primary btn-block"><i class="fa fa-eye"></i>  More Info</a>
    </div>
  </div>

  </div>
  )}
  </div>


  <button className="btn btn-primary" onClick= { this.nextPage }> Next Page </button>
  
  </div>




    );
  }
}

export default HouseList;