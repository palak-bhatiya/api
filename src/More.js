import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Rate } from 'antd';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';
function More() {
    const [getdata, setdata] = useState([]);
    const [loader, setloader] = useState(true);
    const [find, setfind] = useState('https://dummyjson.com/products');

    function home(e) {
        if (e != '') {
            setfind('https://dummyjson.com/products/search?q=' + e)
        }
        axios.get(find)
            .then(function (response) {
                console.log(response.data.products);
                setdata(response.data.products);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    useEffect(() => {
        const getItems = async () => {
            const result = await axios(`https://dummyjson.com/products`)
                .then(function (response) {
                    console.log(response.data.products);
                    setdata(response.data.products);
                })
                .catch(function (error) {
                    console.log(error);
                })
            setloader(false);
        }
        getItems();

        home('');

    }, []);
    if (loader) {
        return (
            <Loader />
        )
    }
    else {
        return (
            <div className='main-section'>
                <Header />
                <section className='products-section'>
                    <div className="container">
                        <div className="main-input">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-6">
                                    <h1>product</h1>
                                </div>
                                <div className="col-6">
                                    <input type="text" onChange={(e) => { home(e.target.value) }} />
                                </div>
                            </div>
                        </div>
                        <div className="product-block">
                            <div className="block-number">
                                <div className="row">
                                    {
                                        getdata.map((response) => {
                                            return (
                                                <div className="col-4 col-md-6 col-xl-4 col-sm-12 ">
                                                    <div className="blocks">
                                                        <div className="thumbnail">
                                                            <OwlCarousel className='owl-theme' loop={false} margin={10} nav items={1}>
                                                                {
                                                                    response.images.map((k) => {
                                                                        return (
                                                                            <>
                                                                                <div className="thumbnail">
                                                                                    <img src={k}></img>
                                                                                </div>

                                                                            </>

                                                                        )
                                                                    })
                                                                }
                                                            </OwlCarousel>
                                                        </div>
                                                        <div className="content">
                                                            <h1 className="title">{response.title}</h1>

                                                            <div className="description">{response.description}</div>
                                                            <div className="price">price : ${response.price}</div>
                                                            <div className="discountPercentage">discount : ${response.discountPercentage}</div>
                                                            <div className="rating">rate : <Rate className='color' disabled allowHalf defaultValue={response.rating} /></div>
                                                            <div className="stock">stock : {response.stock}</div>
                                                            <div className="brand">brand : {response.brand}</div>
                                                            <div className="category">category : {response.category}</div>
                                                            <div className='text-right'>
                                                                <a className='more' href={`product/${response.id}`} >more detail..</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }

}

export default More;