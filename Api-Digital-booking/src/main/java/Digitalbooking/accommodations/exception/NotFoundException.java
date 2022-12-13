package Digitalbooking.accommodations.exception;

public class NotFoundException extends RuntimeException {

    private static final String description = "Not Found Exception (404)";

    public NotFoundException (String detail) {
        super(description + ". " + detail);
    }
}
