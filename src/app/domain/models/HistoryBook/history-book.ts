import { Book } from "../Book/book";
import { User } from "../User/user";

export class HistoryBook{
    user: User;
    book: Book;
    borrowingDate: Date;
    deliveryDate: Date;
    estimatedDeliveryDate: Date;
}