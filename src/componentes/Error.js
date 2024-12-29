import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>{`${err.status}: ${err.statusText}`}</h1> 
      <h1> Oops we are not here </h1>
    </div>
  );
};

export default Error;
