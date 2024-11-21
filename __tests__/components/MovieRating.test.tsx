import { MovieRating } from '@/app/components/MovieRating';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

describe('<MovieRating />', () => {
    it('renders without crashing', () => {
        render(<MovieRating rating="pg" />);
        expect(screen.getByText("pg")).toBeInTheDocument();
    });
});