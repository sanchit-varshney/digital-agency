import axios from 'axios';
import api from '../api';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('API', () => {
    it('should fetch data successfully', async () => {
        const data = [{ id: 1, name: 'Test', description: 'Test description' }];
        mockedAxios.get.mockResolvedValue({ data });

        const response = await api.get('/data');
        expect(response.data).toEqual(data);
    });

    it('should handle token expiration', async () => {
        mockedAxios.get.mockRejectedValue({ response: { status: 401 } });

        try {
            await api.get('/data');
        } catch (error) {
            expect(localStorage.getItem('token')).toBeNull();
        }
    });
});
