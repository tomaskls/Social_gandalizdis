export function notFoundResponse(_req, res, _next) {
    return res.status(404).send("Sorry can't find that!");
}
;
