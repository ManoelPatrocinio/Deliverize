export type Ingredients = {
    group: string;
    max_itens: number;
    type: string;
    itens: [{ id: number; nm_item: string; vl_item: number }];
};