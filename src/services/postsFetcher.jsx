export const getAllPosts = async (postId) => {
  if (postId) {
    const response = await fetch(
      `http://localhost:8088/posts/${postId}?_expand=topic`
    );
    return await response.json();
  } else {
    const response = await fetch(`http://localhost:8088/posts?_expand=topic`);
    return await response.json();
  }
};

export const createPost = async (post) => {
  const res = await fetch("http://localhost:8088/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  return await res.json();
};

export const postDeleter = async (postId) => {
  const response = await fetch(`http://localhost:8088/posts/${postId}`, {
    method: "DELETE",
  });
    if (!response.ok) {
        throw new Error (`Failed to delete post. Status: ${response.status}`)
    }
};
