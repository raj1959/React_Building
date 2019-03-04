import React, { Component } from 'react'

class Index extends Component {
  render() {
    return (
      <div>
        <div className="modal fade bd-example-modal-lg" id="myModal" role="dialog">
        <div className="modal-dialog modal-dialog-centered ">
        <div className="modal-content " id="fact11">
            <div className="modal-header">
            <h3 className="modal-title text-success"> Welcome To Raj Housing  </h3>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            
            </div>
            <div className="modal-body">
            <h4 className="text-white text-center">We Give Best Quality and Service </h4>
            <p className="bg-success" style={{padding:"10p", borderRadius: "3px" }}>If You Have Any Query About House You Can Contact Us :</p>
            <h5><i className="fa fa-envelope text-success"></i> <a href="mailto:rajr97555@gmail.com" className="text-white" style={{textDecoration: "none"}}>&nbsp;&nbsp;    rajr97555@gmail.com</a></h5>
            <h5 style={{marginTop: "20px"}}><i className="fa fa-phone text-success"></i>  <a href="tel:+48722750618" className="text-white" style={{textDecoration: "none"}}>&nbsp;&nbsp;    +48722750618</a></h5>
            <br/><h4 className="text-success"> Please Subscribe Us To Get Latest Offer </h4>
          
                <div className="form-group">
                <input className="form-control" type="text" placeholder="Enter Email : raj@gmail.com" />
                </div>

                <div className="form-group text-right">
                <button className="btn btn-success " data-dismiss="modal"><i className="fa fa-arrow-right"></i>   Subscribe Us </button>
                </div>
            </div>
        <div className="modal-footer">
           <button type="button" className="btn btn-danger text-white close" data-dismiss="modal" style={{padding:"10px"}}> <i className="fa fa-times"></i>  Close</button>
        </div>
      </div>
      
    </div>
  </div>


  {/* <!-- Showcase --> */}
<section id="fact1">
    <div className="container text-center">
      <div className="home-search p-5">
        <div className="overlay p-5">
          <h1 className="display-4 mb-4 text-white">
            Property Searching Just Got So Easy
          </h1>
          <p className="lead text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quas, asperiores eveniet vel nostrum magnam
            voluptatum tempore! Consectetur, id commodi!</p>
          <div className="search">
            <form action="">
              {/* <!-- Form Row 1 --> */}
              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label className="sr-only">Keywords</label>
                  <input type="text" name="keywords" className="form-control" placeholder="Keyword (Pool, Garage, etc)" />
                </div>

                <div className="col-md-4 mb-3">
                  <label className="sr-only">City</label>
                  <input type="text" name="city" className="form-control" placeholder="City" />
                </div>

                <div className="col-md-4 mb-3">
                  <label className="sr-only">State</label>
                  <select name="state" className="form-control">
                    <option value="true" disabled="disabled">State (All)</option>
                    {/* {% for key,value in state_choices.items %} */}
                      <option value="Value"> value </option>
                    {/* {% endfor %} */}
                  </select>
                </div>
              </div>
              {/* <!-- Form Row 2 --> */}
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label className="sr-only">Bedrooms</label>
                  <select name="bedrooms" className="form-control">
                    <option value="true" disabled="disabled">Bedrooms (All)</option>
                
                      <option value="value"> value </option>
                   
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <select name="price" className="form-control" id="type">
                    <option value="rahul" disabled="disabled">Max Price (Any)</option>
                   
                      <option value=" value">Value</option>
                  
                  </select>
                </div>
              </div>
              <button className="btn btn-secondary btn-block mt-4" type="submit">Submit form</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section id="listings" className="py-5">
    <div className="container">
      <h3 className="text-center mb-3">Latest Listings</h3>
      <div className="row">
            {/* <!-- Listing 1 --> */}
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card listing-preview">
                <img className="card-img-top" src="https://cdn.vox-cdn.com/thumbor/LT60k9rvHYKs9u-Dpy4G9AEIOJ4=/0x0:680x526/1200x800/filters:focal(286x209:394x317)/cdn.vox-cdn.com/uploads/chorus_image/image/61691719/Screen_Shot_2017_07_19_at_6.14.26_PM.0.png" alt="" style={{height: "250px"}} />
                <div className="card-img-overlay">
                  <h2>
                    <span className="badge badge-primary text-white">$ 600000</span>
                  </h2>
                </div>
                <div className="card-body bg-white">
                  <div className="listing-heading text-center">
                    <h4 className="text-primary">3 BHk Villa  In Warsaw</h4>
                    <p>
                      <i className="fas fa-map-marker text-info"></i>Warsaw Bwmowo, Poland, 01-355
                          </p>
                  </div>
                  <hr />
                  <div className="row py-2 text-info">
                    <div className="col-6">
                      <i className="fas fa-th-large"></i> Sqft: 1900
                      </div>
                    <div className="col-6">
                      <i className="fas fa-car"></i> Garage: 2
                    </div>
                  </div>
                  <div className="row py-2 text-info">
                    <div className="col-6">
                      <i className="fas fa-bed"></i> Bedrooms: 2
                    </div>
                    <div className="col-6">
                      <i className="fas fa-bath"></i> Bathrooms: 2
                    </div>
                  </div>
                  <hr />
                  <div className="row py-2 text-dark">
                    <div className="col-12">
                      <i className="fa fa-user"></i> Agent: Rahul Raj
                      </div>
                  </div>
                  <div className="row text-danger pb-2">
                    <div className="col-12">
                      <i className="fa fa-clock-o"></i> Pub Time: 2 ays Ago
                       </div>
                  </div>
                  <hr />
                  <a href="" className="btn btn-primary btn-block"><i className="fas fa-eye"></i>  More Info</a>
                </div>
              </div>
            </div>
      </div>
    </div>
  </section>


  <section id="fact2" className="py-5 bg-secondary text-white">
    <div className="container">
      <div className="row text-center">
        <div className="col-md-4">
          <i className="fa fa-comment fa-4x mr-4"></i>
          <hr />
          <h3>Consulting Services</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis nam! Repudiandae, provident iste consequatur
            hic dignissimos ratione ea quae.</p>
        </div>
        <div className="col-md-4">
          <i className="fa fa-home fa-4x mr-4"></i>
          <hr />
          <h3>Propery Management</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis nam! Repudiandae, provident iste consequatur
            hic dignissimos ratione ea quae.</p>
        </div>
        <div className="col-md-4">
          <i className="fa fa-suitcase fa-4x mr-4"></i>
          <hr />
          <h3>Renting & Selling</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis nam! Repudiandae, provident iste consequatur
            hic dignissimos ratione ea quae.</p>
        </div>
      </div>
    </div>
  </section>
  


      </div>
    )
  }
}

export default Index;
