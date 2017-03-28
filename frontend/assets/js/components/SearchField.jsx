/**
 * Created by altair on 28.03.17.
 */

import React from 'react';
import Form from 'grommet/components/Form';
import Footer from 'grommet/components/Footer';
import FormFields from 'grommet/components/FormFields';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';

class SearchField extends React.Component {

    state = {
        text: ''
    };

    inputPostText = (text) => {
        // console.log(text.target.value);
        this.setState({text: text.target.value})
    };

    submitForm = (event) => {
        console.log(event);
        event.preventDefault();
        this.props.doSearch(this.state.text);
    };

    render() {
        return (
            <Form onSubmit={this.submitForm}>
                <FormFields>
                    <TextInput id='search_form_text'
                               name='text'
                               value={this.state.text}
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

SearchField.propTypes = {
    doSearch: React.PropTypes.func,
};

export default SearchField;