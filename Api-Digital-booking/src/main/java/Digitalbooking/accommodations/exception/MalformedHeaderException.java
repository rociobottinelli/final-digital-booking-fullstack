package Digitalbooking.accommodations.exception;

public class MalformedHeaderException extends BadRequestException{

    private static final String description = "Token broken";

    public MalformedHeaderException(String detail) {
        super(description + ". " + detail);
    }
}
