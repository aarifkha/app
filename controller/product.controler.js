import product from "../module/product.modue.js";

export const cre = async (req, res) => {
  try {
    console.log("Imagesss------",req.files)
    var imageobj = []
    req.files.forEach(image => {
      var imagetype = ''
      if (image.mimetype == "image/png") {
        imagetype = 'png'
      } if (image.mimetype == "image/jpg") {
        imagetype = 'jpg'
      }
      console.log("image---",imagetype)
      let imageData = {
        path: image.files,
        type: imagetype,
        fullpath: "localhost2011/" + image.path
      }
      imageobj.push(imageData)
      console.log("data",imageData);
    });
    req.body.image = imageobj
    const creatdata = await product.create(req.body)
    if (creatdata) {
      res.send(creatdata)
    }else{
      res.send("data not")
    }
  } catch (error) {
    res.send({
      status:false,
      msg:"hgfds",
      data:error
    })
  }
}