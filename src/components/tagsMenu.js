import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, Typography, Checkbox, Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'block',
    flexWrap: 'nowrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


const Tags = [
    "Ados",
    "Bibliothèques",
    "Cinéma",
    "En famille",
    "Enfants",
    "English",
    "Étudiants",
    "Expos",
    "Geek",
    "Gourmand",
    "Insolite",
    "Les Nuits",
    "Musique",
    "Noël",
    "Plein air",
    "Queer Lgbt",
    "Solidaire",
    "Sport",
    "Urbain",
    "Végétalisons Paris",
]


export default function Filters() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const DisplayTags = []
  const Tag = (id, tag) => (
    <Card key={id}>
        <CardContent>
            <Typography component="h2">
                {tag}
            </Typography>
            <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
        </CardContent>
    </Card>
  )

    for (let i = 0, j = Tags.length; i < j; i++) {
        DisplayTags.push(Tag(i, Tags[i]))
    }



  return (
    <Container>
        {DisplayTags}
    </Container>
  );
}