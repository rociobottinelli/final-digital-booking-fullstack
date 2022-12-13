package Digitalbooking.accommodations.exception;

public class UnauthorizedException extends RuntimeException {

    private static final String description = "Unauthorized Exception (401)";

    public UnauthorizedException (String detail) {
        super(description + ". " + detail);
    }
}
