import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

test('presents the engineering and web development portfolio', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', {
      name: /building digital experiences through technology and innovation/i,
    }),
  ).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /smart battery charger multiplexer/i })).toBeInTheDocument();
  expect(screen.getByText('First Class Honours')).toBeInTheDocument();
  expect(screen.getByText('Electrical Engineering Intern')).toBeInTheDocument();
});

test('presents the SunVolt Energy project with working external links', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: 'SunVolt Energy' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /view live website/i })).toHaveAttribute(
    'href',
    'https://sunvolt-energy-website.onrender.com',
  );
  expect(screen.getByRole('link', { name: /view source code/i })).toHaveAttribute(
    'href',
    'https://github.com/Martinonyekachi/sunvolt-energy-website',
  );
});

test('presents the Muse chat project with its screenshot and external links', () => {
  render(<App />);

  const projectHeading = screen.getByRole('heading', {
    name: 'Muse – Real-Time Chat Application',
  });
  const projectCard = projectHeading.closest('article');

  expect(projectHeading).toBeInTheDocument();
  expect(projectCard.querySelector('img')).toHaveAttribute(
    'src',
    '/muse-chat-preview.png',
  );
  expect(within(projectCard).getByRole('link', { name: 'Live Demo' })).toHaveAttribute(
    'href',
    'https://chat-app-1-0lcy.onrender.com/',
  );
  expect(within(projectCard).getByRole('link', { name: 'GitHub' })).toHaveAttribute(
    'href',
    'https://github.com/Martinonyekachi/chat-app.git',
  );
});

test('shows Martin’s contact details with working email, phone, and LinkedIn links', () => {
  render(<App />);

  expect(screen.getByRole('link', { name: /martinosuji104@gmail.com/i })).toHaveAttribute(
    'href',
    'mailto:martinosuji104@gmail.com',
  );
  expect(screen.getByRole('link', { name: '08112524993' })).toHaveAttribute(
    'href',
    'tel:08112524993',
  );
  expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/martin-osuji-2690133b5?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  );
});

test('mobile navigation opens and closes after choosing a section', () => {
  render(<App />);

  const menuButton = screen.getByRole('button', { name: /open navigation menu/i });
  expect(menuButton).toHaveAttribute('aria-expanded', 'false');

  fireEvent.click(menuButton);
  expect(menuButton).toHaveAttribute('aria-expanded', 'true');

  fireEvent.click(screen.getByRole('link', { name: 'Projects' }));
  expect(menuButton).toHaveAttribute('aria-expanded', 'false');
});
