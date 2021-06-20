import React,{ Component } from "react"

class Form extends Component {
    state = {
        name: '',
        number: '',

    }
    handleChange = (event) => {
        const { name, value } = event.target;
        console.log(event.target.name);

        this.setState({
            [name]: value //computer props міняє значення name
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.onCreate(this.state)
        this.setState({

        })
    }

    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="Name">Name</label>
                    <input
                        type="text"
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов.
                         Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required

                    />

                    <label htmlFor="Number">Number</label>
                    <input
                        type="tel"
                        name='number'
                        value={this.state.number}
                        onChange={this.handleChange}
                    />

                    <button>+</button>
                </div>

            </form>

        )

    }

}

export default Form
