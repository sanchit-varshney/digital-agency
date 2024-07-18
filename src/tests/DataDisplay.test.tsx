import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from '../store';
import DataDisplay from '../components/DataDisplay';

const queryClient = new QueryClient();

describe('DataDisplay Component', () => {
    it('should render loading state initially', () => {
        render(
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <DataDisplay />
                </QueryClientProvider>
            </Provider>
        );
        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

});
