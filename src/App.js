import Costs from "./components/Costs/Costs";

const App = () => {

    const costs = [
        {
            date: new Date(2021,2,12),
            description: 'Холодильник',
            amount: 99.9
        },
        {
            date: new Date(2021,11,25),
            description: 'MacBook',
            amount: 123.65
        },
        {
            date: new Date(2021,4,1),
            description: 'Джинсы',
            amount: 100.9
        },
    ]

    return (
        <div>
            <h1>Начнем изучение реакт</h1>
            <Costs costs={costs}/>
        </div>
    );
}

export default App;
