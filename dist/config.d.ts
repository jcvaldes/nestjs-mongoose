declare const _default: (() => {
    database: {
        name: string;
        port: string;
    };
    mongo: {
        dbName: string;
        user: string;
        password: string;
        host: string;
        connection: string;
    };
    apiKey: string;
    jwtSecret: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    database: {
        name: string;
        port: string;
    };
    mongo: {
        dbName: string;
        user: string;
        password: string;
        host: string;
        connection: string;
    };
    apiKey: string;
    jwtSecret: string;
}>;
export default _default;
