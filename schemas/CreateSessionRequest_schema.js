
var CreateSessionRequest_Schema = {
    documentation: "Creates a new session with the server.",
    name: "CreateSessionRequest",
    fields: [
        { name: "requestHeader"    ,                fieldType: "RequestHeader"                  },
        { name: "clientDescription",                fieldType: "ApplicationDescription",   documentation:"Describes the client application." },
        { name: "serverUri",                        fieldType: "String",                   documentation:"The URI of the server that the client wants to create a session with." },
        { name: "endpointUrl",                      fieldType: "String",                   documentation:"The URL that the client used to connect to the server." },
        { name: "sessionName",                      fieldType: "String",                   documentation:"A name for the session provided by the client." },
        { name: "clientNonce",                      fieldType: "ByteString",               documentation:"A random number generated by the client." },
        { name: "clientCertificate",                fieldType: "ByteString",               documentation:"The application certificate for the client." },
        { name: "requestedSessionTimeout",          fieldType: "Duration",                 documentation:"The requested session timeout in milliseconds." },
        { name: "maxResponseMessageSize",           fieldType: "UInt32",                   documentation:"The maximum message size accepted by the client." }
    ]
};
exports.CreateSessionRequest_Schema = CreateSessionRequest_Schema;