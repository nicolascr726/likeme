para poder utilizar esta aplicacion es necesario instalar el paquete pg, express y nodemon en el backend y en el frontend es necesario instalar el paquete axios

tambien es de vital importancia crear la base de datos para que pueda guardar los datos que ingresemos en el formulario:

CREATE DATABASE likeme;
CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000),
descripcion VARCHAR(255), likes INT);
