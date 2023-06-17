import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

describe("Navbar2", () => {
  it("should render the logo and list of links: about, contact", () => {
    render(<Navbar labels={ ['About', 'Contact']} />);
    const link = screen.getByRole("img")
    const about = screen.getByRole("link")
    const contact = screen.getByRole("link")
    expect(link).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
  })
})
