import { useParams } from "react-router";

const UserDetails = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>This is User Details page</h1>
      <h2>User Id: {params.id} </h2>
    </div>
  );
};

export default UserDetails;
