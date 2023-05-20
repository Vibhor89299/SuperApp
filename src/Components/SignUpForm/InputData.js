const inputList = [
    {
        id: 1,
        name: "name",
        type: "text",
        placeholder: "Name",
        errormessage: "Feild is required",
        required: true
    },
    {
        id: 2,
        name: "username",
        type: "text",
        placeholder: "UserName",
        errormessage: "Feild is required",
        required: true
    },
    {
        id: 3,
        name: "email",
        type: "email",
        placeholder: "Email",
        errormessage: "Feild is required",
        required: true
    },
    {
        id: 4,
        name: "mobile",
        type: "number",
        placeholder: "Mobile",
        errormessage: "Feild is required",
        pattern: "^[0-9]{10}$",
        required: true
    }
];

export default inputList;