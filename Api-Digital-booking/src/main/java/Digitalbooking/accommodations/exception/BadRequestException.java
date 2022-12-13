package Digitalbooking.accommodations.exception;

public class BadRequestException extends RuntimeException {

    private static final String description = "Bad Request Exception (400)";

    public BadRequestException (String detail) {
        super(description + ". " + detail);
    }
}
