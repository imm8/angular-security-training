import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';

import {Book} from '../beans/book';
import {BooksService} from '../services/booksService';
import {UserService} from '../services/userService';
import {DataContainerService} from '../services/dataContainerService';

@Component({
	selector: 'books',
	templateUrl: 'books.html'
})
export class Books implements OnInit{

	books: Book[]= [];
	currentPage: number = 1;

	//pagination filters
	bookNameFilter: string = '';
  bookOrderBy: string = '';
	booksPerPageFilter: number = 4;
	reverseOrderFilter: boolean = false;

	constructor(
		private router: Router,
		private booksService: BooksService, 
		public userService: UserService,
		public dataContainer: DataContainerService ) {}

	ngOnInit(){
		this.booksService.getBooks()
		.toArray()
		.subscribe( ( books: Book[] ) => {
			this.books = books;
		} );
	}

	switchPage(page:number){
		this.currentPage = page;
	}

	getRatingClass = this.booksService.getRatingClass;

	addToBasket= (book: Book) : void => {
		this.userService.basket.addProduct(book);
		this.router.navigate(['basket']);
	}


}
