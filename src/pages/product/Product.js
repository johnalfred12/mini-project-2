import { Link } from "react-router-dom";
import './Product.css';
import { data } from '../../data.js'
import { useState } from "react";

function Row(props) {
    const { id, name, price, quantity, index, delRow } = props;
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                <button onClick={() => { delRow(index) }}>
                    Delete
                </button>
                <button>Edit</button>
            </td>
        </tr>
    );
}

function Table(props) {
    const { data, delRow } = props;

    return (
        <table>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {data.map((row, index) =>
                    <Row
                        key={`key-${index}`}
                        delRow={delRow}
                        index={index}
                        id={row.id}
                        name={row.name}
                        price={row.price}
                        quantity={row.quantity}
                    />)
                }
            </tbody>
        </table>
    );
}

export default function Product() {
    const [rows, setRows] = useState(data)

    function deleteRow(number) {
        let copy = [...rows];
        copy = copy.filter(
            (item, index) => number !== index
        )
        setRows(copy);
    }

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
                    <Table
                        data={rows}
                        delRow={deleteRow}
                    />
                </div>
            </div>
        </>
    );
}