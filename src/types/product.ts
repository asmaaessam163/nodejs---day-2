
export enum DiscountType {
    FIXED = "FIXED",
    PERCENTAGE = 'PERCENTAGE'
}

export interface Product {
    productId: string
    name?: Record<'en' | 'ar', string>,
    image?: string,
    price?: number,
    discount?: number,
    discountType?: DiscountType,
    description?: string,
    categoryId?: string,
    totalCount?: number,
    avaliable?: boolean,
}