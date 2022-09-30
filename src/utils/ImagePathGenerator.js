
const ImagePathGenerator = (path,extension,size) => {
    let imagePath = `${path}/${size}.${extension}`;
    // console.log(imagePath);
    return imagePath;
    
}

export default ImagePathGenerator