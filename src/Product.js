import './App.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Rate } from 'antd';
import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';
function Product() {
    const params = useParams();
    const [getimage, setimage] = useState(false);
    const [getnew, setnew] = useState();
    console.log(params.id);
    const [loader, setloader] = useState(true);
    const [loaderblank, setloaderblank] = useState();
    const [getproduct, setproduct] = useState([]);
    useEffect(() => {
        const getItems = async () => {
            const result = await axios(`https://dummyjson.com/products/${params.id}`)
                    .then(function (response) {
                        console.log(response.data)
                        setproduct(response.data)
                        setnew(response.data.thumbnail)
                        setimage(true);
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
                    setloader(false);
                }
            getItems();
    }, []);

function image(k) {
    setimage(getnew);
    setnew(k)
}
if (loader) {
    return(
        <Loader/>
    )
}
else{
    return (
        <>
            <div className="header">
                <Header />
            </div>
            <div className="content-product">
                <section className='products-section'>
                    <div className="container">
                        <div className="product-block">
                            <div className="block-number">
                                <div className="row align-items-center justify-content-evenly">
                                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-12 col-xs-12">
                                        <div className="other-image">
                                            {
                                                getproduct.images.map((k) => {
                                                    return (
                                                        <>
                                                            <img src={k} onClick={() => { image(k) }}></img>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="col-xl-10 col-lg-10 col-md-9 col-sm-12 col-xs-12">

                                        <div className='blocks d-flex'>
                                            <div className="thumbnail-image">
                                                <img src={getnew} alt="" />
                                            </div>
                                            <div className="content">
                                                <h1 className="title">{getproduct.title}</h1>
                                                <div className="description">{getproduct.description}</div>
                                                <div className="price">price : ${getproduct.price}</div>
                                                <div className="discountPercentage">discount : ${getproduct.discountPercentage}</div>
                                                <div className="rating">rate : <Rate className='color' allowHalf defaultValue={getproduct.rating} /></div>
                                                <div className="stock">stock : {getproduct.stock}</div>
                                                <div className="brand">brand : {getproduct.brand}</div>
                                                <div className="category">category : {getproduct.category}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>

    )
}

}
export default Product;