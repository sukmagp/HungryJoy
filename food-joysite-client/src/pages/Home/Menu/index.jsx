import React from "react";
import { useState, useEffect } from "react";
import "./index.scss";
import axios from 'axios';
import debounce from 'lodash.debounce';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col} from 'react-bootstrap'
import { Circles } from "react-loader-spinner";
import './index.scss';

const Menu = () => {
  let [loading, setLoading] = useState(false);
  // Define state
  const [backendData, setBackendData] = useState([]);
  const [query, setQuery] = useState([]);

  // Update query to search
  const updateQuery = e => setQuery(e?.target?.value)

  // Debounce function to wait before update query to search in this case 300 ms
  const debouncedOnChange = debounce(updateQuery, 300)

  // Function to fetch data from backend
  const fetchData = async () => {
    setLoading(loading = true);
    const res = await axios.get(`/api/products?q=${query}`);
    console.log(res.data.data);
    setLoading(loading = false);
    setBackendData(res.data.data);
  };

  // Use useEffect to synchronize data from backend
  useEffect(() => {
    // other code
    fetchData();
 
    // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [query])
  
      return (
          <div className="body" id="menu">
                  {/* <!--========== Content ==========--> */}
                  <div>
                    <p className="tittle">
                        <span className="teks">
                            Our Menu's
                        </span>
                    </p>
                  </div>
                  <div className="search">
                    <input type="text" placeholder="Cari disini aja..." onChange={debouncedOnChange}/>
                  </div>

                  <div className="album py-5">
                      <div className="container cards">
                          <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-2">
                              {loading ?
                                  <Circles
                                  color="rgb(204, 21, 21)"
                                  display="block"
                                  margin-left="auto"
                                  margin-right="auto" 
                                  className='loader'
                                  />
                                  : (
                                    backendData?.map((item, index) => (
                                          <div className="col" key={index}>
                                              <Col>
                                                  <Card className="card">
                                                      <Card.Img className="img" variant="top" src={"http://localhost:3000/images/products/" + item.image_url} />
                                                      <Card.Body>
                                                          <Card.Title>{item.name}</Card.Title>
                                                          <Card.Text>{item.description}</Card.Text>
                                                          <Card.Text>RP. {item.price}</Card.Text>
                                                          <Button href={item.url} className="add-cart">Add to cart</Button>
                                                      </Card.Body>
                                                  </Card>
                                              </Col>
                                          </div>
                                      ))
                                  )}
                          </div>
                      </div>
                  </div>
          </div>
      );
  };



export default Menu;