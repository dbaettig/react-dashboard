import React from 'react';


class Todolist extends React.Component {

    state = {
        name: '',
        items: JSON.parse(localStorage.getItem('newItems')) || [],


    }


    onChange = (event) => {
        this.setState({ name: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();

        let newItems = [...this.state.items];
        newItems.push(this.state.name);
        this.setState({ items: newItems, name: '' });

        localStorage.setItem("newItems", JSON.stringify(newItems));
        localStorage.setItem("name", "");

    }

    updateInput(key, value) {
        // update react state
        this.setState({ [key]: value });

        // update localStorage
        localStorage.setItem(key, value);

    }


    render() {
        const List = props => (
            <ul>
                {
                    props.items.map((item, index) => <li key={index}>{item}</li>)
                }

            </ul>
        );

        return (
            <div className="wrapper">
                <div className="todo">
                    <form onSubmit={this.onSubmit}>
                        <h1>todo's in japan</h1>
                        <input value={this.state.name} onChange={this.onChange} />
                        <button id="addtodo">Add todo</button>
                    </form>
                    <List items={this.state.items} />
                </div>
                <div className="facts">
                    The workaholism of the Japanese stems from the notion of giri,
                    or one’s duties and obligations to the society and its expectations.
                </div>
            </div >


        )



    }





}

export default Todolist;