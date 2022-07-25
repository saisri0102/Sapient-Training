import React from 'react'
import { storiesOf } from '@storybook/react'
import TermsCheckBox from './TermsCheckBox.js'

storiesOf('Terms&Conditions CheckBox', module)

    .add('Terms & Conditions', () =>
        <TermsCheckBox checkBoxLabel="By signing up you agree" href="#" text="Terms and Conditions" />
    )