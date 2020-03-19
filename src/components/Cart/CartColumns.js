import React from 'react'

export default function CartColumns() {
    return <div className="container-fluid text=center d-lg-block">
          <div className="row">

          <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercasse">products</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercasse">name of product</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercasse">price</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercasse">quantity</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercasse">remove</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercasse">total</p>
          </div>
          </div>  
        </div>;
    
}
