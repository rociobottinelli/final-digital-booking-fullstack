package Digitalbooking.accommodations.exception;

public class ConflictException extends RuntimeException {

    private static final String description = "Conflict Exception (409)";

    public ConflictException (String detail) {
        super(description + ". " + detail);
    }
}
