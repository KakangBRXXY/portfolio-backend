'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin123', salt);

    await queryInterface.bulkInsert('Users', [{
      nama: 'Admin Portfolio',
      email: 'admin@portfolio.com',
      password: hashedPassword,
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

    await queryInterface.bulkInsert('Projects', [
      {
        judul: 'Portfolio Keren iOS Style',
        deskripsi: 'Website portfolio responsive dengan efek glassmorphism ala iOS.',
        teknologi: 'React, Vite, Tailwind CSS',
        url_github: 'https://github.com/lo/portfolio',
        url_demo: 'https://portfolio.com',
        gambar: 'portfolio.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        judul: 'E-Commerce App',
        deskripsi: 'Aplikasi belanja online dengan fitur real-time payment.',
        teknologi: 'Node.js, Express, React',
        url_github: 'https://github.com/lo/ecommerce',
        url_demo: null,
        gambar: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    await queryInterface.bulkInsert('Skills', [
      { nama: 'React.js', kategori: 'Frontend', level: 'Menengah', icon: '⚛️', deskripsi: 'Bikin SPA', createdAt: new Date(), updatedAt: new Date() },
      { nama: 'Express.js', kategori: 'Backend', level: 'Pemula', icon: '🖥️', deskripsi: 'Bikin REST API', createdAt: new Date(), updatedAt: new Date() },
      { nama: 'MySQL', kategori: 'Database', level: 'Pemula', icon: '🗄️', deskripsi: 'Query database', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Projects', null, {});
    await queryInterface.bulkDelete('Skills', null, {});
  }
};