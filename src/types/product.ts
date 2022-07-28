export type Product = {
    id: string;
    nm_product: string;
    description: string;
    vl_price: number;
    vl_discount: number;
    url_image: string;
    ingredients: [
      {
        group: string;
        max_itens: number;
        type: string;
        itens: [{ id: number; nm_item: string; vl_item: number }];
      }
    ];
  };