import 'antd/dist/antd.css';
import './App.css';
import CoworkingAdministrationCard from './components/CoworkingAdministrationCard';
import EditTarifModal from './components/EditTarifModal';

const tarifInfo = {
  '1month': {price: 2500, discount: null},
  '6month': {price: 20001, discount: {old: 21502, percent: 3}},
  '1year': {price: 42600, discount: null},
}

function App() {
  return (
    <div className="coworkingAdministration">

      <EditTarifModal tarifInfo={tarifInfo} />

      <div className="container">

        <div className="cityBlock">
          <p className="cityBlockSubitle">Коворкинг в городе</p>
          <p className="cityBlockTitle">Ростов-на-Дону</p>
        </div>

        <div className="сoworkingAdministrationCardWrapper">
          <div>
            <CoworkingAdministrationCard tarifInfo={tarifInfo}  />
          </div>

          <div>
            <CoworkingAdministrationCard tarifInfo={tarifInfo} vip />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
