import jwt from "jsonwebtoken";

export const athantion = (req, res, next) => {
    try {
        if (!req.headers["authorization"]) {
            res.send({
                status: false,
                msg: "auth token is not reqired",
                data: {}
            })
            return;
        }
        var token = req.headers["authorization"].replace("Bearer ",'')
        var checktoken = jwt.verify(token,"king")
        if(checktoken){
            next();
            return;
        }else{
            res.send({
                status:false,
            msg:"Auth token is not valid.",
            data:{}
            })
            return;

        }
    } catch (error) {
res.status(401).send({
        status:false,
        msg:"Invalid token",
        data:{}
    })
    return;
    }
}