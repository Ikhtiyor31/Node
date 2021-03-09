import express from 'express'
import Post from '../models/postModel.js'

const postServices = {
    createPost: async ( author, title, content, image ) => {
        const post = new Post({
            author,
            title,
            content,
            image
        });
        try {
            await post.save();
        } catch ( err ) {
            console.log(err);
            console.log("post saving error")
            return false;
        }
        return true;
    },
}
export default postServices;