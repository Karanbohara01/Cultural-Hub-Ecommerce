package com.example.reactbackend.exceptions;

public class WishlistNotExistsException extends RuntimeException{
	public WishlistNotExistsException(String msg) {
        super(msg);
    }

}
