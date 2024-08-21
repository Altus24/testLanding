import React from 'react';
import './Welcome.modules.css';
import NewsCard from '../NewsCard/NewsCard';
import img1 from '../../assets/6.png'
import img2 from '../../assets/1.jpg'
import img3 from '../../assets/5.png'


const newsItems = [
  {
    id: 1,
    title: 'Producto 1',
    description: 'DLorem ipsum dolor, sit amet consectetur adipisicing elit.',
    image: img1 // Asegúrate de tener las imágenes adecuadas
  },
  {
    id: 2,
    title: 'Producto 2',
    description: 'Dolore unde libero fuga iusto vero.',
    image: img2
  },
  {
    id: 3,
    title: 'Producto 3',
    description: ' facere officiis doloremque ea beatae sapiente',
    image: img3
  },
];

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="container">
        <h1 className='title'>Bienvenido!</h1>
        <p>El lugar donde la tradición y el sabor se encuentran.</p>
        <p>En Nuesdtro Restaurante, nos apasiona crear experiencias gastronómicas únicas, combinando ingredientes frescos, recetas auténticas y un ambiente acogedor para que disfrutes de cada momento. Desde nuestros platos estrella hasta nuestras especialidades diarias, cada bocado está diseñado para deleitarte.
        </p>
        <p>Ya sea que busques un lugar para compartir en familia, una cita especial o simplemente disfrutar de buena comida, estás en el sitio perfecto.
        </p>
        <p>Te invitamos a descubrir lo mejor de nuestra cocina. ¡Tu mesa te espera!</p>
      
      <div className="news-section">
        {newsItems.map(news => (
          <NewsCard
            key={news.id}
            title={news.title}
            description={news.description}
            image={news.image}
          />
        ))}
      </div>
    </div>
    </section >
  );
};

export default WelcomeSection   