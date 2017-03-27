/**
 * Created by altair on 26.03.17.
 */

import React from 'react';
import Form from 'grommet/components/Form';
import Footer from 'grommet/components/Footer';
import FormFields from 'grommet/components/FormFields';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';

class CreatePostForm extends React.Component {

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
        this.props.createPost(this.state.post_text);
    };

    render() {
        return (
            <Form onSubmit={this.submitForm}>
                <FormFields>
                    <TextInput id='post_form_text'
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

export default CreatePostForm;