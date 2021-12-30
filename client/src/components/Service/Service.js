import { CardContent, CardMedia, Typography } from '@material-ui/core';
import { CardActions,Button } from '@mui/material';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Header/Header.css'

const Service = (props) => {
    const { title, img, description, id } = props.service;
    return (
        <div>
            <Col className='doc'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="240"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description.slice(0, 100)}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to={`/service/${id}`}><Button variant="contained">See details</Button></Link>
                    </CardActions>
                </Card>
            </Col>
        </div>
    );
};

export default Service;