const element = <h1> Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));

class ExampleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count : 0};
    }
}