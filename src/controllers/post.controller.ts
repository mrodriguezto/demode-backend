import { Response, Request } from "express";
import Post from "../models/Post";
import { EditPostRequest, NewPostRequest } from "../interfaces";


export const getPosts = async (req: Request, res: Response) => {
  try{
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(503).json({
      error: { message: "No se logró obtener la información: " + error },
    })
  }
};

export const newPost = async (req: NewPostRequest, res: Response) => {
  const {
    title,
    content, 
    img,
    author
  } = req.body;

  const post = new Post({
    title,
    content,
    img,
    author,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.status(503).json({
      error: { message: "No se logró guardar la información: " + error },
    });
  }
};

export const editPost = async (req: EditPostRequest, res: Response) => {
  const { postId } = req.params;
  const { title, content} = req.body;

  try {
    const updatePost = await Post.findByIdAndUpdate(postId, {
      title,
      content,
    });

    res.json(updatePost);
  } catch (error) {
    res.status(503).json({
      error: { message: "No se logró modificar la información: " + error },
    }); 
  }
};

export const deletePost = async (req: EditPostRequest, res: Response) => {
  const { postId } = req.params;

  try {
    const deletedPost = await Post.findByIdAndRemove(postId);
    res.json(deletedPost);
  } catch (error) {
    res.status(503).json({
      error: { message: "No se logró eliminar el registro: " + error},
    });
  }
};
