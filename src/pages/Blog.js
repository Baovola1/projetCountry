import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import Article from "../components/Article";

function Blog() {
  const [blogData, setBlogData] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  const getData = () => {
    axios
      .get("http://localhost:3004/articles")
      .then((res) => setBlogData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  //Limiter le nbr de caractère à 140 + gérér une erreur + post d'un article
  const handleSubmit = (e) => {
    e.preventDefault(); //empecher le comportement par défaut du formulaire=> rechargement de la page
    if (content.length < 140) {
      setError(true);
    } else {
      axios.post("http://localhost:3004/articles", {
        author: author,
        content: content,
        date: Date.now(),
      });
      setError(false);
      setAuthor("");
      setContent("");
      getData(); //Actualiser l'affichage
    }
  };

  // Fonction pour supprimer un article
  const handleDelete = (articleId) => {
    const updatedBlogData = blogData.filter(
      (article) => article.id !== articleId
    );
    setBlogData(updatedBlogData);
  };

  return (
    <>
      <Navigation />
      <h1>Hello depuis blog</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          {" "}
          Name:
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
        </label>
        <label>
          {" "}
          Message:
          <textarea
            style={{ border: error ? "1px solid red" : "1px solid #4caf50" }}
            placeholder="Message"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></textarea>
          {error && <p>Veuillez écrire un minimum de 140 caractères</p>}
        </label>
        <input type="submit" value="envoyer" />
      </form>
      <ul>
        {blogData
          .sort((a, b) => b.date - a.date)
          .map((article) => (
            <Article
              key={article.id}
              article={article}
              onDelete={handleDelete}
            />
          ))}
      </ul>
    </>
  );
}

export default Blog;
