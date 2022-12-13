package Digitalbooking.accommodations.exception;

public class FieldAlreadyExistException extends ConflictException{

    private static final String description = "Field already exist";

    public FieldAlreadyExistException(String detail) {
        super(description + ". " + detail);
    }
}
