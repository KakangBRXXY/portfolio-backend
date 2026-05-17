const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({
    message: "Wassup bro! REST API Portfolio Backend udah berhasil jalan 🚀",
    status: "Active"
  });
});

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Mantap! Koneksi ke database MySQL berhasil tersambung.');

    app.listen(PORT, () => {
      console.log(`🚀 Server ready dan stand by di http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Waduh, gagal nyambung ke database:', error);
  }
};

startServer();