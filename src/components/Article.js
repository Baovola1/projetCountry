import React, { useState } from "react";
import axios from "axios";

function Article({ article, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(""); //Pour stocker le content modifié

  //Formattage de la date
  const dateFormater = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

    return newDate;
  };

  //Mise à jour
  const handleEdit = () => {
    const data = {
      author: article.author,
      content: editContent ? editContent : article.content,
      date: article.date,
      updatedDate: Date.now(),
    };

    axios.put(`http://localhost:3004/articles/${article.id}`, data).then(() => {
      setIsEditing(false);
    });
  };

  //Delete
  const handleDelete = () => {
    axios
      .delete(`http://localhost:3004/articles/${article.id}`)
      .then(() => {
        onDelete(article.id); // Appeler la fonction onDelete pour supprimer l'article de l'affichage
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la suppression de l'article: ",
          error
        );
      });
  };

  return (
    <div
      className="article"
      style={{ background: isEditing ? "#f3feff" : "white" }}
    >
      <div className="card-header">
        <h3>{article.author}</h3>
        <em>Posté le {dateFormater(article.date)}</em>
      </div>
      {isEditing ? (
        <textarea
          defaultValue={editContent ? editContent : article.content}
          autoFocus
          onChange={(e) => setEditContent(e.target.value)}
        ></textarea>
      ) : (
        <p>{editContent ? editContent : article.content}</p>
      )}

      <div className="btn-container">
        {isEditing ? (
          <button onClick={() => handleEdit()}>Valider</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button
          onClick={() => {
            if (
              window.confirm("êtes-vous sur de vouloir supprimer l'article?")
            ) {
              handleDelete();
            }
          }}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default Article;
