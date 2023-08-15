/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Forms from "../Forms/Forms";

const FormUpDatee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  useEffect(() => {
    axios(`http://127.0.0.1:8000/api/user/showbyid/${id}`).then((res) => {
      setName(res.data[0].name);
      setEmail(res.data[0].email);
    });
  }, []);
  return (
    <Forms
      Header="UP DATE"
      name={name}
      email={email}
      Link={`user/update/${id}`}
      btn="Up Date"
      classNameOne="w-full px-0"
      classNameTwo="justify-start items-start"
      hOne="text-start"
      Path="/dashboard/users"
      // Local={false}
      btnStyle="w-full mt-3"
    />
  );
};

export default FormUpDatee;
