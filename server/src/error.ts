export default class Errors extends Error {
    status: number; 
    errors?: string[]; 

    constructor(status: number, message: string, errors?: string[]) {
        super(message);
        this.status = status;
        this.errors = errors; 
    }

    static InternalError(message: string) {
        return new Errors(500, message);
    }

    static BadRequest(message: string, errors?: string[]) { 
        return new Errors(400, message, errors); 
    }
}