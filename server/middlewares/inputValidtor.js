const inputValidator = (schema) => {
    return (req, res, next) => {
        const { query, params, body } = req
        const { error = null } = schema.validate({ query, params, body });
        if(error){
            const { details = [] } = error;
            const [detail] = details;
            const { message } = detail
            return res.status(400).send({error: 1, message })
        }
        next();
    }
}

module.exports = { inputValidator }