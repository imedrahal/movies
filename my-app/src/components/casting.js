import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../syles/search-card.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../syles/casting.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsArrowRightShort } from "react-icons/bs";
import "../syles/search-card.css";

function Casting() {
  const [imageLoading, setImageLoading] = useState(true);
  const movies = [
    {
      title: "Jim Carry",
      time: "Dr. Ivo",
      imageURL:
        "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/people/la-vie-des-people/news/jim-carrey-poste-un-selfie-de-lui-meconnaissable-et-inquiete-les-internautes-3470318/79096652-1-fre-FR/Jim-Carrey-poste-un-selfie-de-lui-meconnaissable-et-inquiete-les-internautes.jpg",
    },
    {
      title: "Jim Carry",
      time: "Dr. Ivo",
      imageURL:
        "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/people/la-vie-des-people/news/jim-carrey-poste-un-selfie-de-lui-meconnaissable-et-inquiete-les-internautes-3470318/79096652-1-fre-FR/Jim-Carrey-poste-un-selfie-de-lui-meconnaissable-et-inquiete-les-internautes.jpg",
    },
    {
      title: "Jim Carry",
      time: "Dr. Ivo",
      imageURL:
        "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/people/la-vie-des-people/news/jim-carrey-poste-un-selfie-de-lui-meconnaissable-et-inquiete-les-internautes-3470318/79096652-1-fre-FR/Jim-Carrey-poste-un-selfie-de-lui-meconnaissable-et-inquiete-les-internautes.jpg",
    },
    {
      title: "Jim Carry",
      time: "Dr. Ivo",
      imageURL:
        "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/people/la-vie-des-people/news/jim-carrey-poste-un-selfie-de-lui-meconnaissable-et-inquiete-les-internautes-3470318/79096652-1-fre-FR/Jim-Carrey-poste-un-selfie-de-lui-meconnaissable-et-inquiete-les-internautes.jpg",
    },
    {
      title: "Jim Carry",
      time: "Dr. Ivo",
      imageURL:
        "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/people/la-vie-des-people/news/jim-carrey-poste-un-selfie-de-lui-meconnaissable-et-inquiete-les-internautes-3470318/79096652-1-fre-FR/Jim-Carrey-poste-un-selfie-de-lui-meconnaissable-et-inquiete-les-internautes.jpg",
    },
    {
      title: "Jim Carry",
      time: "Dr. Ivo",
      imageURL:
        "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/people/la-vie-des-people/news/jim-carrey-poste-un-selfie-de-lui-meconnaissable-et-inquiete-les-internautes-3470318/79096652-1-fre-FR/Jim-Carrey-poste-un-selfie-de-lui-meconnaissable-et-inquiete-les-internautes.jpg",
    },
    {
      title: "Jim Carry",
      time: "Dr. Ivo",
      imageURL:
        "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/people/la-vie-des-people/news/jim-carrey-poste-un-selfie-de-lui-meconnaissable-et-inquiete-les-internautes-3470318/79096652-1-fre-FR/Jim-Carrey-poste-un-selfie-de-lui-meconnaissable-et-inquiete-les-internautes.jpg",
    },
    {
      title: "Jim Carry",
      time: "Dr. Ivo",
      imageURL:
        "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/people/la-vie-des-people/news/jim-carrey-poste-un-selfie-de-lui-meconnaissable-et-inquiete-les-internautes-3470318/79096652-1-fre-FR/Jim-Carrey-poste-un-selfie-de-lui-meconnaissable-et-inquiete-les-internautes.jpg",
    },
    {
      title: "Jim Carry",
      time: "Dr. Ivo",
      imageURL:
        "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/people/la-vie-des-people/news/jim-carrey-poste-un-selfie-de-lui-meconnaissable-et-inquiete-les-internautes-3470318/79096652-1-fre-FR/Jim-Carrey-poste-un-selfie-de-lui-meconnaissable-et-inquiete-les-internautes.jpg",
    },
    {
      title: "Jim Carry",
      time: "Dr. Ivo",
      imageURL:
        "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/people/la-vie-des-people/news/jim-carrey-poste-un-selfie-de-lui-meconnaissable-et-inquiete-les-internautes-3470318/79096652-1-fre-FR/Jim-Carrey-poste-un-selfie-de-lui-meconnaissable-et-inquiete-les-internautes.jpg",
    },
    {
      title: "Jim Carry",
      time: "Dr. Ivo",
      imageURL:
        "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/people/la-vie-des-people/news/jim-carrey-poste-un-selfie-de-lui-meconnaissable-et-inquiete-les-internautes-3470318/79096652-1-fre-FR/Jim-Carrey-poste-un-selfie-de-lui-meconnaissable-et-inquiete-les-internautes.jpg",
    },
    {
        title: "Jim Carry",
        time: "Dr. Ivo",
        imageURL:
          "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/people/la-vie-des-people/news/jim-carrey-poste-un-selfie-de-lui-meconnaissable-et-inquiete-les-internautes-3470318/79096652-1-fre-FR/Jim-Carrey-poste-un-selfie-de-lui-meconnaissable-et-inquiete-les-internautes.jpg",
      },
      {
        title: "Jim Carry",
        time: "Dr. Ivo",
        imageURL:
          "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/people/la-vie-des-people/news/jim-carrey-poste-un-selfie-de-lui-meconnaissable-et-inquiete-les-internautes-3470318/79096652-1-fre-FR/Jim-Carrey-poste-un-selfie-de-lui-meconnaissable-et-inquiete-les-internautes.jpg",
      },

    // Add more movie objects here
  ];

  const groupedMovies = [];
  for (let i = 0; i < movies.length; i += 6) {
    groupedMovies.push(movies.slice(i, i + 6));
  }

  return (
    <Row className="casting-rows">
      <p className="text-white display-6">Casting</p>

      {groupedMovies.map((movieGroup, groupIndex) => (
        <React.Fragment key={groupIndex}>
          {movieGroup.map((movie, movieIndex) => (
            <Col key={movieIndex} md={2} className="mb-5">
              <Card.Img
                variant="top"
                src={movie.imageURL}
                onLoad={() => setImageLoading(false)}
                onError={() => setImageLoading(false)}
                style={{
                  display: imageLoading ? "none" : "block",
                  borderRadius: "3px",
                  height: "9rem",
                  width: "9rem",
                }}
              />
              {imageLoading && (
                <Skeleton
                  height={200}
                  width={100}
                  style={{ display: "block" }}
                />
              )}
              <Card.Body>
                <Card.Title style={{ color: "white" }}>
                  {movie.title}
                </Card.Title>
                <Card.Text style={{ color: "grey" }}>{movie.time}</Card.Text>
              </Card.Body>
            </Col>
          ))}
          {groupIndex === groupedMovies.length - 1 && (
            <Col md={1} className="pt-5">
              <p style={{ color: "black", width: "150%", cursor: "pointer" }}>
                Voir tout <BsArrowRightShort color="black" fontSize={25} />
              </p>
            </Col>
          )}
        </React.Fragment>
      ))}
    </Row>
  );
}

export default Casting;
