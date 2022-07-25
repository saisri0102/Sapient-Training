import React from 'react'
import { render, screen } from '@testing-library/react';
import TermsCheckBox from './TermsCheckBox'
import "@testing-library/jest-dom/extend-expect";

describe("Checkbox Input", () => {

  test('render component', () => {
    render(<TermsCheckBox checkBoxLabel="By signing up you agree" href="#" text="Terms and Conditions" />)

    const element = screen.getByText(/By signing up you agree/i);
    expect(element).toBeInTheDocument();
  });

  it('text should be rendered correctly', () => {
    render(<TermsCheckBox checkBoxLabel="By signing up you agree" href="#" text="Terms and Conditions" />);

    const element = screen.getByText(/Terms and Conditions/i);
    expect(element.text).toBe("Terms and Conditions");
  })

});