import { Provider } from 'react-redux';
import { store } from '../state';
import RepositroiesList from './RepositoriesList';


const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>Search For a Package</h1>
                <RepositroiesList/>
            </div>
        </Provider>
    )
};

export default App;