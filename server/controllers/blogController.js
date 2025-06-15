import fs from 'fs';
import imagekit from '../configs/imageKit.js';
import Blog from '../models/Blog.js';

export const addBlog = async (req, res) => {
    try {
        const { title, subTitle, discription, category, isPublished } = JSON.parse(req.body.blog);
        const imageFile = req.file;

        // check if all fields are present
        if (!title || !discription || !category || !imageFile) {
            return res.json({ success: false, message: "Missing required fields" });
        }

        // upload image to imagekit
        const fileBuffer = fs.readFileSync(imageFile.path);
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/blogs"
        });

        // optimize image URL using ImageKit transformations
        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                { quality: 'auto' }, // auto compression
                { format: 'webp' },  // convert to modern format
                { width: '1280' }    // resize width
            ]
        });

        const image = optimizedImageUrl;

        await Blog.create({ title, subTitle, discription, category, image, isPublished });

        res.json({ success: true, message: "Blog added successfully" });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
