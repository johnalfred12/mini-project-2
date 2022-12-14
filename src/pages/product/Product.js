import { Link } from "react-router-dom";
import './Product.css';

export default function Product() {
    return (
        <>
            <div class="head-title">
                <div class="left">
                    <h1>Product</h1>
                    <ul class="breadcrumb">
                        <li>
                            <Link to="/">Products</Link>
                        </li>
                        <li><i class='bx bx-chevron-right' ></i></li>
                        <li>
                            <Link class="active" to="/">Home</Link>
                        </li>
                    </ul>
                </div>
                <Link class="btn-download">
                    <i class='bx bx-message-square-add'></i>
                    <span class="text">Add Product</span>
                </Link>
            </div>
            <div class="table-data">
                <div class="order">
                    <div class="head">
                        <h3>Products List</h3>
                        <form action="#">
                            <div className="form-input">
                                <input type="search" placeholder="Search..." />
                                <button type="submit" className="search-btn"><i className='bx bx-search' ></i></button>
                            </div>
                        </form>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <p>1</p>
                                </td>
                                <td>Ballpen</td>
                                <td>10.00</td>
                                <td>67</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}