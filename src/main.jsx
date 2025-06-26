import { createRoot } from 'react-dom/client';
import "./assets/css/index.css";
import 'bootstrap/dist/css/bootstrap.css';
import Router from './routes/route';



createRoot(document.getElementById('root')).render(
    <Router/>
);
