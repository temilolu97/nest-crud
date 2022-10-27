import { HttpException, Injectable } from '@nestjs/common';
import { BOOKS } from '../mock/mock';

@Injectable()
export class BooksService {
    books= BOOKS;
    async getBooks(): Promise<any>{
        return this.books
    }

    async getBook(bookId) : Promise<any>{
        let id = Number(bookId)
        let book = this.books.find(book=>book.id === id)
        if(!book){
            throw new HttpException("Book doesn not exist",404)
        }
        return book
    }

    async addBook(book): Promise<any>{
        let newbook =this.books.push(book)
        return newbook
    }

    async deleteBook(bookId): Promise<any>{
        let id = Number(bookId)
        let index = this.books.findIndex(book=>book.id === id)
        if(index == -1){
            throw new HttpException("Book does not exist",404)
        }
        this.books.splice(index,1)
        return this.books
    }
}
