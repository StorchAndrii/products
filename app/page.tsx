import Products from "@/components/products";
import { axiosBackend } from "@/utils/axios";
import { IProduct } from "@/interface/product.interface";

async function fetchProduct() {
  const res = await axiosBackend.get<IProduct[]>("/"); // Изменен путь
  if (!res) {
    throw new Error("Failed to fetch product");
  }
  return res.data;
}

export default async function ProductPage() {
  const products: IProduct[] = await fetchProduct();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Products products={products} />
    </div>
  );
}
