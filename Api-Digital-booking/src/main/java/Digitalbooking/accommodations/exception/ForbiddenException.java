package Digitalbooking.accommodations.exception;

public class ForbiddenException extends RuntimeException{

    private static final String description = "Forbidden Exception (403)";

    public ForbiddenException (String detail) {
        super(description + ". " + detail);
    }
}
