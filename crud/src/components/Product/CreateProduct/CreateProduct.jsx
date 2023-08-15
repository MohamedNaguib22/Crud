import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../Context/UserProvider";
const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  // const [accept, setAccept] = useState(false);

  const nav = useNavigate();
  const context = useContext(User);
  const token = context.auth.token;
  async function Submit(e) {
    e.preventDefault();
    // setAccept(true);
    try {
      const formDate = new FormData();
      formDate.append("title", title);
      formDate.append("description", description);
      formDate.append("image", image);
      let res = await axios.post(
        "http://127.0.0.1:8000/api/product/create",
          formDate,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      nav("/dashboard/products");
    } catch (err) {
      console.log(err);
      // setAccept(true);
    }
  }
  return (
    <div className=" container Forms overflow-hidden flex ">
      <form
        onSubmit={Submit}
        className="w-full h-auto px-[36px] shadow-xl py-[60px] rounded-lg"
      >
        <h1 className="text-green-400 font-bold text-[56px] mb-[26px] text-start">
          CREATE NEW PRODUCT
        </h1>
        <div className="flex justify-between items-center ">
          <label className="text-black font-medium" htmlFor="Title">
            Enter Title
          </label>
        </div>
        <input
          id="Title"
          placeholder="Title......"
          className="h-[45px] mb-[20px] mt-[10px] text-black w-full rounded-lg pl-[20px] outline-none border-2 border-gray-200 focus:border-green-200 focus:border-2"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex justify-between items-center">
          <label className="text-black font-medium" htmlFor="Description">
            Enter Description
          </label>
        </div>
        <input
          id="Description"
          placeholder="Description......"
          className="h-[45px] mb-[20px] mt-[10px] text-black w-full rounded-lg pl-[20px] outline-none border-2 border-gray-200 focus:border-green-200 focus:border-2"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex justify-between items-center">
          <label className="text-black font-medium" htmlFor="Password">
            UpLoad Image
          </label>
        </div>
        <input
          id="Image"
          placeholder="Image......"
          className="h-[45px] mb-[20px] mt-[10px] text-black w-full rounded-lg pl-[20px] outline-none border-2 border-gray-200 focus:border-green-200 focus:border-2"
          type="file"
          onChange={(e) => setImage(e.target.files.item(0))}
        />
        <div className="flex justify-center items-center">
          <button
            className="w-[200px] h-[50px]  bg-green-600 flex justify-center items-center rounded-lg font-medium text-[16px] text-white transition-all duration-[.3s] hover:bg-green-500 "
            type="submit"
          >
            Create New User
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
