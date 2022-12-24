abstract class UseCase {
    abstract exec(args?: any): any | Promise<any>;
}

export {
    UseCase
}