import React, { Component } from 'react';
import apiClient from './apiClient';

interface Entity {
  id: number
}

export class HttpService {
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll<T>() {
       return apiClient.get<T[]>(this.endpoint)
    }

    update<T extends Entity>(entity: T) {
        return apiClient.patch(`${this.endpoint}/${entity.id}`, entity)
    }

    add<T>(body: T) {
        return apiClient.post(`${this.endpoint}`, body);
    }

    delete(id: number) {
        return apiClient.delete(`${this.endpoint}/id`);
    }
}

const create = (endpoint : string) =>  new HttpService(endpoint);
export default create;