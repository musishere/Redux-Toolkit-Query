import { useGetAllProductsQuery } from "../app/service/dummyData.js";

function AllProducts() {
  const res = useGetAllProductsQuery();

  console.log(res);
  return <div>AllProducts</div>;
}

export default AllProducts;
