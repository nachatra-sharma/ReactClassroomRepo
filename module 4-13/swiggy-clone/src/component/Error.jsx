import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <p>Error Occured {err.status}</p>
      <p>{err.data}</p>
    </div>
  );
};

export default Error;
