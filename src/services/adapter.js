export const adaptOfferData = (data) => {
  return ({
    bedrooms: data.bedrooms,
    city: {
      location: {
        latitude: data.city.location.latitude,
        longitude: data.city.location.longitude,
        zoom: data.city.location.zoom
      },
      name: data.city.name
    },
    description: data.description,
    goods: data.goods,
    host: {
      avatarUrl: data.host[`avatar_url`],
      id: data.host.id,
      isUserPro: data.host[`is_pro`],
      userName: data.host.name
    },
    hotelId: data.id,
    hotelImages: data.images,
    isFavorite: data[`is_favorite`],
    isPremium: data[`is_premium`],
    location: {
      latitude: data.location.latitude,
      longitude: data.location.longitude,
      zoom: data.location.zoom
    },
    maxAdults: data[`max_adults`],
    previewSrc: data[`preview_image`],
    price: data.price,
    rating: data.rating,
    hotelName: data.title,
    offerType: data.type
  });
};

export const adaptOffersData = (data) => {
  return data.map((offerData) => {
    return adaptOfferData(offerData);
  });
};
