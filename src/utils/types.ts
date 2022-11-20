export interface IProduct {
    id: number;
    productName: string;
    productDescription: string;
    price: number;
    imgSmall: string;
    img: string;
    productSummary: string;
    productDetail: string;
    comments: IComment[];
    averageRating?: number | undefined;
    productArrivalDate?: string;
}

export interface IComment {
    username: string;
    comment: string;
    score: number;
}
