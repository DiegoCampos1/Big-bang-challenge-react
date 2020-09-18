import React from 'react';
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from 'mdbreact';
import { produtosShop } from '../../store/products';
import './style.css';

const CarouselPage = () => (
  <MDBContainer>
    <MDBCarousel
      activeItem={1}
      length={4}
      showControls={false}
      showIndicators={false}
      className="z-depth-1"
      interval={3000}
      slide
    >
      <MDBCarouselInner>
        <div className="containerCarousel">
          {produtosShop.map((produto, index) => (
            <MDBCarouselItem key={produto.nome} itemId={index + 1}>
              <MDBView>
                <img
                  className="d-block w-100"
                  src={produto.picture}
                  alt="First slide"
                  width="282"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">{produto.nome}</h3>
                <p className="productDescription">{produto.descricicao}</p>
                <p className="productvalue">{produto.valor}</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          ))}
        </div>
      </MDBCarouselInner>
    </MDBCarousel>
  </MDBContainer>
);

export default CarouselPage;
