const errorHandler = (err, req, res, next) => {
    const statusCode = err.status || 500;
    console.error(`Error: ${err.message}`);
    if (process.env.NODE_ENV !== 'production' && err.stack) {
        console.error(err.stack);
    }

    res.status(statusCode).json({
        error: err.message || 'Internal Server Error',
    });
};

module.exports = {
    errorHandler
};