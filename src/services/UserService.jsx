import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const baseURL= "http://localhost:8080/auth/all";

const UserService = () => {
    const [post, setPost] = React.useState(null);
  
    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
      });
    }, []);
  
    if (!post) return null;
        console.log(post)
}

export default UserService;