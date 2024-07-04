import sharp, { Metadata, Sharp } from 'sharp';
import fs from 'fs';
import path from 'path';

const sourceImagesPath = './original';

type ImageDescription = {
    name: string,
    image: Sharp,
    metadata: Metadata
}

async function getMetadata(file: string): Promise<void | ImageDescription> {
    const imagePath = sourceImagesPath + path.sep + file;
    const image = sharp(imagePath);

    try {
        const metadata = await image.metadata()
        return {
            name: file,
            image: image,
            metadata: metadata
        }
    } catch(error) {
        console.error(`Error loading ${imagePath}`);
    }
}

function processImage(i: number, images: ImageDescription[]) {
    if (i >= images.length) {
        return
    }

    const image = images[i];
    const {name, metadata} = image;
    let {width, height} = metadata;

    if (!width) {
        width = 0
    }

    if (!height) {
        height = 0
    }

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
            (err: unknown) => console.error(`Error processing ${name} ${err}`));
}

function getFilenameWithoutExtension(file: string) {
    return file.split('.').slice(0, -1).join('.');
}

fs.readdir(sourceImagesPath, async (err, files) => {
    const promises = files.map(file => {
        return getMetadata(file);
    });

    const images = await Promise.all(promises)
    processImage(0, images.filter((image): image is ImageDescription => Boolean(image)));
});





