import express from 'express';
import cors from 'cors';
import { join, resolve } from 'path';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

// app.get('/', async (_, res) => {
// 	res.json('hello, React server');
// });
// TODO this should probably be set to "/public"
app.use(express.static(resolve(__dirname, '../dist/')));

app.use((_, res) => {
	res.sendFile(join(__dirname, '..', 'dist/index.html'));
});

const start = async () => {
	app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
};

start();
