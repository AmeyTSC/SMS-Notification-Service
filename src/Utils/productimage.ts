import axios from "axios";

export const getproductimage = async (product_id, variant_id) => {
  const config = {
    method: "get",
    url: `https://thesleepcompanystore.myshopify.com/admin/api/2024-07/products/${product_id}.json`,
    headers: {
      "X-Shopify-Access-Token": process.env.ACCESS_TOKEN,
    },
  };

 try{
    const response = await axios(config);
    const product = response.data.product;

    // Find the variant with the specified variant_id
    const variant = product.variants.find(
      (variant) => variant.id === variant_id
    );

    if (!variant) {
      return response.data.product.image.src;
    }

    const imageID = variant.image_id;
    const image = product.images.find((image) => image.id === imageID);
    if (!image) {
      return response.data.product.image.src;
    }
    const image_src = image.src;
    return image_src;
  } catch (error) {
    // console.error("Error fetching product image:", error.message);
    throw new Error(`Error fetching product image: ${error.message}`);
  }
};
