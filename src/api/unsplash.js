import React from 'react';
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID 1qAhF0VyAg-7evuJ_UgKwQnZNh-6PWKiT7OpKtyo3uk'
    }
});

