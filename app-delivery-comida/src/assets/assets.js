import basket_icon from './basket_icon.png'
import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

export const assets = {
    basket_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon
};

const potatoCategoryImages = {
  arrobas: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80&v=2',
  bultos: 'https://images.unsplash.com/photo-1508313880080-c4bef0730395?auto=format&fit=crop&w=800&q=80&v=2',
  criolla: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80&v=2',
  oferta: 'https://images.unsplash.com/photo-1508313880080-c4bef0730395?auto=format&fit=crop&w=800&q=80&v=2'
};

export const menu_list = [
    {
        menu_name: 'Por Arroba',
        menu_image: potatoCategoryImages.arrobas
    },
    {
        menu_name: 'Por Bulto',
        menu_image: potatoCategoryImages.bultos
    },
    {
        menu_name: 'Papa Criolla',
        menu_image: potatoCategoryImages.criolla
    },
    {
        menu_name: 'Ofertas de la Semana',
        menu_image: potatoCategoryImages.oferta
    }
];

export const food_list = [
    {
        _id: '1',
        name: 'Papa Pastusa',
        image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80&v=2',
        price: 25000,
        description: 'Arroba (12.5 kg) • Ideal para guiso, a la plancha y consumo familiar.',
        category: 'Por Arroba'
    },
    {
        _id: '2',
        name: 'Papa Sabanera',
        image: 'https://images.unsplash.com/photo-1508313880080-c4bef0730395?auto=format&fit=crop&w=800&q=80&v=2',
        price: 28000,
        description: 'Arroba (12.5 kg) • Papa firme y versátil para cocina tradicional.',
        category: 'Por Arroba'
    },
    {
        _id: '3',
        name: 'Papa Suprema',
        image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80&v=2',
        price: 85000,
        description: 'Bulto (50 kg) • Calidad premium para hogares, restaurantes y ventas mayoristas.',
        category: 'Por Bulto'
    },
    {
        _id: '4',
        name: 'Papa R-12',
        image: 'https://images.unsplash.com/photo-1508313880080-c4bef0730395?auto=format&fit=crop&w=800&q=80&v=2',
        price: 79000,
        description: 'Bulto (50 kg) • Papa de alta resistencia y excelente rendimiento en cocina.',
        category: 'Por Bulto'
    },
    {
        _id: '5',
        name: 'Papa Criolla Lavada',
        image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80&v=2',
        price: 34000,
        description: 'Papa Criolla • Lavada y lista para preparación gourmet y sancocho.',
        category: 'Papa Criolla'
    },
    {
        _id: '6',
        name: 'Papa Criolla Limpia',
        image: 'https://images.unsplash.com/photo-1508313880080-c4bef0730395?auto=format&fit=crop&w=800&q=80&v=2',
        price: 32000,
        description: 'Papa Criolla • Ajuste ideal para mercado local y cocina casera.',
        category: 'Papa Criolla'
    },
    {
        _id: '7',
        name: 'Combo Familiar Pastusa',
        image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80&v=2',
        price: 45000,
        description: 'Medio Bulto (25 kg) • Oferta de la semana para familias y ventas pequeñas.',
        category: 'Ofertas de la Semana'
    },
    {
        _id: '8',
        name: 'Combo Sabanera Premium',
        image: 'https://images.unsplash.com/photo-1508313880080-c4bef0730395?auto=format&fit=crop&w=800&q=80&v=2',
        price: 47000,
        description: 'Medio Bulto (25 kg) • Excelente relación precio-calidad para tu hogar.',
        category: 'Ofertas de la Semana'
    }
];
