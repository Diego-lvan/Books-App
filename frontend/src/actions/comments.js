import axios from "axios";
import URL from "config";
axios.defaults.withCredentials = true;

class Comments {
  async getComments(isbn, setComments) {
    const res = await axios.get(`${URL}comment/${isbn}`);
    setComments(res.data.comments);
  }

  async addComment(comment, isbn, setComments) {
    await axios.post(`${URL}comment`, { comment, isbn });
    await this.getComments(isbn, setComments);
  }

  async addLike(isbn, comment_id, setLikes, likes, setUserLiked, userLiked) {
    if (userLiked) return;
    const data = {
      commentID: comment_id,
      isbn,
    };
    const res = await axios.post(`${URL}comment/like`, data);
    if (res.data.success) {
      setLikes(likes + 1);
      setUserLiked(true);
    }
  }

  async getLikes(userAlreadyLiked, comment_id, setUserLiked, setLikes) {
    const res = await axios.get(`${URL}comment/like/${comment_id}`);
    if (userAlreadyLiked(res.data.users)) {
      setUserLiked(true);
    }
    setLikes(res.data.likes);
  }
}

export default new Comments();
