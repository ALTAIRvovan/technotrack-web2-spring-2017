/**
 * Created by altair on 28.03.17.
 */

import React from 'react';
import Form from 'grommet/components/Form';
import Footer from 'grommet/components/Footer';
import FormFields from 'grommet/components/FormFields';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';

class CreateMessageForm extends React.Component {

    state = {
        post_text: ''
    };

    inputPostText = (text) => {
        // console.log(text.target.value);
        this.setState({post_text: text.target.value})
    };

    submitForm = (event) => {
        console.log(event);
        event.preventDefault();
        this.props.sendMessage(this.state.post_text);
    };

    render() {
        return (
            <Form onSubmit={this.submitForm}>
                <FormFields>
                    <TextInput id='message_form_text'
                               name='text'
                               value={this.state.post_text}
                               onDOMChange={this.inputPostText}
                    />
                </FormFields>
                <Footer pad={{"vertical": "medium"}}>
                    <Button label='Submit'
                            type='submit'
                            primary={true}
                            onClick={this.submitForm}
                    />
                </Footer>
            </Form>
        )
    }
}

CreateMessageForm.propTypes = {
    sendMessage: React.PropTypes.func,
};

export default CreateMessageForm;