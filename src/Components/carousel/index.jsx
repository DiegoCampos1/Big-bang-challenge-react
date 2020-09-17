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

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={4}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          {produtosShop.map((produto, index) => (
            <MDBCarouselItem itemId={index + 1}>
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
                <h3 className="h3-responsive">{produtosShop[0].nome}</h3>
                <p>{produto.descricicao}</p>
                <p>{produto.valor}</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          ))}

        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselPage;
