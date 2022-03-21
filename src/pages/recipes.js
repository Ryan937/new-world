import './style.css';
import cimg from '../assets/newyork.jpg'
import cimg2 from '../assets/manhattan.jpg'
import cimg3 from '../assets/old Fashioned.jpg'
import cimg4 from '../assets/whisky sour.jpg'
import cimg5 from '../assets/rusty nail.jpg'
import cimg6 from '../assets/side car.jpg'
import React, { useState, useCallback} from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Card';

export default function Recipes() {
    return (
    <Row md={2} className="g-4">
    {Array.from({ length: 10 }).map((_, idx) => (
      <Col>
{/* <CardGroup>  */}
  <Card>
    <Card.Img variant="top" src={cimg} thumbnail/>
    <Card.Body>
      <Card.Title>Manhattan</Card.Title>
      <Card.Text>
      Bourbon  Whiskey1.1/2OZ<br/>
      Sweet Vermouth 3/4OZ<br/>
      Angostura Bitters 1 dash<br/>
      Glass : Cocktail glass<br/>
      Garnish : Cherry<br/>
      </Card.Text>
    </Card.Body>
  </Card>
{/*   <Card>
    <Card.Img variant="top" src={cimg2} width='50' height='600' thumbnail/>
    <Card.Body>
      <Card.Title>Old Fashioned </Card.Title>
      <Card.Text>
      Bourbon Whiskey 1 1/2 oz<br/>
      Cubed Sugar 1 ea<br/>
      Angostura Bitters 1 dash<br/>
      Soda Water 1/2 oz<br/>
      Glass : Old-fashioned Glass<br/>
      Garnish : A Slice of Orange and Cherry
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={cimg3} width='50' height='600' thumbnail/>
    <Card.Body>
      <Card.Title>NewYork</Card.Title>
      <Card.Text>
      Bourbon Whiskey 1 1/2 oz<br/>
      Lime Juice 1/2 oz<br/>
      Powdered Sugar 1 tsp<br/>
      Grenadine Syrup 1/2 tsp<br/>
      Glass : Cocktail Glass<br/>
      Garnish : Twist of Lemon peel
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={cimg4} width='50' height='600' thumbnail/>
    <Card.Body>
    <Card.Title>Whiskey sour</Card.Title>
      <Card.Text>
      Bourbon Whiskey 1 1/2 oz<br/>
      Lemon Juice 1/2 oz<br/>
      Powdered Sugar 1 tsp<br/>
      On Top with Soda Water 1 oz<br/>
      Glass : Sour Glass<br/>
      Garnish : A Slice of Lemon and Cherry
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={cimg5} width='50' height='600' thumbnail/>
    <Card.Body>
      <Card.Title>NewYork</Card.Title>
      <Card.Text>
      Scotch Whisky 1 oz<br/>
      Drambuie 1/2 oz<br/>
      Glass : Old-fashioned Glass<br/>
      Garnish : none
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={cimg6} width='50' height='600' thumbnail/>
    <Card.Body>
      <Card.Title>Manhattan</Card.Title>
      <Card.Text>
      Brandy 1 oz<br/>
      Cointreau 1 oz(or Triple Sec 1oz)<br/>
      Lemon Juice 1/4 oz<br/>
      Glass : Cocktail Glass<br/>
      Garnish : none
      </Card.Text>
    </Card.Body>
  </Card> */}
{/* </CardGroup>
 */}</Col>
   ))};
 </Row>
);
}