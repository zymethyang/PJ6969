import { API_ENDPOINT } from './config';

export function apiGet({ endpoint, authorization = null }) {
    return fetch(`${API_ENDPOINT}/${endpoint}`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            authorization,
        },
        method: 'GET',
    }).then((response) => response.json());
}

export function apiPost({ endpoint, authorization, body }) {
    return fetch(`${API_ENDPOINT}/${endpoint}`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            authorization,
        },
        method: 'POST',
        body: JSON.stringify(body),
    }).then((response) => response.json());
}

export function apiPut({ endpoint, authorization, body }) {
    return fetch(`${API_ENDPOINT}/${endpoint}`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            authorization,
        },
        method: 'PUT',
        body: JSON.stringify(body),
    });
}

export function apiDelete({ endpoint, authorization = null }) {
    return fetch(`${API_ENDPOINT}/${endpoint}`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            authorization,
        },
        method: 'DELETE',
    });
}