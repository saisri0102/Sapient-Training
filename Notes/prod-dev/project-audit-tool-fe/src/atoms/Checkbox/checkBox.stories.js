import React from 'react'
import { storiesOf } from '@storybook/react'
import CheckBox from './CheckBox.js'

storiesOf('CheckBox', module)

    .add('Filter Status Checkbox', () =>
        <div>
            <CheckBox type="checkbox" checkBoxLabel="Complete" id="complete" /><br />
            <CheckBox type="checkbox" checkBoxLabel="Incomplete" id="incomplete" /><br />
            <CheckBox type="checkbox" checkBoxLabel="Closed" id="closed" /><br />
            <CheckBox type="checkbox" checkBoxLabel="Revisit" id="revisit"/>
        </div>
    )
