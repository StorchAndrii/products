import { useHttp } from "@/hooks/http.hook";
import { IProduct } from "@/interface/product.interface";
import { RequestConfig } from "@/interface/request.interface";

const useProductsService = () => {
  const { loading, request, error } = useHttp<IProduct, null>();

  const _apiBase = "https://fakestoreapi.com/products";

  const getAllProducts = async () => {
    try {
      const config: RequestConfig<null> = {
        url: `${_apiBase}/`,
        method: "GET",
      };

      const res = await request(config);
      if (res) {
        return res;
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  return {
    loading,
    error,
    getAllProducts,
  };
};

export default useProductsService;
