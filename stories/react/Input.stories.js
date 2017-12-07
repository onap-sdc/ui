import React from 'react';
import { action } from '@storybook/addon-actions';
import Examples from './utils/Examples.js';

import ReactInput from '../../src/react/Input.js';

import InputDefaultHtml from '../../components/input/input.html';
import InputRequiredHtml from '../../components/input/input-required.html';
import InputNumberHtml from '../../components/input/input-number.html';
import InputFileHtml from '../../components/input/input-file.html';
import InputViewOnlyHtml from '../../components/input/input-view-only.html';
import InputDisabledHtml from '../../components/input/input-disabled.html';
import InputPlaceholderHtml from '../../components/input/input-placeholder.html';
import InputErrorHtml from '../../components/input/input-error.html';

let examples = {
	'Input Default': {
		jsx: <ReactInput name='input1' value='Default' label='I am a label'  onChange={ action('input-change')}/>,
		html: InputDefaultHtml
	},
	'Input Required': {
		jsx: <ReactInput name='input2' value='Default' label='I am a label' isRequired onChange={ action('input-change')}/>,
		html: InputRequiredHtml
	},
	'Input Number': {
		jsx: <ReactInput name='input3' value='3' label='I am a label'  type="number" onChange={ action('input-change')}/>,
		html: InputNumberHtml
	},
	'Input File': {
		jsx: <ReactInput name='input4' value='Default' label='I am a label'  type="file" onChange={ action('input-change')}/>,
		html: InputFileHtml
	},
	'Input View Only': {
		jsx: <ReactInput value='Default' readOnly label='I am a label' onChange={ action('input-change')}/>,
		html: InputViewOnlyHtml
	},
	'Input Disabled': {
		jsx: <ReactInput value='Default' disabled label='I am a label' onChange={ action('input-change')}/>,
		html: InputDisabledHtml
	},
	'Input Placeholder': {
		jsx: <ReactInput  name='input5' placeholder='Write Here...' label='I am a label' onChange={ action('input-change')}/>,
		html: InputPlaceholderHtml
	},
	'Input Error': {
		jsx: <ReactInput value='Default' name='input6' label='I am a label' errorMessage='This is the error message' onChange={ action('input-change')}/>,
		html: InputErrorHtml
	}

}

const Inputs = () => (
		<Examples examples={examples} />
);

export default Inputs;