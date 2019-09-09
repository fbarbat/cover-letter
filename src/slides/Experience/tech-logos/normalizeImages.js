const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceImagesPath = './original';

function getMetadata(file) {
    const imagePath = sourceImagesPath + path.sep + file;
    const image = sharp(imagePath);
    return image.metadata().then(metadata => {
        return {
            name: file,
            image: image,
            metadata: metadata
        }
    }, () => {
        console.error(`Error loading ${imagePath}`);
    });
}

function processImage(i, images) {
    if (i < images.length) {
        const image = images[i];
        const {name, metadata} = image;
        const {width, height} = metadata;

        const pixels = width * height;
        const ratio = (40000 / pixels) ** 0.5;

        const desiredWidth = Math.round(width * ratio);
        const desiredHeight = Math.round(height * ratio);

        console.log(`${name} ${width} ${height} ${desiredWidth} ${desiredHeight}`);

        image.image
            .resize(desiredWidth, desiredHeight)
            .png()
            .toFile(`./normalized/${getFilenameWithoutExtension(name)}_${desiredWidth}x${desiredHeight}.png`)
            .then(
                () => processImage(i + 1, images),
                (err) => console.error(`Error processing ${name} ${err}`));
    }
}

function getFilenameWithoutExtension(file) {
    return file.split('.').slice(0, -1).join('.');
}

fs.readdir(sourceImagesPath, (err, files) => {
    const promises = files.map(file => {
        return getMetadata(file);
    });

    Promise.all(promises).then(images => {
        processImage(0, images);
    });
});





