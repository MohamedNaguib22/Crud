import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { User } from "../../Context/UserProvider";
import { Link } from "react-router-dom";
import { TbEditCircle } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

const Product = () => {
  const [product, setProduct] = useState([]);
  const context = useContext(User);
  const token = context.auth.token;
  async function showProduct() {
    await axios("http://127.0.0.1:8000/api/product/show", {
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((data) => setProduct(data.data));
  }
  useEffect(() => {
    showProduct();
  }, []);
  async function handelDelete(id) {
    try {
      await axios
        .delete(`http://127.0.0.1:8000/api/product/delete/${id}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then(() => {
          showProduct();
        });
    } catch (err) {
      console.log(err);
    }
  }
  const showProducts = product.map((item, index) => (
    <tr key={index}>
      <td className="border-green-100 border-r-4 border-b-4 border-solid">
        {index + 1}
      </td>
      <td className="border-green-100 border-r-4 border-b-4 border-solid">
        {item.title}
      </td>
      <td className="border-green-100 border-r-4 border-b-4 border-solid">
        {item.description}
      </td>
      <td className="border-green-100 flex justify-center items-center gap-4 border-b-4 border-solid">
        <span className="cursor-pointer" onClick={() => handelDelete(item.id)}>
          <MdDelete size={28} className="inline text-[red]" />
        </span>
        <Link to={`${item.id}`} className="cursor-pointer">
          <TbEditCircle size={28} className="inline text-blue-700" />
        </Link>
      </td>
    </tr>
  ));
  return (
    <div className="pt-[20px] container">
      <table className="w-full rounded-lg overflow-hidden border-collapse table-fixed ">
        <thead>
          <tr>
            <th className=" bg-green-600 w-full border-green-100 border-r-4 border-solid text-white py-[10px] ">
              Id
            </th>
            <th className=" bg-green-600 w-full border-green-100 border-r-4 border-solid text-white py-[10px]">
              Title
            </th>
            <th className=" bg-green-600 w-full border-green-100 border-r-4 border-solid text-white py-[10px]">
              Description
            </th>
            <th className=" bg-green-600 w-full border-green-100 border-solid text-white py-[10px]">
              Delete / Edit
            </th>
          </tr>
        </thead>
        <tbody>{showProducts}</tbody>
      </table>
    </div>
  );
};

export default Product;
