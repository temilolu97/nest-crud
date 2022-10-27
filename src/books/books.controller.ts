import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { query } from 'express';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
    //injecting book service into controller
    constructor(private booksService : BooksService){}

    @Get()
    async getBooks(){
        let books = this.booksService.getBooks()
        return books
    }

    @Get(':bookId')
    async getBook(@Param('bookId') bookId){
        let book = await this.booksService.getBook(bookId);
        return book;
    }

    @Post()
    async addBook(@Body() createBookDto: CreateBookDTO){
        const book = await this.booksService.addBook(createBookDto)
        return book
    }

    @Delete()
    async deleteBook(@Query('bookId') bookId){
        let book = await this.booksService.deleteBook(bookId)
        return book
    }
}
