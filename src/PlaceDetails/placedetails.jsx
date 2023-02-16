import React from "react";

import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import Rating from "@mui/material/Rating";
import useStyles from "./styles";
import { ClassNames } from "@emotion/react";

function PlaceDetails({ place, selected, refProp }) {
  const classes = useStyles();

  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      <Card elevation={6}>
        <CardMedia
          style={{ height: 200 }}
          image={
            place.photo
              ? place.photo.images.large.url
              : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
          }
          title={place.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {place.name}
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Price</Typography>
            <Typography gutterBottom variant="subtitle1">
              {place.price_level}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Rating</Typography>
            <Rating size="small" value={Number(place.rating)} readOnly />
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Ranking</Typography>
            <Typography gutterBottom variant="subtitle1">
              {place.ranking}
            </Typography>
          </Box>
          {place?.awards?.map((award) => (
            <Box
              my={1}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <img src={award.images.small} alt={award.display.name} />
            </Box>
          ))}

          {place?.cuisine?.map(({ name }) => (
            <Chip
              key={name}
              size="small"
              label={name}
              className={classes.chip}
            ></Chip>
          ))}

          {place?.address && (
            <Typography
              gutterBottom
              variant="subtitle2"
              color="textSecondary"
              className={classes.subtitle}
            >
              <LocationOnIcon /> {place.address}
            </Typography>
          )}
          {place?.phone && (
            <Typography
              gutterBottom
              variant="subtitle2"
              color="textSecondary"
              className={classes.subtitle}
            >
              <PhoneIcon /> {place.phone}
            </Typography>
          )}

          <CardActions>
            {place?.web_url && (
              <Button
                size="small"
                color="primary"
                onClick={() => window.open(place.web_url, "_blank")}
              >
                Trip Advisor
              </Button>
            )}
            {place?.website && (
              <Button
                size="small"
                color="primary"
                onClick={() => window.open(place.website, "_blank")}
              >
                Website
              </Button>
            )}
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
}

export default PlaceDetails;
