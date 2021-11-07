import React, {Component} from 'react';
// import styles from './ContactForm.module.css'


class ContactForm extends Component {
    state = {
    name: '',
    number: ''
    }

    handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
    };

    reset = () => {
        this.setState({ name: '', number: ''});
    }

  handleSubmit = (e) => {
    e.preventDefault();

    const inputName = e.currentTarget.name.value;
      const inputNumber = e.currentTarget.number.value;

      this.props.onSubmit(inputName, inputNumber);
      this.reset();
  };

    
    render() {
        const { name, number } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
            <input
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя"
                onChange={this.handleChange}
                required
            />
                </label>
                <label>
                    Number
            <input
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона"
                onChange={this.handleChange}
                required
                />
                </label>
                <button type='submit' >Add contact</button>
                </form>
        )
    }
}
export default ContactForm;