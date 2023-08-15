/* eslint-disable react-hooks/exhaustive-deps */

import { useParams } from "react-router-dom";
import Forms from "../Forms/Forms";

const UpDataForm = () => {
  const { id } = useParams();
  return (
    <Forms
      Header="UP DATE"
      Link={`user/update/${id}`}
      btn="Up Date"
      classNameOne="w-full"
      classNameTwo="justify-start items-start"
      hOne="text-start"
      Path="/dashboard/users"
      Local={false}
    />
  );
};

export default UpDataForm;
