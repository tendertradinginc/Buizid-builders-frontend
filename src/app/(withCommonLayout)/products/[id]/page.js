import ProductDetailsPage from "@/components/FrontendComponent/ProductPage/ProductDetailsPage";

const page = async ({ params }) => {
    const res = await fetch(`http://localhost:5000/api/v1/products/${params?.id}`)
    const data = await res.json()
    const product = data?.data
  
    return (
        <div className="py-20">
            <ProductDetailsPage data={product} />
        </div>
    );
};

export default page;