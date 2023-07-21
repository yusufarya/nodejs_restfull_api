const validate = (scema, request) => {
    const result = scema.validate(request)

    if(result.error) {
        throw result.error;
    } else {
        return result.value;
    }
}

export {
    validate
};